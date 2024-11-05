import type { Meta, StoryObj } from '@storybook/react';

import { FinalForm } from './FinalForm';

const meta: Meta<typeof FinalForm> = {
  title: 'App/FinalForm',
  component: FinalForm,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
  
} 
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {

};