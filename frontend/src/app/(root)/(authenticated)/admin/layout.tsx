import React from 'react'
import { Button } from 'primereact/button';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        template: 'Admin | %s',
        default: 'Admin', // a default is required when creating a template
    },
}

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            {children}
        </main>
    )
}

export default AdminLayout