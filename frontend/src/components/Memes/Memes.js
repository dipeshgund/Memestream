import Meme from './Meme/Meme';
import useStyles from './styles';
import {useSelector} from 'react-redux';
const Memes = () => {
    const classes = useStyles();
    const memes = useSelector((state) => state.memes);
    console.log(memes);
    return ( 
        <>
            <Meme/>
            <h1>Memes</h1>
            <Meme/>
        </>
    );
}
 
export default Memes;