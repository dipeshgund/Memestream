import useStyles from './styles';
import {Card, CardMedia, CardContent, CardActions,Button, Typography} from '@material-ui/core';
const Meme = ({meme}) => {
    const classes = useStyles();
    return ( 
        <Card className={classes.card}>
            <CardMedia className={classes.media} image ={meme.url} src= {meme.url}/>
            {/* <div className={classes.overlay}>
                <Typography variant="h6">Creator: {meme.author}</Typography>
                <Typography variant="h6">Caption: {meme.caption}</Typography>
            </div> */}
            <div>
                <p>Creator: {meme.author}</p>
                <p>Caption: {meme.caption}</p>
            </div>
        </Card>
     );
}
 
export default Meme;