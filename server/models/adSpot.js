import mongoose from 'mongoose';

const adSpotSchema = mongoose.Schema({
    title: String,
    location: String,
    dailyViews: Number,
    timeSpent: String,
    lighting: {
        type: Boolean,
        default: false
    },
    audience: String,
    locationDescription: String,
    dimensions: String,
    details: String,
    price: [String],
    images: [String],
    addedAt: {
        type: Date,
        default: new Date()
    },
    isBooked: {
        type: Boolean,
        default: false
    }
});

const AdSpot = mongoose.model('AdSpots', adSpotSchema);
export default AdSpot;