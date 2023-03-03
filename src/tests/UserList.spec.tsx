import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import UserList from "../components/userList";
import { octokit } from "../services/token";

describe("H2 renders Test", () => {
  it("should be rendered in the DOM", () => {
    render(<UserList />, { wrapper: MemoryRouter });
    waitFor(() => {
      expect(screen.findByText("Users")).toBeInTheDocument();
    });
  });
});
