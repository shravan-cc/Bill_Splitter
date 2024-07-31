import type { Meta, StoryObj } from "@storybook/react";
import "../../App.css";
import { NumberInput } from "./NumberInput";

const meta: Meta<typeof NumberInput> = {
  title: "App/NumberInput",
  component: NumberInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Dollar: Story = {
  args: {
    label: "Bill",
    typeOfIcon: "dollar",
  },
};

export const Person: Story = {
  args: {
    label: "Number of People",
    typeOfIcon: "person",
    placeholder: "Enter the number",
  },
};
