import { Story, Meta } from '@storybook/react';
import { Intro, IntroProps } from './intro';

export default {
  component: Intro,
  title: 'Intro',
} as Meta;

const Template: Story<IntroProps> = (args) => <Intro {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
