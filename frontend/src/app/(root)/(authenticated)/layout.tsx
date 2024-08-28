'use client'

import React from 'react'

import Navbar from '@/src/components/Navbar';
import Sidebar from '@/src/components/Sidebar';

const AuthenticatedLayout = ({ children }: { children: React.ReactNode}) => {
    // TODO: modify this and should be reflected based on the actual user type of the authenticated user
    const userType = 'trader';

    return (
        <main className='relative bg-white-2'>
            <Navbar />

            <div className='flex'>
                <Sidebar userType={userType}/>

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