/* eslint-disable storybook/story-exports */
import type { Meta, StoryObj } from "@storybook/react";
import { swapPerson } from "./swappy-person";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "App/SwappyPerson",
  component: swapPerson,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof swapPerson>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Persons: Story = {
  args: {
    id: 1,
  },
};
