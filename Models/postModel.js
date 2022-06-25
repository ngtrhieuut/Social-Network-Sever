import mongoose from "mongoose";

// Declare the Schema of the Mongo model
var postSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    desc: String,
    likes: [],
    image: String,
},
{
    timestamps: true
}
);

//Export the model
var PostModel = mongoose.model("Posts", postSchema);
export default PostModel;