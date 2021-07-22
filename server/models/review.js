import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
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

const Review = mongoose.model('Reviews', reviewSchema);
export default Review;