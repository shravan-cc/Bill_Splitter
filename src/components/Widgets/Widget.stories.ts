import type { Meta, StoryObj } from "@storybook/react";
import { Widget } from "./Widget";
import {
  faInfoCircle,
  faTrash,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "App/Widget",
  component: Widget,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Widget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    color: "green",
    icon: faInfoCircle,
    heading: "",
    desc: "This widget may involve risks if not used properly. Ensure you follow all safety guidelines provided in the documentation. Avoid exposing the widget to extreme conditions like high temperatures or moisture. If you notice any malfunction or damage, discontinue use immediately and seek support. For any technical issues or questions, please contact our support team. Ignoring these precautions can lead to potential hazards, including damage or injury. Always operate this widget according to the instructions and keep it out of reach of children. Your safety and the effective functioning of the widget are our top priorities!",
  },
};

export const Warning: Story = {
  args: {
    color: "gold",
    icon: faExclamationTriangle,
    heading: "Warning",
    desc: "This widget may involve risks if not used properly. Ensure you follow all safety guidelines provided in the documentation. Avoid exposing the widget to extreme conditions like high temperatures or moisture. If you notice any malfunction or damage, discontinue use immediately and seek support. For any technical issues or questions, please contact our support team. Ignoring these precautions can lead to potential hazards, including damage or injury. Always operate this widget according to the instructions and keep it out of reach of children. Your safety and the effective functioning of the widget are our top priorities!",
  },
};

export const Danger: Story = {
  args: {
    color: "red",
    icon: faTrash,
    heading: "Danger",
    desc: "This widget may involve risks if not used properly. Ensure you follow all safety guidelines provided in the documentation. Avoid exposing the widget to extreme conditions like high temperatures or moisture. If you notice any malfunction or damage, discontinue use immediately and seek support. For any technical issues or questions, please contact our support team. Ignoring these precautions can lead to potential hazards, including damage or injury. Always operate this widget according to the instructions and keep it out of reach of children. Your safety and the effective functioning of the widget are our top priorities!",
  },
};
