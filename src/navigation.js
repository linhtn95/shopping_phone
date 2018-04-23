import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';
import Route from 'react-router-dom/Route';
import List from './list';
import Input from './input';

class Navigation extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><Link to='/phones'>Phones</Link></li>
                        <li><Link to='/add'>Add</Link></li>
                    </ul>
                </nav>
                <Route path='/phones' component={List}/>
                <Route path='/add' component={Input}/>
            </header>       
        );
    }
}

export default Navigation;
