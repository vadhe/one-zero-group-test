import { Story, Meta } from '@storybook/react';
import { Heading, HeadingProps } from './heading';

export default {
  component: Heading,
  title: 'Heading',
} as Meta;

const Template: Story<HeadingProps> = (args) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
  fontSize: '16px',
  fontWeight: 600,
  color: '#eaeaea',
  children: 'Heading',
};
