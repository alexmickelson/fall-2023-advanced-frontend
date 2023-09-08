import React, { FC, useEffect, useState } from "react";

export const FilterInput: FC<{ onChange: (i: string) => void }> = ({
  onChange,
}) => {
  const [filterUserInput, setFilterUserInput] = useState("");

  useEffect(() => {
    onChange(filterUserInput);
  }, [filterUserInput]);
  return (
    <>
      <label htmlFor="filterBooks" className="form-label">
        Filter:
      </label>
      <input
        className="form-control"
        placeholder="Filter books..."
        id="filterBooks"
        value={filterUserInput}
        onChange={(e) => {
          setFilterUserInput(e.target.value);
        }}
      />
    </>
  );
};
