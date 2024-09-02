import React from 'react'
import { Metadata } from 'next';
import { PrimaryButton } from '@/src/components/Button/Variant';

export const metadata: Metadata = {
    title: 'Home',
}

function AdminHome() {
    return (
        <section>
            Admin Home
            <PrimaryButton
                label='Primary'
                icon=''
            />
        </section>
    )
}

export default AdminHome