// @ts-nocheck

import React from 'react';
import BaseButton from './Base';
import { cn } from '@/lib/utils';

const PrimaryButton = ({ ...props }) => {
    return (
        <BaseButton
        {...props}
        className={cn(props.className, !props.outlined ? 'bg-primary-1 hover:bg-primary-1-hover' : 'text-primary-1')}
        />
    );
};

const TertiaryButton = ({ ...props }) => {
    return (
        <BaseButton
        {...props}
        className={cn(props.className, 'bg-gradient-to-r from-primary-2 to-primary-1')}
        />
    );
};

export { 
    PrimaryButton,
    TertiaryButton 
};