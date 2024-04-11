import React from 'react';
import '../assets/form.css'; // Import your CSS file

export default function Form({ children }) {
  return <div className="container">{children}</div>;
}

Form.Base = function FormBase({ children }) {
  return <form className="base">{children}</form>;
};

Form.Error = function FormError({ children }) {
  return <div className="error">{children}</div>;
};

Form.Title = function FormTitle({ children }) {
  return <h1 className="title">{children}</h1>;
};

Form.Text = function FormText({ children }) {
  return <p className="text">{children}</p>;
};

Form.TextSmall = function FormTextSmall({ children }) {
  return <p className="text-small">{children}</p>;
};

Form.Link = function FormLink({ children }) {
  return <a className="link">{children}</a>;
};

Form.Input = function FormInput({ ...restProps }) {
  return <input className="input" {...restProps} />;
};

Form.Submit = function FormSubmit({ children, ...restProps }) {
  return (
    <button type="submit" className="submit" {...restProps}>
      {children}
    </button>
  );
};

Form.Image = function FormImage({ ...restProps }) {
  return <img className="image" {...restProps} />;
};
