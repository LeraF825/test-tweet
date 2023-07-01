import s from './Home.module.css';
import {BsFillBalloonHeartFill} from 'react-icons/bs';

const Home = () => {
    return(
        <h1 className={s.title}>Wellcome to Home page 
        <BsFillBalloonHeartFill size="1.5rem" color="red"/>
        </h1>
    )
}
export default Home;