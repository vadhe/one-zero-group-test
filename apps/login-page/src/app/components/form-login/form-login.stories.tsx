import { Story, Meta } from '@storybook/react';
import { FormLogin, FormLoginProps } from './form-login';

export default {
  component: FormLogin,
  title: 'FormLogin',
} as Meta;

const Template: Story<FormLoginProps> = (args) => <FormLogin {...args} />;

export const Default = Template.bind({});
Default.args = {};
