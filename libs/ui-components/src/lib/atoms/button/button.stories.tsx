import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from './button';
import { IoMdOpen } from 'react-icons/io';

export default {
  component: Button,
  title: 'Button',
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'button',
  icon: <IoMdOpen />,
};
export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'button',
};
Secondary.args = {
  variant: 'secondary',
  children: 'button',
};
