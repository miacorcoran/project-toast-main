import React from 'react';

// Triggers new toasts
import ToastPlayground from '../ToastPlayground';
import Footer from '../Footer';
// Toast data
import ToastProvider from '../ToastProvider';

function App() {
  return (
    // Wrap all in ToastProvider
    <ToastProvider>
      <ToastPlayground />
      <Footer />
    </ToastProvider>
  );
}

// Export for use elsewhere
export default App;
