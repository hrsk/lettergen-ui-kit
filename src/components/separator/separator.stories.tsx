import type { Meta, StoryObj } from "@storybook/react-vite";
import { Separator } from "./separator";

const meta = {
  title: "components/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VerticalSeparator: Story = {
  args: {
    orientation: "vertical",
  },
  render: () => (
    <div style={{ width: "300px" }}>
      <Separator />
    </div>
  ),
};

export const HorizontalSeparator: Story = {
  args: {
    orientation: "horizontal",
  },
  render: () => (
    <div style={{ width: "300px" }}>
      <Separator />
    </div>
  ),
};
