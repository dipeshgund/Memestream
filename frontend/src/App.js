import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import  Memes from './components/Memes/Memes';
import Form from './components/Form/Form';
import useStyles from './styles';
import {useDispatch} from 'react-redux';
import {getMemes} from './actions/memes';
import {useEffect} from 'react';
const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getMemes());
    },[dispatch])

    return (
        <Container maxWidth='lg' >
            <AppBar className={classes.appBar} position="static" color= "inherit">
                <Typography className= {classes.heading} variant = "h2" align="center">Xmeme</Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs ={12} sm = {7}>
                            <Memes/>
                        </Grid>
                        <Grid item xs ={12} sm = {4}>
                            <Form/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}
 
export default App;