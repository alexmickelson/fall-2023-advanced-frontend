import React, { FC, useState } from "react";

export interface FitlerValueControl {
  filterValue: string,
  setFilterValue: (newvalue: string) => void
}

export const useFilterInput = (): FitlerValueControl => {
  const [filterValue, setFilterValue] = useState("");
  return {
    filterValue,
    setFilterValue,
  };
};

export const FilterInput: FC<{ control: FitlerValueControl }> = ({control}) => {
  const label = "filterInput";
  return (
    <div>
      <div className="mb-3">
        <label htmlFor={label} className="form-label">
          Filter
        </label>
        <input
          type="email"
          className="form-control"
          id={label}
          value={control.filterValue}
          onChange={e => control.setFilterValue(e.target.value)}
        />
      </div>
    </div>
  );
};
