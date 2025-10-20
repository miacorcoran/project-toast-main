// Import react
import React from 'react';

import {
  // Error notifs 
  AlertOctagon,
  // Warning notifs
  AlertTriangle,
  // Success notifs
  CheckCircle,
  // Notice/informal notifs
  Info,
  // X button icon
  X,
} from 'react-feather';

// Hids text visually but keeps it for screen readers
import VisuallyHidden from '../VisuallyHidden';
import { ToastContext } from '../ToastProvider';
// Styles
import styles from './Toast.module.css';

// Maps each toast variant to its corresponding icon
const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ id, variant, children }) {
  // Acess dismissToast function from ToastContext
  const { dismissToast } = React.useContext(ToastContext);
  // Get appropriate icon for each toast variant
  const Icon = ICONS_BY_VARIANT[variant];

  return (
    // Main toast contaienr
    <div className={`${styles.toast} ${styles[variant]}`}>
      {/* Displays icon for corresponding toast */}
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      {/* Toast message content */}
      <p className={styles.content}>
        <VisuallyHidden>
          {variant} -
        </VisuallyHidden>
        {/* Actual content passed as children */}
        {children}
      </p>
      {/* Close button to dismiss toasts */}
      <button 
        className={styles.closeButton}
        // Gets toasts unique id
        onClick={() => dismissToast(id)}
        // Accessible label for screen readers
        aria-label="Dismiss message"
        // Gets rid of auto announcing for screen reading
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  );
}

// Export component for use elsewhere
export default Toast;
