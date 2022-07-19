import React from "react";
import classNames from 'classnames';
import './Input.scss';


const Input = ({
  id,
  name,
  type,
  value,
  error,
  handleChange,
  className,
}) => {
  const inputContainerClass = classNames('input-container', className);

  const inputClass = classNames('input');

  return (
    <div className={inputContainerClass}>
      <input
        className={inputClass}
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
      />
  
    </div>
  );
};

const InputGroup = ({ children }) => {
  return <div className="input-group">{children}</div>;
};

const Textarea = ({
  id,
  name,
  placeholder,
  rows = 7,
  cols = 50,
  className,
  handleChange,
  value,
}) => {
  const inputContainerClass = classNames('input-container', className);

  return (
    <div className={inputContainerClass}>
      <textarea
        className="input input--textarea"
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        onChange={handleChange}
      />
    </div>
  );
};

const Dropdown = ({ id, name, items, className, handleChange }) => {
  const inputContainerClass = classNames('input-container', className);

  return (
    <div className={inputContainerClass}>
      <select className="input input--dropdown" id={id} name={name} onChange={handleChange}>
        <option value="">Please select</option>
        {items.map((item, index) => {
          return (
            <option value={item} key={index}>
              {item}
            </option>
          );
        })}
      </select>
   
    </div>
  );
};



export { Input, InputGroup, Textarea, Dropdown};
export default Input;
