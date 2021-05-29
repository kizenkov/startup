import React from 'react';
import s from './Header.module.css';
import github from './../../images/github.png';
import {getUserThunk} from '../../store/appReducer';
import {connect} from 'react-redux';

const Header = (props) => {
    const getUser = (e) => {
        if (e.code === 'Enter') {
            // window.location.href = `/profile/${e.target.value}`;
            props.getUserThunk(e.target.value)
        }
    }
    return <div className={s.header}>
        <img src={github} alt='github'/>
        <input type='text' onKeyPress={getUser} placeholder='Enter GitHub username'/>
    </div>
}

export default connect(null, {getUserThunk})(Header)