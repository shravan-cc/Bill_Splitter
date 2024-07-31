/* eslint-disable storybook/story-exports */
import type { Meta, StoryObj } from "@storybook/react";
import { WindowDisplay } from "./WindowDisplay";
import { useState } from "react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "App/WindowDisplay",
  component: WindowDisplay,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof WindowDisplay>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WindowDisplayer: Story = {
  render: () => {
    const [state, setState] = useState(false);
    const Buttons = () => {
      return (
        <button onClick={() => setState(!state)}>
          {state ? "Hide" : "Show"}
        </button>
      );
    };
    return (
      <>
        {state ? <WindowDisplay /> : ""}
        <br />
        <Buttons />
      </>
    );
  },
};
