import React, { useState } from 'react';
import { toast } from 'react-toastify';
import styles from './NewOrderForm.module.css';

interface OrderItem {
  productName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

const NewOrderForm: React.FC = () => {
  const [items, setItems] = useState<OrderItem[]>([
    { productName: '', quantity: 1, unitPrice: 0, totalPrice: 0 }
  ]);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [isQuotation, setIsQuotation] = useState(false);
  const [loading, setLoading] = useState(false);

  const commonProducts = [
    "Pork Ribs", "Pork Shoulder", "Pork Belly", "Pork Loin", 
    "Pork Sausages", "Bacon", "Pork Mince", "Pork Chops"
  ];

  const addItem = () => {
    setItems([...items, { productName: '', quantity: 1, unitPrice: 0, totalPrice: 0 }]);
  };

  const removeItem = (index: number) => {
    if (items.length === 1) return;
    setItems(items.filter((_, i) => i !== index));
  };

  const updateItem = (index: number, field: keyof OrderItem, value: string | number) => {
    const updatedItems = [...items];
    updatedItems[index] = { ...updatedItems[index], [field]: value };

    if (field === 'quantity' || field === 'unitPrice') {
      updatedItems[index].totalPrice = 
        updatedItems[index].quantity * updatedItems[index].unitPrice;
    }

    setItems(updatedItems);
  };

  const totalAmount = items.reduce((sum, item) => sum + item.totalPrice, 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!deliveryAddress) {
      toast.error("Please enter delivery address");
      return;
    }

    if (items.some(item => !item.productName || item.quantity <= 0)) {
      toast.error("Please fill all product details correctly");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          items: items.map(item => ({
            productName: item.productName,
            quantity: item.quantity,
            unitPrice: item.unitPrice,
            totalPrice: item.totalPrice
          })),
          deliveryAddress,
          notes,
          quotationRequested: isQuotation
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(isQuotation 
          ? "Quotation request sent successfully!" 
          : "Order placed successfully!");
        
        // Reset form
        setItems([{ productName: '', quantity: 1, unitPrice: 0, totalPrice: 0 }]);
        setDeliveryAddress('');
        setNotes('');
        setIsQuotation(false);
      } else {
        toast.error(data.message || "Failed to submit order");
      }
    } catch (error) {
      toast.error("Connection error. Is the backend running?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.pageTitle}>
        {isQuotation ? "Request Quotation" : "Place New Order"}
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Items Section */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h3>Order Items</h3>
            <button type="button" onClick={addItem} className={styles.addButton}>
              + Add Item
            </button>
          </div>

          {items.map((item, index) => (
            <div key={index} className={styles.itemRow}>
              <div className={styles.productSelect}>
                <select
                  value={item.productName}
                  onChange={(e) => updateItem(index, 'productName', e.target.value)}
                  required
                >
                  <option value="">Select Product</option>
                  {commonProducts.map((prod) => (
                    <option key={prod} value={prod}>{prod}</option>
                  ))}
                  <option value="Other">Other (specify)</option>
                </select>
              </div>

              <input
                type="number"
                placeholder="Qty"
                value={item.quantity}
                onChange={(e) => updateItem(index, 'quantity', parseInt(e.target.value) || 1)}
                min="1"
                required
              />

              <input
                type="number"
                placeholder="Price per unit"
                value={item.unitPrice || ''}
                onChange={(e) => updateItem(index, 'unitPrice', parseFloat(e.target.value) || 0)}
                min="0"
                step="0.01"
                required
              />

              <div className={styles.itemTotal}>
                P{item.totalPrice.toFixed(2)}
              </div>

              {items.length > 1 && (
                <button 
                  type="button" 
                  onClick={() => removeItem(index)}
                  className={styles.removeBtn}
                >
                  ✕
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Total */}
        <div className={styles.totalSection}>
          <strong>Total Amount: </strong>
          <span className={styles.grandTotal}>P{totalAmount.toFixed(2)}</span>
        </div>

        {/* Delivery Address */}
        <div className={styles.section}>
          <label className={styles.label}>Delivery Address</label>
          <textarea
            value={deliveryAddress}
            onChange={(e) => setDeliveryAddress(e.target.value)}
            placeholder="Full delivery address in Botswana"
            rows={3}
            required
          />
        </div>

        {/* Notes */}
        <div className={styles.section}>
          <label className={styles.label}>Special Notes / Instructions (Optional)</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Any special requests, preferred delivery date, etc."
            rows={3}
          />
        </div>

        {/* Quotation Toggle */}
        <div className={styles.quotationToggle}>
          <label>
            <input
              type="checkbox"
              checked={isQuotation}
              onChange={(e) => setIsQuotation(e.target.checked)}
            />
            Request Quotation First (I want price confirmation before ordering)
          </label>
        </div>

        <button 
          type="submit" 
          className={styles.submitButton}
          disabled={loading}
        >
          {loading ? 'Processing...' : 
            isQuotation ? 'Send Quotation Request' : 'Place Order'}
        </button>
      </form>
    </div>
  );
};

export default NewOrderForm;