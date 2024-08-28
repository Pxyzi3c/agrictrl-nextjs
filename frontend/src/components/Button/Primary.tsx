import React from 'react'
import { Button } from 'primereact/button';

interface PrimaryButtonProps {
    icon: string,
    label: string,
    handleClick: () => void
}

const PrimaryButton = ({ icon, label, handleClick }: PrimaryButtonProps) => {
    return (
        <Button 
            className='bg-primary-1 hover:bg-primary-1-hover ring-0' 
            label={label}
            icon={icon ? icon : null}
        />
    )
}

export default PrimaryButton