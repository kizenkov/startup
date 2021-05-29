import React from 'react';
import './App.css';
// import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import {FindPage} from './components/EmptyPages/FindPage';
import {NotFoundPage} from './components/EmptyPages/NotFoundPage';
import {Loader} from './components/Loader/Loader';

const App = ({data, isLoading, isRequest, notFound}) => {
    return (
        <div className='app'>
            <Header/>
            {/* <Route exact path='/' render={() => <FindPage/>}/>
            <Route path='/notFoundPage' render={() => <NotFoundPage/>}/> */}
            <Profile/>
            {!isRequest && <FindPage/>}
            {notFound && <NotFoundPage/>}
            {isLoading && <Loader/>}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        data: state.app.data,
        isLoading: state.app.isLoading,
        isRequest: state.app.isRequest,
        notFound: state.app.notFound
    }
}

export default connect(mapStateToProps, {})(App)