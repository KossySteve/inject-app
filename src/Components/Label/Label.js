import React from "react";
import classNames from 'classnames';
import './Label.scss';

const Label = ({ id, title, className }) => {
  const labelClass = classNames('label', className);

  return id ? (
    <label className={labelClass} htmlFor={id}>
      {title}
    </label>
  ) : (
    <span className={labelClass}>{title}</span>
  );
};

export default Label;
