import React, { Component } from 'react';
import './edit.css';
// import ReactDOM from 'react-dom';

class Edit extends Component {

    constructor(props) {
      super(props);
      this.state = {
        name: this.props.item.name,
        img: this.props.item.img,
        price: this.props.item.price
      };
      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangeImg = this.handleChangeImg.bind(this);
      this.handleChangePrice = this.handleChangePrice.bind(this);
      this.editPhone = this.editPhone.bind(this);
    }

    handleChangeName(event){
        this.setState({
            name: event.target.value,
        })
    }

    handleChangeImg(event){
        this.setState({
            img: event.target.value,
        })
    }

    handleChangePrice(event){
        this.setState({
            price: event.target.value,
        })
    }

    editPhone = event => {
        console.log(this.props.item.id);
        fetch(`http://59e9685258dd3e00128055af.mockapi.io/phones/${this.props.item.id}`, {  
            method: 'PUT',  
            headers: {
                'Accept': 'application/json',
                "Content-type": "application/json; charset=UTF-8"
            },  
            body: JSON.stringify({
               name: this.state.name,
               img: this.state.img,
               price: this.state.price
            })
        })
        .then( data => {
            console.log(data);
            this.setState({data});
        })  
        .catch(error => console.log('Request failure: ', error));
    }

    render() {
        console.log("render" + this.props.item.id);
        
        return (
        <div className="input-box">
            <form>
                <fieldset>
                    <legend>Edit a phone:</legend>
                    <label>Phone Name </label>
                    <input type="text" defaultValue={this.props.item.name} onChange={this.handleChangeName} />
                    <label>IMG Url</label>
                    <input type="text" defaultValue={this.props.item.img} onChange={this.handleChangeImg} />
                    <label>Price</label>
                    <input type="text" defaultValue={this.props.item.price} onChange={this.handleChangePrice} />
                    <button onClick={this.editPhone}>Summit</button>
                </fieldset>
            </form>     
        </div>
        );
    }
}

export default Edit;
