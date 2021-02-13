import Meme from './Meme/Meme';
import useStyles from './styles';
import {useSelector} from 'react-redux';
import {Grid ,CircularProgress } from '@material-ui/core';
const Memes = () => {
    const classes = useStyles();
    const memes = useSelector((state) => state.memes);
    return (
        !memes.length ? <CircularProgress /> : (
          <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {memes.map((meme) => (
              <Grid key={meme.id} item xs={12} sm={6} md={6}>
                <Meme meme={meme}  />
              </Grid>
            ))}
          </Grid>
        )
      );
    
};
 
export default Memes;