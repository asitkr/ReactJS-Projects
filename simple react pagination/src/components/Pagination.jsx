import React from 'react'

export default function Pagination({ postsPerPage, totalPost, handlePage }) {
    const pageNumber = [];

    for(let i=1; i<Math.ceil(totalPost / postsPerPage); i++) {
        pageNumber.push(i);
    }

    return (
        <div>
            <nav>
                <ul className="pagination">
                    {
                        pageNumber.map(number => 
                            <li key={number} className="page-item">
                                <a href="#" onClick={() => handlePage(number)} className='page-link'>{number}</a>
                            </li>    
                        )
                    }
                </ul>
            </nav>
        </div>
    )
}
