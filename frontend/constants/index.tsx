import React, { useEffect, useState } from 'react';

import { 
    House,
    CalendarArrowUp,
    CalendarArrowDown,
    Video,
    Plus
} from 'lucide-react';

export const sidebarLinks = () => {
    const adminSidebarLinks = [
        {
            label: 'Home',
            route: '/admin',
            icon: <House />,
        },
        {
            label: 'Dashboard',
            route: '/admin/dashboard',
            icon: <CalendarArrowUp />,
        },
        {
            label: 'Tracking',
            route: '/admin/tracking',
            icon: <CalendarArrowDown />,
        },
        {
            label: 'Inventory',
            route: '/admin/inventory',
            icon: <Video />,
        },
        {
            label: 'Facilities',
            route: '/admin/facilities',
            icon: <Plus />,
        },
    ]
    
    const farmerSidebarLinks = [
        {
            label: 'Home',
            route: '/farmer',
            icon: <House />,
        },
        {
            label: 'Dashboard',
            route: '/farmer/dashboard',
            icon: <CalendarArrowUp />,
        },
        {
            label: 'Inventory',
            route: '/farmer/inventory',
            icon: <Video />,
        },
        {
            label: 'Sales',
            route: '/sales/facilities',
            icon: <Plus />,
        },
    ]
    
    return {
        farmerSidebarLinks,
        adminSidebarLinks
    }
}