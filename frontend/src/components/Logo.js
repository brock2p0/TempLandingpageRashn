import React from 'react';

const Logo = ({ size = 'sm', variant = 'primary', className = '' }) => {
  // You can replace this with your actual logo image
  const logoImageUrl = '/path/to/your/logo.png'; // Replace with your actual logo URL
  
  const sizeClasses = {
    sm: 'w-12 h-8',
    md: 'w-16 h-10',
    lg: 'w-24 h-16'
  };
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-teal-600 to-aqua-500',
    secondary: 'bg-gradient-to-r from-lime-400 to-lime-500'
  };
  
  const textColorClasses = {
    primary: 'text-white',
    secondary: 'text-teal-900'
  };
  
  // Uncomment this section when you have your logo image ready
  /*
  return (
    <img 
      src={logoImageUrl} 
      alt="Rashn Logo" 
      className={`${sizeClasses[size]} object-contain ${className}`}
    />
  );
  */
  
  // Temporary styled text logo - replace with image above when ready
  return (
    <div className={`${sizeClasses[size]} ${variantClasses[variant]} rounded-lg flex items-center justify-center ${className}`}>
      <span className={`${textColorClasses[variant]} font-bold text-xs tracking-wider`}>
        RASHN
      </span>
    </div>
  );
};

export default Logo;