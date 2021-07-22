import React from 'react';
import { useSelector } from 'react-redux';
import AdSpot from './AdSpot/AdSpot.js';
import useStyles from './AdSpotsStyles.js';

const AdSpots = () => {
    const adSpots = useSelector((state) => state.adSpots);
    const classes = useStyles();
    
    console.log(adSpots);
    
    return (
        <>
            <h1>AdSpots</h1>
            <AdSpot />
            <AdSpot />
        </>
    );
};

export default AdSpots;