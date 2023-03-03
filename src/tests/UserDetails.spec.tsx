import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserDetails from "../pages/userDetails";
describe("Empty img render Test", () => {
  it("should be a empty element in the DOM", () => {
    render(<UserDetails />);

    expect(screen.getByRole("img")).toBeEmptyDOMElement();
  });
});
