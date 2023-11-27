/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Controller } from 'react-hook-form';

const SelectComponent = ({ label, options, name, control, defValue }) => {
  return (
    <div className="mb-2">
      <label className="form-label">{label}</label>
      <Controller
        control={control}
        name={name}
        defaultValue={defValue}
        render={({ field }) => (
          <select
            className="form-select"
            aria-label="Default select example"
            value={field.value}
            onChange={(e) => field.onChange(e.target.value)}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}
      />
    </div>
  );
};

export default SelectComponent;