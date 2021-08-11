import React from "react";
import { Story } from "@storybook/react";

import Avatar, { AvatarProps } from "../components/Avatar";

export default {
    title: "Avatar",
    argTypes: { onClick: { action: "clicked" } },
};

const TheAvatar: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Small = TheAvatar.bind({});
Small.args = {
    initials: "mx",
};

export const Medium = TheAvatar.bind({});
Medium.args = {
    initials: "mx",
    size: "medium",
};

export const Large = TheAvatar.bind({});
Large.args = {
    initials: "mx",
    size: "large",
};
