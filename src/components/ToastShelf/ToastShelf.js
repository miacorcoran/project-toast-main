import React from 'react';
// Imports toast component
import Toast from '../Toast';
// Styles for toast container
import styles from './ToastShelf.module.css';
// Gives access to toast state
import { ToastContext } from '../ToastProvider';

function ToastShelf( ) {
  // List of active toasts
  const { toasts } = React.useContext(ToastContext);
  return (
    // Ordered list container for active toasts
    <ol 
      // Styling
      className={styles.wrapper}
      // Accessiblity saying what it is
      role="region"
      // Announces new toasts
      aria-live="polite"
      // Label for screen reader
      aria-label="Notification"
    >
      {/* Loop through all ative toasts and render them */}
      {toasts.map((toast) => (
        // Each toast wrapped in li for spacing
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast
            // Unique identifier for toast
            id={toast.id}
            // Type of toast (success, error)
            variant={toast.variant}
          >
            {/* Toast message text */}
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

// Export component for use elsewhere
export default ToastShelf;
