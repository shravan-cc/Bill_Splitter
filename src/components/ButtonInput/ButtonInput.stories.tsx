import type { Meta, StoryObj } from "@storybook/react";
import { ButtonInput } from "./ButtonInput";

const meta: Meta<typeof ButtonInput> = {
  title: "App/ButtonInput",
  component: ButtonInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const NormalButton: Story = {
  args: {
    value: "55%",
    type: "normal",
  },
};

export const CustomButton: Story = {
  args: {
    value: "Custom",
    type: "custom",
  },
};
