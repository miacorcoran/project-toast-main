import React from 'react';

import styles from './VisuallyHidden.module.css';

const VisuallyHidden = ({
  // Content to hide
  children,
  className = '',
  ...delegated
}) => {
  // Local state to temporarily 'show' hidden content
  const [forceShow, setForceShow] = React.useState(false);

  // Runs once on mount to add keyboard event listners
  React.useEffect(() => {
    // Debugging 
    if (process.env.NODE_ENV !== 'production') {
      // When Alt pressed, make hidden content visible
      const handleKeyDown = (ev) => {
        if (ev.key === 'Alt') {
          setForceShow(true);
        }
      };

      // When Alt is released, hide content again
      const handleKeyUp = () => {
        setForceShow(false);
      };

      // Event listeners
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);

      // Clean up function to remove event listeners when component unmounts
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keyup', handleKeyUp);
      };
    }
  }, []);

  // If alt pressed, show content
  if (forceShow) {
    return <span className={styles.showWrapper}>{children}</span>;
  }

  // Default : hide content
  return (
    // Hidding style
    <span className={`${className} ${styles.wrapper}`} {...delegated}>
      {children}
    </span>
  );
};

// Export for use elsewhere
export default VisuallyHidden;
