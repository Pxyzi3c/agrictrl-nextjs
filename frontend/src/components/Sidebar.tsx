'use client'

import React from 'react'

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { Button } from 'primereact/button';
import { 
    PrimaryButton, 
    TertiaryButton 
} from './Button/Variant'
import { LogOut } from 'lucide-react';

const Sidebar = ({ userType }: { userType: 'farmer' | 'trader' | 'admin' }) => {
    const pathname = usePathname();
    const { adminSidebarLinks, farmerSidebarLinks } = sidebarLinks();

    const getSidebarLinks = () => {
        switch (userType) {
            case 'farmer':
                return farmerSidebarLinks;
            case 'admin':
                return adminSidebarLinks;
            default:
                return [];
        }
    }

    return (
        <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-8 pt-28 pb-8 text-white max-sm:hidden lg:w-[350px]">
            <div className='flex flex- flex-col gap-6'>
                {getSidebarLinks().map((link) => {
                    const isActive = pathname === link.route;

                    return (
                        <Link 
                            href={link.route}
                            key={link.label}
                        >
                            {isActive ? (
                                <TertiaryButton
                                    icon={link.icon}
                                    label={link.label}
                                    handleClick={() => {}}
                                    className="w-full"
                                />
                            ) : (
                                <PrimaryButton
                                    outlined={true}
                                    className='w-full'
                                    label={link.label}
                                    icon={link.icon}
                                    handleClick={() => {}}
                                />
                            )}

                        </Link>
                    );
                })}
            </div>
            <PrimaryButton
                outlined={true}
                className='w-full'
                label="Logout"
                icon={<LogOut />}
                handleClick={() => {}}
            />
        </section>
    )
}

export default Sidebar