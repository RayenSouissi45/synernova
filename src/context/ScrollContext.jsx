import { createContext, useRef } from "react";

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const formRef = useRef(null);

  return (
    <ScrollContext.Provider value={{ formRef }}>
      {children}
    </ScrollContext.Provider>
  );
};
