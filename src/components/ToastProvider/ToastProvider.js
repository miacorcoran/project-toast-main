import React from 'react';
// Custom hook to handle keypress events
import useKeydown from '../hooks/use-keydown';

// Creates a context to share toast data 
export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  // Holds array of the active toast objects
  const [toasts, setToasts] = React.useState([
    // Example starter code that shows up when loaded
    {
      // Unique identifier
      id: crypto.randomUUID(),
      // message to display
      message: 'Oh no!',
      // Color + icons
      variant: 'error',
    },
    {
      id: crypto.randomUUID(),
      message: 'Logged in',
      variant: 'success',
    },
  ]);

  // Clears all toasts when escape key is pressed
  const handleEscape = React.useCallback(() => {
    // Empty array
    setToasts([]);
  }, []);

  // Registers escape key with handler using custom hook
  useKeydown('Escape', handleEscape);

  // Creates + adds new toast to list
  function createToast(message, variant) {
    const nextToasts = [
      // Keeps existing toasts
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ];
    // Updates state with new array
    setToasts(nextToasts);
  }

  // Removes specific toast by its ID
  function dismissToast(id) {
    const nextToasts = toasts.filter(toast => {
      // Keeps only toasts that don't match dismissed ID
      return toast.id !== id
    })
    // Updates state with new array
    setToasts(nextToasts);
  }

  // Provides toast state + functions to all child components
  return <ToastContext.Provider value={{ toasts, createToast, dismissToast }}>
    {children}
  </ToastContext.Provider>
}

// export for use elsewhere
export default ToastProvider;
