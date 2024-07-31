import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { BillTip } from "./BillTip";

const meta: Meta<typeof BillTip> = {
  title: "App/BillTip",
  component: BillTip,
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
    label: "Select Bill %",
    values: ["5%", "10%", "15%", "25%", "50%", "Custom"],
  },
};
