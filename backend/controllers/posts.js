import PostMessage from '../models/postMessage.js';
export const getPosts = async (req, res)=>{
    try{
       const getMemes = await  PostMessage.find().sort({$natural:-1}); 
       console.log(getMemes);
       res.status(200).json(getMemes);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
}

export const createPost =async (req, res) =>{
    const meme = req.body;
    const newMeme = new PostMessage(meme);
    try{
        await newMeme.save();
        res.status(201).json(newMeme)

    }
    catch(error){
        res.status(409).json({message: error.message});
    }
}