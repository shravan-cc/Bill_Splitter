/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from "@storybook/react";
import "../../App.css";
import { NumberInput } from "./NumberInput";
import React, { useEffect, useState } from "react";

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
  },
};

export const DollarComponent: Story = {
  render: () => {
    const [value, setValue] = useState<{ bill: string; person: string }>({
      bill: "",
      person: "",
    });
    const [errorObj, setError] = useState<{
      bill: { error: string; hasError: boolean };
      person: { error: string; hasError: boolean };
    }>({
      bill: { error: "", hasError: false },
      person: { error: "", hasError: false },
    });
    const [changed, makeChange] = useState<boolean>(false);

    useEffect(() => {
      const validateInput = (field: "bill" | "person", value: string) => {
        let hasError = false;
        let errorMessage = "";
        if (changed) {
          if (field === "person") {
            if (!Number.isInteger(value)) {
              errorMessage = "Please enter valid number of people";
              hasError = true;
            }
          }
          if (value === "") {
            errorMessage = "Value cannot be empty";
            hasError = true;
          } else if (isNaN(Number(value))) {
            errorMessage = "Please enter a number";
            hasError = true;
          } else if (Number(value) <= 0) {
            errorMessage = "Value must be greater than zero";
            hasError = true;
          }
        }
        setError((prev) => ({
          ...prev,
          [field]: { error: errorMessage, hasError },
        }));
      };

      validateInput("bill", value.bill);
      validateInput("person", value.person);
    });

    const handleInputChange = (
      e: React.ChangeEvent<HTMLInputElement>,
      field: "bill" | "person"
    ) => {
      const newValue = e.target.value;
      setValue((prev) => ({
        ...prev,
        [field]: newValue,
      }));
      makeChange(true);
    };
    /*const [value, setValue] = useState<string>("");
    const [errorObj, setError] = useState<{ error: string; hasError: boolean }>(
      { error: "", hasError: false }
    );
    const [changed, makeChange] = useState<boolean>(false);

    useEffect(() => {
      let hasError = false;
      let errorMessage = "";
      if (changed) {
        if (value === "") {
          errorMessage = "Value cannot be empty";
          hasError = true;
        } else if (isNaN(Number(value))) {
          errorMessage = "Please enter a number";
          hasError = true;
        } else if (Number(value) <= 0) {
          errorMessage = "Value must be greater than zero";
          hasError = true;
        }
      }

      setError({ error: errorMessage, hasError });
    }, [value]); // Only run when `value` changes

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      makeChange(true);
    };*/

    return (
      <NumberInput
        value={value.bill}
        label="Bill"
        typeOfIcon="person"
        onChange={(e) => handleInputChange(e, "bill")}
        error={errorObj.bill}
      />
    );
  },
};
