import s from './Tweets.module.css';
import axios from 'axios';
import TweetCard from 'components/TweetCard/TweetCard';
// import { fetchUsers } from 'services/usersAPI';
import { useState, useEffect } from 'react';
import Pagination from 'components/Pagination/Pagination';


const Tweets = ()=>{
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(3);

    useEffect(()=>{
        const getUsers = async()=>{
            setLoading(true)
            const res = await axios.get('https://648846650e2469c038fd6280.mockapi.io/users')
            setUsers(res.data)
            setLoading(false)
        }
        getUsers()
    },[])

    const lastUserIndex = currentPage * perPage;
    const firstUserIndex = lastUserIndex - perPage;
    const currentUser = users.slice(firstUserIndex, lastUserIndex);

    const paginate = (pageNumber)=>setCurrentPage(pageNumber)
  
    

    return(
        <div className={s.container}> 
        <TweetCard users={currentUser} setUsers={setUsers} />
            <Pagination 
            perPage={perPage}
            totalUsers={users.length}
            paginate={paginate}
            />
        </div>
    )
}
export default Tweets;