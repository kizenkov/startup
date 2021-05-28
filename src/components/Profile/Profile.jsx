import React, {useEffect} from 'react';
import s from './Profile.module.css';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Paginate} from '../Paginate/Paginate';
import {Description} from './Description';
import {Repositories} from './Repositories';
import {setRepositories, getUser} from '../../store/appReducer';
import {compose} from 'redux';

const Profile = ({data, repos, currentPage, getUser, setRepositories, ...props}) => {
    useEffect(() => {
        getUser(props.match.params.name);
    }, [])

    if (!data) return null
    return <div className={s.profile}>
        <Description data={data}/>
        <Repositories data={data}
                      repos={repos}/>
        {data.public_repos
            ? <Paginate totalCountRepos={data.public_repos}
                        currentPage={currentPage}
                        name={data.login}
                        setRepositories={setRepositories}
                        per_page={4}
                        pagePortion={3}/>
            : null}
    </div>
}

const mapStateToProps = (state) => {
    return {
        data: state.app.data,
        repos: state.app.repos,
        currentPage: state.app.currentPage,
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {setRepositories, getUser})
)(Profile)