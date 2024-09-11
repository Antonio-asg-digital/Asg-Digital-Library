import { Meta, StoryFn } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'clicked' }
  }
} as Meta;

// Template for creating stories
const Template: StoryFn<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
});

// Create multiple variations of the story

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  onClick: () => console.log('Primary button clicked')
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  onClick: () => console.log('Secondary button clicked')
};


