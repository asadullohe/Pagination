import React from 'react'
import { ITEM_PER_PAGE } from '../../utils/constants'

const Pagination = ({ onPageChange, currentPage, totalItems, isPreviousData }) => {
    const pageCount = Math.ceil(totalItems / ITEM_PER_PAGE)

    const handlePrevClick = () => onPageChange(currentPage - 1)
    const handleNextClick = () => onPageChange(currentPage + 1)

    return (
        <div>
            <div className="join">
                <button disabled={currentPage === 1 || isPreviousData} onClick={handlePrevClick} className="join-item btn">«</button>
                <button className="join-item btn">Page {currentPage}</button>
                <button disabled={currentPage === pageCount || isPreviousData} onClick={handleNextClick} className="join-item btn">»</button>
            </div>
        </div>
    )
}

export default Pagination