import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import MarketingApp from "./components/MarketingApp";
import { createGenerateClassName } from "@material-ui/core/styles";
import { StylesProvider } from "@material-ui/core/styles";

export default () => {
    const generateClassName = createGenerateClassName({
      productionPrefix: "co",
    });
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <div>
                <Header />
                <MarketingApp />
                </div>
            </BrowserRouter>
        </StylesProvider>
    );
} 