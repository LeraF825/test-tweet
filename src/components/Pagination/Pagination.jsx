import React from "react";
import s from './Pagination.module.css';

const Pagination = ({perPage, totalUsers, paginate})=> {
    const pageNumbers = []

    for(let i = 1; i<= Math.ceil(totalUsers/perPage); i++){
        pageNumbers.push(i)
    }
    return(
         <div className={s.container}>
            <ul className={s.pagination}>
                {
                    pageNumbers.map(number=>(
                        <li className={s.pageItem} key={number}>
                            <a href="#" className={s.pageLink} onClick={()=>paginate(number)}>
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
         </div>
    )
}
export default Pagination