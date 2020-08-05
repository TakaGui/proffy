import React, { SelectHTMLAttributes } from 'react';

import './styles.css';

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
}

const Select: React.FC<ISelectProps> = ({ name, label, ...rest }) => {
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select id={name} {...rest} />
    </div>
  );
}

export default Select;
