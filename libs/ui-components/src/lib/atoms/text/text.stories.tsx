import { Story, Meta } from '@storybook/react';
import { Text, TextProps } from './text';

export default {
  component: Text,
  title: 'Text',
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: '#ffff',
  children: 'this is paragraph',
};
