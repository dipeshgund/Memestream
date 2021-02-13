import useStyles from './styles';
import {Card, CardMedia, Typography} from '@material-ui/core';

const Meme = ({meme}, setcurrentID) => {
    const classes = useStyles();
    return ( 
        <Card className={classes.card}>
            <CardMedia className={classes.media} image ={meme.url} src= {meme.url}/>
            <div>
                <Typography variant ="h6">Creator: {meme.author}</Typography>
                <Typography variant ="h6">Caption: {meme.caption}</Typography>
            </div>

            
        </Card>
     );
}
 
export default Meme;