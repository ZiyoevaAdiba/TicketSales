import React, { ChangeEvent } from "react";
import { StopCheckBoxes } from "../ui";
import "./Filter.css";

export interface IFilterProps {
  onFilterChange: (event: ChangeEvent<HTMLInputElement>, stops: string) => void;
}

export const Filter = ({ onFilterChange }: IFilterProps) => {
  return (
    <div className="filter_container">
      {/* <p className="filter_title">Валюта</p> */}
      <p className="filter_title">Количество пересадок</p>
      <StopCheckBoxes onFilterChange={onFilterChange} />
    </div>
  );
};
