import React from 'react'
import { Button } from 'primereact/button';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        template: 'Trader | %s',
        default: 'Trader', // a default is required when creating a template
    },
}

const TraderLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            {children}
        </main>
    )
}

export default TraderLayout