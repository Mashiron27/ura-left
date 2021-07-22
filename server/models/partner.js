import mongoose from 'mongoose';

const partnerSchema = mongoose.Schema({
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

const Partner = mongoose.model('Partner', partnerSchema);
export default Partner;