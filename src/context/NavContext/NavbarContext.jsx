"use client"

import { createContext } from "react";

export const NavbarContext = createContext();

export const NavbarContextProvider = ({ children }) => {
    const value = {
        "color": "blue"
    }
    return (
        <NavbarContext.Provider value={value}>
            {children}
        </NavbarContext.Provider>
    );
};

