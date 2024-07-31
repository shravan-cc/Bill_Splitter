import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Formdisplay } from './Formdisplay';

const meta: Meta<typeof Formdisplay> = {
  title: 'App/Formdisplay',
  component: Formdisplay,
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