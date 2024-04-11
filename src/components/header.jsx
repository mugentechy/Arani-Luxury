import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import '../assets/header.css'; // Import your CSS file

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <header className="background" {...restProps}>{children}</header> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <div className="container" {...restProps}>{children}</div>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return (
    <a className="button-link" {...restProps}>
      {children}
      <img src="/images/icons/logo.png" alt="Try Now" /> 
    </a>
  );
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to} className="logo-link">
      <img className="logo" {...restProps} />
    </ReactRouterLink>
  );
};
