'use client'

import React from 'react'

import Navbar from '@/src/components/Navbar';
import Sidebar from '@/src/components/Sidebar';

const AuthenticatedLayout = ({ children }: { children: React.ReactNode}) => {
    return (
        <main className='relative'>
            <Navbar />

            <div className='flex'>
                <Sidebar />

                <section className='flex min-h-screen flex-col px-6 pb-6 pt-28 md:pb-14 sm:px-14 w-full'>
                    <div>
                        {children}
                    </div>
                </section>
            </div>
        </main>
    )
}

export default AuthenticatedLayout