import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    author: String,
    caption: String,
    url: String
});

const PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage;