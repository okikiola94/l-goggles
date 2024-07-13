// src/components/MotionButton.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface MotionButtonProps {
  text: string;
  shape?: 'rounded' | 'square';
  size?: 'small' | 'medium' | 'large';
  bgColor?: string;
  onClick?: () => void;
}

const sizeClasses = {
  small: 'px-4 py-2 text-sm',
  medium: 'px-6 py-3 text-base',
  large: 'px-8 py-4 text-lg',
};

const shapeClasses = {
  rounded: 'rounded-full',
  square: 'rounded-none',
};

const MotionButton: React.FC<MotionButtonProps> = ({
  text,
  shape = 'rounded',
  size = 'medium',
  bgColor = 'bg-blue-500',
  onClick,
}) => {
  return (
    <motion.button
      className={`${sizeClasses[size]} ${shapeClasses[shape]} ${bgColor} text-white font-semibold focus:outline-none`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {text}
    </motion.button>
  );
};

export default MotionButton;
