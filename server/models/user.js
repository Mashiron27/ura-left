import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    fullName: String,
    companyName: String,
    email: String,
    phone: Number,
    password: String,
    addedAt: {
        type: Date,
        default: new Date()
    }
});

const User = mongoose.model('Users', userSchema);
export default User;