import { StoryFn, Meta } from '@storybook/react';
import Checkbox from './Checkbox';
import { useEffect, useState } from 'react';

export default {
  title: 'UI Components/Checkbox',
  component: Checkbox,
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = (args) => {
    const [ checked, setChecked ] = useState(args.checked);

    useEffect(() => {
        setChecked(args.checked);
    }, [args.checked])

    const handleChange = () => {
        setChecked(checked => !checked);
    };

    return <Checkbox {...args} checked={checked} onChange={handleChange} />
};

export const Default = Template.bind({});
Default.args = {
  label: 'I agree to the terms and conditions',
  checked: false,
  onChange: () => {},
};

export const Checked = Template.bind({});
Checked.args = {
  label: 'I agree to the terms and conditions',
  checked: true,
  onChange: () => {},
};