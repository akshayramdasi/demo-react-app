import { render, screen } from "@testing-library/react";
import Post from "./Post";

test("renders learn react link", () => {
  render(<Post />);
  const postContainer = screen.getAllByTestId("posts")
  expect(postContainer).toBeVisible();
});
