import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect, fn } from '@storybook/test';
import CustomButton from './CustomButton';

const meta = {
    title: 'Example/CustomButton',
    component: CustomButton,

    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    args: { onClick: fn() },
} satisfies Meta<typeof CustomButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const submitButton = canvas.getByRole('button');
        
        await userEvent.click(submitButton);
        await expect(canvas.getByText('I am visible!!')).toBeInTheDocument();
        await userEvent.click(submitButton);
        await expect(canvas.queryByText('I am visible!!')).not.toBeInTheDocument();
    }
};
