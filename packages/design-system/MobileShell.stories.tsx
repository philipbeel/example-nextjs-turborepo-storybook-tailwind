import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MobileShell } from "./MobileShell";

export default {
  title: "Shells/MobileShell",
  component: MobileShell,
} as ComponentMeta<typeof MobileShell>;

const Template: ComponentStory<typeof MobileShell> = () => <MobileShell />;

export const Default = Template.bind({});
