import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';   // ← Added this
import styles from './CustomerDashboard.module.css';
import NewOrderForm from '../NewOrderForm/NewOrderForm';
import OrdersList from '../NewOrderForm/OrdersList';

const CustomerDashboard: React.FC = () => {
  const navigate = useNavigate();   // ← Correct hook

  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'orders' | 'new-order' | 'invoices' | 'chat'>('orders');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://moneedi-app.onrender.com/api/orders', {
        credentials: 'include',
      });

      if (!response.ok) throw new Error('Failed to fetch orders');
      
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      toast.error('Failed to load your orders');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Fixed Sign Out Function
  const signOut = async () => {
    try {
      await fetch('https://moneedi-app.onrender.com/api/logout', {   // ← Fixed route
        method: 'POST',
        credentials: 'include',
      });

      toast.success("Logged out successfully");
      
      // Navigate to customer login
      navigate('/customer-login');
      
    } catch (error) {
      console.error("Logout error:", error);
      // Even if backend fails, we still logout on frontend
      toast.success("Logged out");
      navigate('/customer-login');
    }
  };

  return (
    <div className={styles.dashboardContainer}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.leftHeader}>
            <button className={styles.hamburger} onClick={toggleSidebar}>
              ☰
            </button>
            <h1 className={styles.logo}>Moneedi Enterprise</h1>
          </div>
          
          <div className={styles.userInfo}>
            <span>Welcome back</span>
            <button 
              className={styles.logoutBtn} 
              onClick={signOut}           // ← Connected here
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className={styles.mainContent}>
        {/* Collapsible Sidebar */}
        <aside className={`${styles.sidebar} ${isSidebarOpen ? styles.open : styles.closed}`}>
          <nav className={styles.nav}>
            <button 
              className={`${styles.navButton} ${activeTab === 'orders' ? styles.active : ''}`}
              onClick={() => setActiveTab('orders')}
            >
              📋 My Orders
            </button>
            
            <button 
              className={`${styles.navButton} ${activeTab === 'new-order' ? styles.active : ''}`}
              onClick={() => setActiveTab('new-order')}
            >
              ➕ New Order / Quotation
            </button>

            <button 
              className={`${styles.navButton} ${activeTab === 'invoices' ? styles.active : ''}`}
              onClick={() => setActiveTab('invoices')}
            >
              📄 Invoices & Receipts
            </button>

            <button 
              className={`${styles.navButton} ${activeTab === 'chat' ? styles.active : ''}`}
              onClick={() => setActiveTab('chat')}
            >
              💬 Chat with Admin
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className={styles.contentArea}>
          {activeTab === 'orders' && (
            <div className={styles.tabContent}>
              <h2 className={styles.pageTitle}>My Orders</h2>
              <OrdersList 
                orders={orders} 
                loading={loading} 
                onOrderDeleted={fetchOrders} 
              />
            </div>
          )}

          {activeTab === 'new-order' && (
            <div className={styles.tabContent}>
              <NewOrderForm />
            </div>
          )}

          {activeTab === 'invoices' && (
            <div className={styles.tabContent}>
              <h2 className={styles.pageTitle}>Invoices & Receipts</h2>
              <p>Your invoices and payment records will appear here.</p>
            </div>
          )}

          {activeTab === 'chat' && (
            <div className={styles.tabContent}>
              <h2 className={styles.pageTitle}>Chat with Admin</h2>
              <p>Live chat support coming soon.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default CustomerDashboard;