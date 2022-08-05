import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import { getFilteredTickets, getTickets } from "./services";
import { ITicket } from "./interfaces";
import AirplaneLogo from "./assets/airplane.svg";
import { FlightBox } from "./components/FlightBox";
import { Filter } from "./components/Filter";

function App() {
  const [tickets, setTickets] = useState<null | ITicket[]>(null);

  const [checkedFilters, setCheckedFilters] = useState([
    false,
    false,
    false,
    false,
  ]);

  const fetchDataWithNoFilters = async () => {
    const flightTickets = await getTickets();
    setTickets(flightTickets as ITicket[]);
  };

  const fetchFilteredData = async (filters: Boolean[]) => {
    //make a string of checked stops to pass as a query param
    const indices = filters.reduce(
      (out, bool, index) => (bool ? out + "&stops=" + index : out),
      "?"
    );

    const filteredTickets = await getFilteredTickets(indices);
    setTickets(filteredTickets as ITicket[]);
  };

  const onFilterChange = (e: ChangeEvent, stops: string) => {
    const { checked } = e.target as HTMLInputElement;
    const filters = checkedFilters;
    filters[Number(stops)] = checked;
    setCheckedFilters(filters);

    if (filters.some((element) => element === true)) {
      fetchFilteredData(filters);
      return;
    }
    fetchDataWithNoFilters();
  };

  useEffect(() => {
    console.log(11);

    fetchDataWithNoFilters();
  }, []);

  return (
    <div className="App">
      <div className="logo_container">
        <img src={AirplaneLogo} alt="React Logo" height={60} width={60} />
      </div>

      <div className="main">
        <Filter onFilterChange={onFilterChange} />
        <div className="flights_container">
          {tickets &&
            tickets.map((ticket: ITicket, index) => (
              <FlightBox key={index} flightInfo={ticket} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
