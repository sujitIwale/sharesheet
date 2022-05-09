import React, { useState } from "react";

const SearchInput = ({ onChange }) => {
  const [Value, setValue] = useState("");

  const onChangeHandler = (e) => {
    setValue(e.target.value);
    onChange(e, setValue);
  };
  return (
    <input
      type='text'
      onChange={onChangeHandler}
      value={Value}
      placeholder='please enter a email address'
    />
  );
};

export default SearchInput;
