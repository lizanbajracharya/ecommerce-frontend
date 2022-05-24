import React from "react";
import { mount } from "@cypress/react";
import Login from "../../src/auth/Login";
import { ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { theme } from "../../src/theme";
import login from "../fixtures/login.json";

const queryClient = new QueryClient();

it("renders learn react link", () => {
  mount(
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Login />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </ThemeProvider>
  );
  cy.contains("Sign In");
  cy.get("#email").type(login.email);
  cy.get("#password").type(login.password);
  cy.get("#loginButton").click();
  cy.contains("Admin Panel");
});
