/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller } from 'react-hook-form';
import { addDays, format } from 'date-fns';

const DatePickerComponent = ({ control, defaultValue }) => {
  return (
    <div className="form-group">
      <Controller
        control={control}
        name="VENCE"
        defaultValue={defaultValue}
        render={({ field }) => (
          <DatePicker
            {...field}
            selected={field.value ? new Date(field.value) : null}
            onChange={(date) => {
              const formattedDate = date ? format(date, 'yyyy-MM-dd') : null;
              field.onChange(formattedDate);
            }}
            dateFormat="dd/MM/yyyy"
            className="form-control"
          />
        )}
      />
    </div>
  );
};

export default DatePickerComponent;