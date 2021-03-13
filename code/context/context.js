import React, { useState } from "react";
export const DataContext = React.createContext();
export const DataProvider = ({ children }) => {
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Aircc",
      time: "2021-03-13T14:03:22.703Z",
      body: "loremipsumloremipsumloremipsumloremlorempsumloremipsuml",
      key: "1",
    },
    {
      title: "Mohammad Jacob 'Beienak' ",
      time: "2021-03-13T14:05:22.703Z",
      body: "loremipsumloremipsumloremipsumloremlorempsumloremipsuml",
      key: "2",
    },
    {
      title: "Zelda, Breath of Fresh Aircc",
      time: "2021-03-13T14:07:22.703Z",
      body: "loremipsumloremipsumloremipsumloremlorempsumloremipsuml",
      key: "3",
    },
  ]);
  const [history, setHistory] = useState([]);
  return (
    <DataContext.Provider value={{ reviews, setReviews, history, setHistory }}>
      {children}
    </DataContext.Provider>
  );
};
// export default DataProvider;
