import React from 'react';

const Logo = ({ size = 'sm', variant = 'primary', className = '' }) => {
  // USER ACTION: Replace 'logo.png' with your actual logo file name
  // and place it in the 'frontend/public/' directory.
  // For example, if your logo is 'my_company_logo.svg', change to '/my_company_logo.svg'.
  const logoImageUrl = '/logo.png';
  
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
  // USER ACTION: Ensure your logo image (e.g., logo.png) is in frontend/public/
  return (
    <img 
      src={logoImageUrl} 
      alt="Rashn Logo" 
      className={`${sizeClasses[size]} object-contain ${className}`}
    />
  );

  
  // Temporary styled text logo - replace with image above when ready
  /*
  return (
    <div className={`${sizeClasses[size]} ${variantClasses[variant]} rounded-lg flex items-center justify-center ${className}`}>
      <span className={`${textColorClasses[variant]} font-bold text-xs tracking-wider`}>
        RASHN
      </span>
    </div>
  );
  */
};

export default Logo;