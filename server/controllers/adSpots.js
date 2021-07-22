import AdSpot from '../models/adSpot.js';

export const getAdSpots = async(req, res) => {
    try {
        const adSpots = await AdSpot.find();
        res.status(200).json(adSpots);
    }
    catch(error) {
        res.status(404).json({ message: error.message });
    }
};

export const createAdSpot = async(req, res) => {
    const adSpot = req.body;
    const newAdSpot = new AdSpot(adSpot);
    try {
        await newAdSpot.save();
        res.status(201).json(newAdSpot);
    }
    catch(error) {
        res.status(409).json({ message: error.message });
    }
};