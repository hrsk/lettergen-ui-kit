import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "./textarea";
import { useState } from "react";

type Story = StoryObj<typeof Textarea>;
type MetaType = Meta<typeof Textarea>;

const meta: MetaType = {
  title: "components/Textarea",
  component: Textarea,
  tags: ["autodocs"],

  args: {
    disabled: false,
    showCounter: false,
    fullWidth: false,
    label: "",
    placeholder: "",
    error: "",
    maxLength: undefined,
  },
  argTypes: {
    label: {
      control: "text",
      description: "Label text displayed above the textarea",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text shown when textarea is empty",
    },
    error: {
      control: "text",
      description: "Error state - shows red border and red counter when truthy",
    },
    maxLength: {
      control: "number",
      description: "Maximum character limit",
    },
    showCounter: {
      control: "boolean",
      description: "Shows character count when maxLength is set",
    },
    disabled: {
      control: "boolean",
      description: "Disables the textarea",
    },
    fullWidth: {
      control: "boolean",
      description: "Makes textarea take full width of container",
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    placeholder: "Placeholder...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Description",
    placeholder: "Enter description...",
  },
};

const WithCounterComponent = () => {
  const [value, setValue] = useState("");

  return (
    <Textarea
      label='Comment'
      placeholder='Write your comment...'
      value={value}
      onChange={(event) => {
        return setValue(event.target.value);
      }}
      maxLength={100}
      showCounter
    />
  );
};

export const WithCounter: Story = {
  render: () => {
    return <WithCounterComponent />;
  },
};

export const WithError: Story = {
  args: {
    label: "Label",
    placeholder: "Tell us about yourself...",
    error: "error",
    value: "",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    placeholder: "Cannot edit this",
    disabled: true,
    value: "This textarea is disabled",
  },
};
