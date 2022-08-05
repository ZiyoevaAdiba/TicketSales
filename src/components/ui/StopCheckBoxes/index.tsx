import { IFilterProps } from "../../Filter";
import "./StopCheckBoxes.css";

export const StopCheckBoxes = ({ onFilterChange }: IFilterProps) => {
  return (
    <div>
      {[
        { stops: "0", label: "Без пересадок" },
        { stops: "1", label: "1 пересадка" },
        { stops: "2", label: "2 пересадки" },
        { stops: "3", label: "3 пересадки" },
      ].map((item, index) => (
        <div className="stop_check_box" key={index}>
          <label className="stop_check_box_label">
            {item.label}
            <input
              type="checkbox"
              name={item.stops}
              onChange={(e) => onFilterChange(e, item.stops)}
            />
            <span className="checkmark"></span>
          </label>
        </div>
      ))}
    </div>
  );
};
