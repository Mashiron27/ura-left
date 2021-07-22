import Partner from '../models/partner.js';

export const getPartners = async(req, res) => {
    try {
        const partners = await Partner.find();
        res.status(200).json(partners);
    }
    catch(error) {
        res.status(404).json({ message: error.message });
    }
};