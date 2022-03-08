import { Story, Meta } from '@storybook/react';
import { LoginPage, LoginPageProps } from './login-page';

export default {
  component: LoginPage,
  title: 'LoginPage',
} as Meta;

const Template: Story<LoginPageProps> = (args) => <LoginPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
