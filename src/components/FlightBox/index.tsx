import React from "react";
import { ITicket } from "../../interfaces";
import { BuyBtn } from "../ui";
import "./FlightBox.css";
import AirplaneIcon from "../../assets/airplane_icon.svg";
import { MONTHS, WEEKDAYS } from "../../consts";

interface FlightBoxProps {
  flightInfo: ITicket;
}
export const FlightBox = ({ flightInfo }: FlightBoxProps) => {
  const dateFormat = (date: string) => {
    const dateObj = new Date(date);
    const day = dateObj.getDate();
    const month = dateObj.getMonth();
    const year = dateObj.getFullYear();
    const weekday = dateObj.getDay();
    return `${day} ${MONTHS[month]} ${year}, ${WEEKDAYS[weekday]}`;
  };

  return (
    <div className="flight_box">
      <div className="flight_price_container">
        <div className="flight_company">
          <h1>{flightInfo.carrier}</h1>
        </div>
        <BuyBtn price={flightInfo.price} />
      </div>
      <div className="flight_info">
        <div className="origin">
          <p className="time">{flightInfo.departure_time}</p>
          <p className="airport">
            {flightInfo.origin}, {flightInfo.origin_name}
          </p>
          <p className="date">{dateFormat(flightInfo.departure_date)}</p>
        </div>
        <div>
          <div className="arrow">
            {flightInfo.stops === 0 ? "Без" : flightInfo.stops}
            {flightInfo.stops === 1 ? " пересадка" : " пересадки"}
          </div>
          <img
            src={AirplaneIcon}
            className="icon"
            alt="airplane"
            width={20}
            height={20}
          />
        </div>
        <div className="destination">
          <p className="time">{flightInfo.arrival_time}</p>
          <p className="airport">
            {flightInfo.destination_name}, {flightInfo.destination}
          </p>
          <p className="date">{dateFormat(flightInfo.arrival_date)}</p>
        </div>
      </div>
    </div>
  );
};
