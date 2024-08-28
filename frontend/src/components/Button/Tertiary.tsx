import React from 'react'
import { Button } from 'primereact/button';
import { cn } from '@/lib/utils';

interface TertiaryButton {
    icon: string | JSX.Element,
    label: string,
    className?: string,
    handleClick?: () => void
}

const TertiaryButton = ({ icon, label, handleClick, className }: TertiaryButton) => {
    return (
        <Button 
            className={cn('flex gap-8 py-4 px-8 items-center text-start bg-gradient-to-r from-primary-2 to-primary-1 ring-0 border-0', className)}
            label={label}
            icon={icon ? icon : null}
        />
    )
}

export default TertiaryButton