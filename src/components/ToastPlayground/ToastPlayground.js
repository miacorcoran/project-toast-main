import React from 'react';

// Single toast component
import Toast from '../Toast';
// Button
import Button from '../Button';
// Shows all active toasts
import ToastShelf from '../ToastShelf';
// Create + dismiss toasts
import ToastProvider, { ToastContext } from '../ToastProvider';
// Styles
import styles from './ToastPlayground.module.css';

// Toast variants to choose from
const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  // Access to createToast function from context
  const { createToast } = React.useContext(ToastContext);
  // Local state : holds users input message 
  const [message, setMessage] = React.useState('');
  // Local state : holds currently selected variant, defualt is first option
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);

  // Form submission
  function handleCreateToast(event) {
    // Prevent form from reloading page
    event.preventDefault();
    CreateToast(message, variant)
    // Reset input fields after making toast
    setMessage('');
    setVariant(VARIANT_OPTIONS[0]);
  }

  return (
    <div className={styles.wrapper}>
      {/* Title + image */}
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      
      {/* display all active toasts */}
      <ToastShelf />

      {/* form for new toast */}
      <form 
        className={styles.controlsWrapper} 
        onSubmit={handleCreateToast}
      >
        {/* text message field */}
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          {/* Area where user types message */}
          <div className={styles.inputWrapper}>
            <textarea 
            id="message" 
            className={styles.messageInput}
            value={message}
            onChange={(event) => {
              // Updates message as user types
              setMessage(event.target.value);
            }}
            />
          </div>
        </div>

        {/* Radio buttons */}
        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {/* radio button for each variant option */}
            {VARIANT_OPTIONS.map((option) => {
              const id = `variant-${option}`
              return(
                <label key={id} htmlFor={id}>
                <input
                  id={id}
                  type="radio"
                  name="variant"
                  value={option}
                  checked={option === variant}
                  onChange={(event) => {
                    // Update selected variant
                    setVariant(event.target.value);
                  }}
                />
                {option}
              </label>
              )
            })}
          </div>
        </div>
        {/* Submit button */}
        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>
                Pop Toast!
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
