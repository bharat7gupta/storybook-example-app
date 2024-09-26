import { useState, MouseEvent } from 'react';
import Button, { ButtonProps } from '@mui/material/Button';

export default function CustomButton(props: ButtonProps) {
    const [ toggle, setToggle ] = useState(false);

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        setToggle(toggle => !toggle);
        props?.onClick?.(e);
    };

    return (
        <div>
            <Button onClick={handleClick}>Primary Button</Button>

            {toggle && (
                <div>I am visible!!</div>
            )}
        </div>
    )
}
