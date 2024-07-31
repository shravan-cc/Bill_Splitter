import type { Meta, StoryObj } from "@storybook/react";
import { CounterComponent } from "./CounterComponent";
import { useState, useEffect } from "react";

const meta = {
  title: "App/CounterComponent",
  component: CounterComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CounterComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    count: 0,
    increment: () => {},
    decrement: () => {},
    handleInputChange: () => {},
  },
  render: (args) => {
    const [count, setCount] = useState(args.count);

    useEffect(() => {
      setCount(args.count);
    }, [args.count]);

    const increment = () => setCount((prevCount) => prevCount + 1);
    const decrement = () => setCount((prevCount) => prevCount - 1);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setCount(value === "" ? 0 : Number(value));
    };

    return (
      <CounterComponent
        count={count}
        increment={increment}
        decrement={decrement}
        handleInputChange={handleInputChange}
      />
    );
  },
};

export const WithInitialCount: Story = {
  args: {
    count: 10,
    increment: () => {},
    decrement: () => {},
    handleInputChange: () => {},
  },
  render: (args) => {
    const [count, setCount] = useState(args.count);

    useEffect(() => {
      setCount(args.count);
    }, [args.count]);

    const increment = () => setCount((prevCount) => prevCount + 1);
    const decrement = () => setCount((prevCount) => prevCount - 1);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setCount(value === "" ? 0 : Number(value));
    };

    return (
      <CounterComponent
        count={count}
        increment={increment}
        decrement={decrement}
        handleInputChange={handleInputChange}
      />
    );
  },
};
