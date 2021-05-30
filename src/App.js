import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import {FindPage} from './components/EmptyPages/FindPage';
import {NotFoundPage} from './components/EmptyPages/NotFoundPage';
import {Loader} from './components/Loader/Loader';


const App = ({data, isRequest, isNotFound, isLoading}) => {
    return (
        <div className='app'>
            <Header />
            {data && <Profile/>}
            {!isRequest && <FindPage/>}
            {isNotFound && <NotFoundPage/>}
            {isLoading && <Loader/>}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        data: state.app.data,
        isRequest: state.app.isRequest,
        isNotFound: state.app.isNotFound,
        isLoading: state.app.isLoading
    }
}

export default connect(mapStateToProps, {})(App)