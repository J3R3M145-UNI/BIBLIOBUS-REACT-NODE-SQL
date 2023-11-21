/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

const SelectComponent = ({ label, options, onSelectChange, selectedValue }) => {
  return (
    <div className="mb-2">
      <label className="form-label">{label}</label>
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={onSelectChange}
        value={selectedValue}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="form-text" id="basic-addon4">
        Example help text goes outside the input group.
      </div>
    </div>
  );
};

export default SelectComponent;