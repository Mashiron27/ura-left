import Design from '../models/design.js';

export const getDesigns = async(req, res) => {
    try {
        const designs = await Design.find();
        res.status(200).json(designs);
    }
    catch(error) {
        res.status(404).json({ message: error.message });
    }
};

export const createDesign = async(req, res) => {
    const design = req.body;
    const newDesign = new Design(design);
    try {
        await newDesign.save();
        res.status(201).json(newDesign);
    }
    catch(error) {
        res.status(409).json({ message: error.message });
    }
};