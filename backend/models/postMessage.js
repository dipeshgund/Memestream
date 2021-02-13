import mongoose from 'mongoose';
import normalize from 'normalize-mongoose';

const postSchema = mongoose.Schema({
    author: String,
    caption: String,
    url: String,
});

postSchema.plugin(normalize);

const PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage;