import React from 'react'
import { Metadata } from 'next';
import PrimaryButton from '@/src/components/Button/Primary';

export const metadata: Metadata = {
    title: 'home',
}

function AdminHome() {
    return (
        <section>
            Admin Home
            <PrimaryButton
                label='Primary'
                icon=''
                handleClick={() => {}}
            />
        </section>
    )
}

export default AdminHome