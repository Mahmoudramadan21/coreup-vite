import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import Button from "./Button";

// Mock useNavigate
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

// Test rendering with children
test("renders button with children", () => {
  render(
    <Router>
      <Button>Click Me</Button>
    </Router>
  );
  const buttonElement = screen.getByText(/Click Me/i);
  expect(buttonElement).toBeInTheDocument();
});

// Test applying custom className
test("applies custom className", () => {
  render(
    <Router>
      <Button className="custom-class">Click Me</Button>
    </Router>
  );
  const buttonElement = screen.getByText(/Click Me/i);
  expect(buttonElement).toHaveClass("btn custom-class");
});

// Test onClick handler
test("calls onClick when clicked", () => {
  const handleClick = jest.fn();
  render(
    <Router>
      <Button onClick={handleClick}>Click Me</Button>
    </Router>
  );
  const buttonElement = screen.getByText(/Click Me/i);
  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

// Test navigation with "to" prop
test('navigates to "to" path when clicked', () => {
  const navigateMock = jest.fn();
  jest
    .spyOn(require("react-router-dom"), "useNavigate")
    .mockImplementation(() => navigateMock);

  render(
    <Router>
      <Button to="/some-path">Click Me</Button>
    </Router>
  );
  const buttonElement = screen.getByText(/Click Me/i);
  fireEvent.click(buttonElement);
  expect(navigateMock).toHaveBeenCalledWith("/some-path");
});
