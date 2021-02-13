import useStyles  from './styles';
import {useState} from 'react';
import {TextField, Button, Typography, Paper} from '@material-ui/core';
import {useDispatch} from 'react-redux';

import  {createPost}  from '../../actions/memes';

const Form = () => {
    const classes = useStyles();
    const [memeDetails,setMemeDetails] = useState({
        author : '',
        caption : '',
        url : ''
    })
    const dispatch = useDispatch();

    const handleSubmit = (e)=>{
        dispatch(createPost(memeDetails));
        
    }
    const handleClear =() =>{
       setMemeDetails({aurhor:'',caption: '', url: ''});
    }
    return ( 
        <Paper className = {classes.paper}>
            <form autoComplete= "off" noValidate className = {classes.form} onSubmit = {handleSubmit}>
            <Typography variant="h6">Create Meme</Typography>
            <TextField name="author" variant = "outlined" label="Author" fullWidth value={memeDetails.author} onChange={(e)=>setMemeDetails({...memeDetails, author:e.target.value})}/>
            <TextField name="caption" variant = "outlined" label="Caption" fullWidth value={memeDetails.caption} onChange={(e)=>setMemeDetails({...memeDetails, caption:e.target.value})}/>
            <TextField name="url" variant = "outlined" label="URL" fullWidth value={memeDetails.url} onChange={(e)=>setMemeDetails({...memeDetails, url:e.target.value})}/>
            <Button className = {classes.buttonSubmit} variant="contained" color="primary" size="large" fullWidth type="submit" >Create Meme</Button> 
            <Button className= {classes.buttonSubmit} variant= "contained" color="secondary" size = "large" onClick={handleClear} fullWidth >Clear</Button> 
            </form>

        </Paper>
    );
}
 
export default Form;