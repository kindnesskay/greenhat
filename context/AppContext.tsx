"use client";
import DatabaseManager from "@/lib/tools/localStorage";
import React, { createContext, useContext, useEffect } from "react";
export type databaseType = DatabaseManager;
const initial_state = {
  database: new DatabaseManager(),
};
const AppContext = createContext(initial_state);

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const databaseName = "Trader_traker_v1";
  const database = new DatabaseManager(databaseName);
  useEffect(() => {
    database.update();
  }, []);

  return (
    <AppContext.Provider value={{ database }}>{children}</AppContext.Provider>
  );
};

export const UseApp = () => useContext(AppContext);

export default AppContextProvider;
