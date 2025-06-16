import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  
  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const checkPointer = () => {
      const target = document.elementFromPoint(position.x, position.y);
      if (target) {
        const computed = window.getComputedStyle(target).cursor;
        setIsPointer(computed === 'pointer');
      }
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mousemove', checkPointer);
    
    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mousemove', checkPointer);
    };
  }, [position.x, position.y]);

  return (
    <motion.div
      className={`custom-cursor ${isPointer ? 'cursor-grow' : ''}`}
      style={{ left: position.x, top: position.y }}
      animate={{ 
        left: position.x, 
        top: position.y,
        scale: isPointer ? 3 : 1
      }}
      transition={{ 
        type: 'spring', 
        mass: 0.1, 
        stiffness: 1000, 
        damping: 30
      }}
    />
  );
};

export default CustomCursor;