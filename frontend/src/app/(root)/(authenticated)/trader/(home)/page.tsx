import React from 'react'
import { Button } from 'primereact/button';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'home',
}

function TraderHome() {
    return (
        <section>
            Trader Home
            <Button className='bg-green-1' label="Check"/>
        </section>
    )
}

export default TraderHome