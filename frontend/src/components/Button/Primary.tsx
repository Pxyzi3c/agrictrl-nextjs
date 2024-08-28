import React from 'react'
import { Button } from 'primereact/button';
import { cn } from '@/lib/utils';

interface PrimaryButtonProps {
    icon: string | JSX.Element,
    label: string,
    outlined?: boolean,
    className?: string,
    handleClick?: () => void
}

const PrimaryButton = ({ icon, label, outlined, handleClick, className }: PrimaryButtonProps) => {
    return (
        <Button 
            className={cn('flex gap-8 py-4 px-8 items-center text-start ring-0 border-0', className, !outlined ? 'bg-primary-1 hover:bg-primary-1-hover' : 'text-primary-1')}
            label={label}
            icon={icon ? icon : null}
            outlined={outlined}
        />
    )
}

export default PrimaryButton