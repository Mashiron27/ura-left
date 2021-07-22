import mongoose from 'mongoose';

const designSchema = mongoose.Schema({
    title: String,
    dailyViews: Number,
    lighting: {
        type: Boolean,
        default: false
    },
    addedAt: {
        type: Date,
        default: new Date()
    }
});

const Design = mongoose.model('Designs', designSchema);
export default Design;