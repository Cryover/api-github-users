import UserSearch from "../components/userSearch";
import { render, screen, waitFor } from "@testing-library/react";
import "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import UserList from "../components/userList";
import { BrowserRouter } from "react-router-dom";
import { octokit } from "../services/token";

jest.mock("octokit");

describe("Buttom Search render Test", () => {
  it("should be rendered in the DOM", () => {
    render(<UserSearch />);

    expect(screen.getByText("Search")).toBeInTheDocument();
  });
});

describe("Search Failed Test", () => {
  it("should be rendered in the DOM", async () => {
    //const spyOctokit = jest.spyOn(octokit, "request");
    const user = userEvent.setup();

    const testScreen = render(
      <>
        <UserSearch />
        <UserList />
      </>,
      { wrapper: BrowserRouter }
    );

    await user.type(testScreen.getByTestId("searchInputTest"), "Carro");
    await user.click(testScreen.getByRole("button", { name: /Search/i }));

    await waitFor(() => {
      expect(testScreen.getByTestId("undefined")).toBeInTheDocument();
    });
  });
});

describe("Search Sucess Test", () => {
  it("should be rendered in the DOM", () => {
    const testScreen = render(
      <>
        <UserSearch />
        <UserList />
      </>,
      { wrapper: BrowserRouter }
    );

    userEvent.type(testScreen.getByTestId("searchInputTest"), "Cryover");
    userEvent.click(testScreen.getByTestId("searchButton"));

    expect(testScreen.findByText("Cryover")).toBeInTheDocument();
  });
});
