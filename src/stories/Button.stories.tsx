import React from "react";
import { Story } from "@storybook/react";

import Button, { ButtonProps } from "../components/Button";
import TimeIcon from "../components/Icons/TimeIcon";

export default {
    title: "Button",
    argTypes: { onClick: { action: "clicked" } },
};

const TheButton: Story<ButtonProps> = (args) => (
    <Button {...args}>{args.children}</Button>
);

export const Primary = TheButton.bind({});
Primary.args = {
    color: "primary",
    children: "Satz hinzufügen",
};

export const Secondary = TheButton.bind({});
Secondary.args = {
    color: "secondary",
    children: "Satz hinzufügen",
};

export const Danger = TheButton.bind({});
Danger.args = {
    color: "dangerPrimary",
    children: "Satz Löschen",
};

export const Loading = TheButton.bind({});
Loading.args = {
    color: "primary",
    loading: true,
    children: "Satz hinzufügen",
};

export const WithIcon = TheButton.bind({});
WithIcon.args = {
    color: "primary",
    icon: <TimeIcon />,
    children: "Satz hinzufügen",
};
