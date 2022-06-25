import mongoose from "mongoose";

// Declare the Schema of the Mongo model
var UserSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true,
        },
        firstname:{
            type:String,
            required:true,
        },
        lastname:{
            type:String,
            required:true,
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        profilePicture: String,
        coverPicture: String,
        about: String,
        livesIn: String,
        worksAt: String,
        relationship: String,
        country: String,
        followers: [],
        following: []
    },
    {timestamps: true}
);

//Export the model
const UserModel = mongoose.model('Users', UserSchema) 
export default UserModel;