// DatePickerComponent.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm, Controller } from 'react-hook-form';

const DatePickerComponent = () => {
  const { control } = useForm();

  return (
    <div className="form-group">

      <Controller
        control={control}
        name="selectedDate"
        render={({ field }) => (
          <DatePicker
            {...field}
            selected={field.value}
            onChange={(date) => field.onChange(date)}
            dateFormat="dd/MM/yyyy"
            className="form-control"
          />
        )}
      />
      
    </div>
  );
};

export default DatePickerComponent;
