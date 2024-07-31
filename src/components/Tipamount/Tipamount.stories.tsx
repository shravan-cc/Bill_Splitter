import type { Meta, StoryObj } from "@storybook/react";
import { Tipamount } from "./Tipamount";

const meta: Meta<typeof Tipamount> = {
  title: "App/Tipamount",
  component: Tipamount,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Tip Amount",
    value: "0.00",
  },
};
