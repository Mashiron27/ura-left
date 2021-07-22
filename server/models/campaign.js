import mongoose from 'mongoose';

const campaignSchema = mongoose.Schema({
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

const Campaign = mongoose.model('Campaigns', campaignSchema);
export default Campaign;