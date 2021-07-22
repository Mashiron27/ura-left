import Campaign from '../models/campaign.js';

export const getCampaigns = async(req, res) => {
    try {
        const campaigns = await Campaign.find();
        res.status(200).json(campaigns);
    }
    catch(error) {
        res.status(404).json({ message: error.message });
    }
};

export const createCampaign = async(req, res) => {
    const campaign = req.body;
    const newCampaign = new Campaign(campaign);
    try {
        await newCampaign.save();
        res.status(201).json(newCampaign);
    }
    catch(error) {
        res.status(409).json({ message: error.message });
    }
};