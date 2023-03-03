import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import Navbar from "../components/Navbar";
describe("Home Link render Test", () => {
  it("should be rendered in the DOM", () => {
    render(<Navbar />, { wrapper: BrowserRouter });

    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});

describe("Search Input render Test", () => {
  it("should be rendered in the DOM", () => {
    render(<Navbar />, { wrapper: BrowserRouter });

    expect(screen.getByTestId("searchInputTest")).toBeInTheDocument();
  });
});
