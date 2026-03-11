import { Meta, StoryObj } from "@storybook/react-vite";
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
  render: (arguments_) => (
    <div style={{ height: "300px" }}>
      <Separator {...arguments_} />
    </div>
  ),
};

export const HorizontalSeparator: Story = {
  args: {
    orientation: "horizontal",
  },
  render: (arguments_) => (
    <div style={{ width: "300px" }}>
      <Separator {...arguments_} />
    </div>
  ),
};
