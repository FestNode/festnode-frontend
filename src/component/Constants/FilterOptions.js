import React from 'react'
import { CalendarClock, Shapes, CalendarCheck2 } from 'lucide-react';
const iconSize = 20;

const FilterOptions = [
        { id: 1, label: 'All', icon: <Shapes size={iconSize} /> },
        { id: 2, label: 'Scheduled Today', icon: <CalendarClock size={iconSize} /> },
        { id: 3, label: 'Completed', icon: <CalendarCheck2 size={iconSize} /> },
    ];

export default FilterOptions
