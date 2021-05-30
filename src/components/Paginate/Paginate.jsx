import React, {useState, useEffect} from 'react';
import s from './../Paginate/Paginate.module.css';

export const Paginate = ({name, per_page, pagePortion, totalCountRepos, currentPage, setRepositories}) => {

    const setReposPage = (page) => {
        setPage(page);
        setRepositories(name, page, per_page)
    }

    let [numberOfPagePortion, setNumberOfPagePortion] = useState(1);
    let [page, setPage] = useState(1);

    useEffect(() => {
        setPage(1);
        setNumberOfPagePortion(1)
    }, [name]);

    let totalPage = Math.ceil(totalCountRepos / per_page);
    let leftBorderOfPortion = numberOfPagePortion * pagePortion - (pagePortion - 1);
    let rightBorderOfPortion = numberOfPagePortion * pagePortion;
    if (numberOfPagePortion === Math.ceil(totalPage / pagePortion)) {
        rightBorderOfPortion = totalPage
    }

    let pages = [];
    for (let i = leftBorderOfPortion; i <= rightBorderOfPortion; i++) {
        pages.push(i);
    }
    let pageList = pages.map(page => <span
        key={page}
        onClick={() => setReposPage(page)}
        className={page === currentPage ? s.currentPage : null}>{page}</span>)

    return <div className={s.paginate}>
        <div>
            {totalCountRepos > 1
                ? (totalCountRepos === (page * per_page - (per_page - 1))
                    ? null
                    : (page * per_page - (per_page - 1)) + '-') : null}
            {totalCountRepos > per_page
                ? (page * per_page > totalCountRepos
                    ? totalCountRepos
                    : page * per_page)
                : totalCountRepos}
            {' of ' + totalCountRepos}
            {totalCountRepos !== 1 ? ' items' : ' item'}
        </div>
        <div>
            <button onClick={() => setNumberOfPagePortion(numberOfPagePortion - 1)}
                    disabled={numberOfPagePortion === 1}
                    className={numberOfPagePortion === 1 ? s.disabledButton : null}>‹
            </button>

            {pageList}

            {totalPage > pagePortion
            && rightBorderOfPortion !== totalPage
            && <>
                <span>...</span>
                <span onClick={() => setReposPage(totalPage)}
                      className={totalPage === currentPage ? s.currentPage : null}>
                    {totalPage}</span>
            </>}

            <button onClick={() => setNumberOfPagePortion(numberOfPagePortion + 1)}
                    disabled={numberOfPagePortion === Math.ceil(totalPage / pagePortion)}
                    className={numberOfPagePortion === Math.ceil(totalPage / pagePortion) ? s.disabledButton : null}>›
            </button>
        </div>
    </div>
}