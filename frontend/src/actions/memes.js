import * as api from '../api/index';

export const getMemes = ()=>async(dispatch)=>{
    try{
        const {data} = await api.fetchPosts();
        dispatch({type : 'FETCH_ALL', payload: data});
    }
    catch(error){
        console.log(error.message);

    }

}

export const createPost = (meme) => async(dispatch) =>{
    try{
        const {data} = await api.createPost(meme);

        dispatch({type: 'CREATE', payload: data});
    }
    catch(error){
        console.log(error.message);
    }
} 