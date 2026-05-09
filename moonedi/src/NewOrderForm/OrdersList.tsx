import React from 'react';
import { toast } from 'react-toastify';
import styles from './OrdersList.module.css';

interface Order {
  _id: string;
  items: any[];
  totalAmount: number;
  status: string;
  deliveryAddress: string;
  createdAt: string;
  notes?: string;
}

interface OrdersListProps {
  orders: Order[];
  loading: boolean;
  onOrderDeleted: () => void;   // Refresh list after delete
}

const OrdersList: React.FC<OrdersListProps> = ({ orders, loading, onOrderDeleted }) => {

  const handleDelete = async (orderId: string) => {
    if (!window.confirm("Are you sure you want to delete this order?")) return;

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/orders/${orderId}`, {
        method: 'DELETE',
        credentials: 'include',
      });

      if (response.ok) {
        toast.success("Order deleted successfully");
        onOrderDeleted();        // Refresh the list
      } else {
        toast.error("Cannot delete this order");
      }
    } catch (error) {
      toast.error("Failed to delete order");
    }
  };

  if (loading) return <p>Loading orders...</p>;
  if (orders.length === 0) {
    return (
      <div className={styles.emptyState}>
        <h3>No orders yet</h3>
        <p>You haven't placed any orders yet.</p>
      </div>
    );
  }

  return (
    <div className={styles.ordersList}>
      {orders.map((order) => (
        <div key={order._id} className={styles.orderCard}>
          <div className={styles.orderHeader}>
            <div>
              <span className={styles.orderId}>Order #{order._id.slice(-8)}</span>
              <span className={`${styles.status} ${styles[order.status]}`}>
                {order.status.toUpperCase()}
              </span>
            </div>
            <span className={styles.date}>
              {new Date(order.createdAt).toLocaleDateString('en-BW')}
            </span>
          </div>

          <div className={styles.items}>
            {order.items.map((item: any, idx: number) => (
              <div key={idx} className={styles.item}>
                {item.productName} × {item.quantity} — P{item.totalPrice}
              </div>
            ))}
          </div>

          <div className={styles.footer}>
            <div className={styles.total}>
              <strong>Total: P{order.totalAmount.toLocaleString()}</strong>
            </div>

            {order.status === 'pending' && (
              <button 
                onClick={() => handleDelete(order._id)}
                className={styles.deleteBtn}
              >
                Delete Order
              </button>
            )}
          </div>

          {order.notes && (
            <p className={styles.notes}><strong>Notes:</strong> {order.notes}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default OrdersList;