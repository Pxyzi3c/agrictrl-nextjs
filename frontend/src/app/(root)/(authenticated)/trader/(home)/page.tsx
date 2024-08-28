import React from 'react'
import { Metadata } from 'next';
import PrimaryButton from '@/src/components/Button/Primary';

export const metadata: Metadata = {
    title: 'home',
}

function TraderHome() {
    return (
        <section>
            Trader Home
            <PrimaryButton
                label='Primary'
                icon=''
                handleClick={() => {}}
            />
        </section>
    )
}

export default TraderHome