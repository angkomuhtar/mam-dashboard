import React from "react";

const Header2 = ({
  children,
  className = "",
  color = "text-appPrimary-500",
  center = true,
  title,
}) => {
  return (
    <div>
      <div
        className={`flex ${
          center && "justify-center"
        } space-x-8 items-center mb-3`}>
        {center && <div className='bg-appPrimary-500 h-0.5 w-1/4' />}
        <h3
          className={`text-5xl font-light font-mr_dafoe ${className} ${color}`}>
          {title}
        </h3>
        {center && <div className='bg-appPrimary-500 h-0.5 w-1/4' />}
      </div>
      <p
        className={`font-open_sans text-lg text-font-400 font-light ${
          center && "text-center"
        }`}>
        {children}
      </p>
    </div>
  );
};

export default Header2;
