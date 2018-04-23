import React, { Component } from 'react';
import './list.css';
import Edit from './edit';
import ReactDOM from 'react-dom';

class List extends Component {

    constructor(props) {
        super(props);
        this.state = {phones: []};
        this.deletePhone = this.deletePhone.bind(this);
        this.getAll = this.getAll.bind(this);
        //this.showAdd = this.showAdd.bind(this);
        this.editPhone = this.editPhone.bind(this);
    }

    getAll() {
        fetch('http://59e9685258dd3e00128055af.mockapi.io/phones', {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(data => data.json())
        .then(data => this.setState({phones: data}))  
    }

    componentDidMount() {
       this.getAll();
    }

    deletePhone(id) {
        return fetch(`http://59e9685258dd3e00128055af.mockapi.io/phones/${id}`, {
            method: 'DELETE'
        })
        .then(res => alert('Delete Successfully!'))
        .then(res => this.getAll())
    }
    
    editPhone(phone) {
        ReactDOM.render(<Edit item={phone}/>, document.getElementById('root'));
    }

    render() {
        return (
            <div className="list">
                {/* <SearchBox /> */}
                <ul>
                    {this.state.phones.map((index) =>
                        <li key={index.id}> 
                            <img src={index.img} alt="imgPhone" style={{width: 150, height: 150}}/>
                            <h3>{index.name}</h3>
                            <p>{index.price} VND</p>
                            <button className="editBtn" onClick={() => this.editPhone(index)}>Edit</button>
                            <button className="delBtn" onClick={() => this.deletePhone(index.id)}>Delete</button>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default List;
