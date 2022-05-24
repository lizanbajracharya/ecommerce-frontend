import React from "react";
import { mount } from "@cypress/react";
import Login from "./auth/Login";

it("renders learn react link", () => {
  mount(<Login />);
  cy.get("a").contains("Learn React");
});
