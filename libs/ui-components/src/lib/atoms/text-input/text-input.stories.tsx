import { Story, Meta } from '@storybook/react';
import { TextInput, TextInputProps } from './text-input';

export default {
  component: TextInput,
  title: 'TextInput',
} as Meta;

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;

export const Text = Template.bind({});
Text.args = {
  label: 'text',
  id: 'text',
  type: 'text',
};

export const Password = Template.bind({});
Password.args = {
  label: 'password',
  id: 'password',
  type: 'password',
};
