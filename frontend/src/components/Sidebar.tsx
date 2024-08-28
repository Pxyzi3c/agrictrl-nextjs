'use client'

import React from 'react'

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { Button } from 'primereact/button';

const Sidebar = ({ userType }: { userType: 'farmer' | 'trader' | 'admin' }) => {
    const pathname = usePathname();
    const { traderSidebarLinks, farmerSidebarLinks } = sidebarLinks();

    const getSidebarLinks = () => {
        switch (userType) {
            case 'farmer':
                return farmerSidebarLinks;
            case 'trader':
                return traderSidebarLinks;
            default:
                return [];
        }
    }

    return (
        <section className="sticky left-0 top-0 flex h-screen w-fit flex-col  justify-between  bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[320px]">
            <div className='flex flex- flex-col gap-6'>
                {getSidebarLinks.map((link) => {
                    const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`);

                    return (
                        <Link 
                            href={link.route}
                            key={link.label}
                        >
                            <Button 
                                className='w-full flex gap-4 py-3 px-4 items-center text-start text-lg ring-0'
                                text={!isActive}
                            >
                                {link.icon}
                                <p className='text-lg font-semibold max-lg:hidden'>{link.label}</p>
                            </Button>
                        </Link>
                    );
                })}
            </div>
        </section>
    )
}

export default Sidebar