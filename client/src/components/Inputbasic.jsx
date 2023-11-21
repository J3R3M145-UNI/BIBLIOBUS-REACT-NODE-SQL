// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Inputbasic = ({ labelText }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="mb-2">
      <label className="form-label">{labelText}</label>
      <input
        type="text"
        className="form-control"
        id="basic-url"
        aria-describedby="basic-addon4"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {isFocused && (
        <div className="form-text" id="basic-addon4">
          Example help text goes outside the input group.
        </div>
      )}
    </div>
  );
};

Inputbasic.propTypes = {
  labelText: PropTypes.string.isRequired,
};

export default Inputbasic;