
import React from 'react';
import { Button } from 'primereact/button';
import { cn } from '@/lib/utils';

interface BaseButtonProps {
    icon: string | JSX.Element;
    label: string;
    outlined?: boolean;
    className?: string;
    handleClick?: () => void;
}

const BaseButton = ({ icon, label, outlined,className, handleClick }: BaseButtonProps) => {
    return (
        <Button
            className={cn(
                'flex gap-8 py-4 px-8 items-center text-start ring-0 border-0',
                className
            )}
            outlined={outlined}
            label={label}
            icon={icon ? icon : null}
            onClick={handleClick}
        />
    );
};

export default BaseButton;