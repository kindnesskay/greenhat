"use client";
import DatabaseManager from "@/lib/tools/localStorage";
import React, { createContext, useContext, useEffect, useState } from "react";
export type databaseType = DatabaseManager;

interface AppContext {
  database: databaseType;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
const AppContext = createContext({} as AppContext);

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const databaseName = "Trader_traker_v1";
  const database = new DatabaseManager(databaseName);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    database.update();
  }, []);

  return (
    <AppContext.Provider value={{ database, isLoading, setIsLoading }}>
      {children}
    </AppContext.Provider>
  );
};

export const UseApp = () => useContext(AppContext);

export default AppContextProvider;
