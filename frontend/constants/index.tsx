import React, { useEffect, useState } from 'react';

import { 
    House,
    CalendarArrowUp,
    CalendarArrowDown,
    Video,
    Plus
} from 'lucide-react';

export const sidebarLinks = () => {
    const traderSidebarLinks = [
        {
            label: 'Home',
            route: '/trader',
            icon: <House />,
        },
        {
            label: 'Dashboard',
            route: '/trader/dashboard',
            icon: <CalendarArrowUp />,
        },
        {
            label: 'Tracking',
            route: '/trader/tracking',
            icon: <CalendarArrowDown />,
        },
        {
            label: 'Inventory',
            route: '/trader/inventory',
            icon: <Video />,
        },
        {
            label: 'Facilities',
            route: '/trader/facilities',
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
        traderSidebarLinks
    }
}