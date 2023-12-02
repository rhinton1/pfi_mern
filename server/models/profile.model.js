import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    type: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Profile = mongoose.model('Profile', profileSchema);

export default Profile;