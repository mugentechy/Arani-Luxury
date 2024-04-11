import React from 'react';
import '../assets/opt.css'; // Import your CSS file

export default function OptForm({ children, ...restProps }) {
  return <div className="opt-form" {...restProps}>{children}</div>;
}

OptForm.Input = function OptFormInput({ ...restProps }) {
  return <input className="input" {...restProps} />;
};

OptForm.Base = function OptFormBase({ children, ...restProps }) {
  return <form className="base" {...restProps}>{children}</form>;
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <button className="button" {...restProps}>
      {children}
      <img src='/images/icons/chevron-right.png' alt='Try Now' />
    </button>
  );
};

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <p className="text" {...restProps}>{children}</p>;
};

OptForm.Break = function OptFormBreak({ ...restProps }) {
  return <div className="break" {...restProps} />;
};
