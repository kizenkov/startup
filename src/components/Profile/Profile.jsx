import React from 'react';
import s from './Profile.module.css';
import {connect} from 'react-redux';
import {Paginate} from '../Paginate/Paginate';
import {Description} from './Description';
import {Repositories} from './Repositories';
import {setRepositories} from '../../store/appReducer';

const Profile = ({data, repos, currentPage, setRepositories}) => {
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

export default connect(mapStateToProps, {setRepositories})(Profile)