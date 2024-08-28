import React from 'react'
import { Button } from 'primereact/button';
import { cn } from '@/lib/utils';

interface PrimaryButtonProps {
    icon: string | JSX.Element,
    label: string,
    className?: string,
    handleClick?: () => void
}

const PrimaryButton = ({ icon, label, handleClick, className }: PrimaryButtonProps) => {
    return (
        <Button 
            className={cn('bg-primary-1 hover:bg-primary-1-hover ring-0', className)}
            label={label}
            icon={icon ? icon : null}
        />
    )
}

export default PrimaryButton