import axios from 'axios';

const url = 'http://localhost:27017/memes';

export const fetchPosts = () => axios.get(url);

export const createPost  = (newMeme)=> axios.post(url, newMeme);

