import React, { Component } from 'react';
import './input.css';

class Input extends Component {
  
  constructor(props) {
      super(props);
      this.state = {
          name: '',
          img: '',
          price: ''
      };
      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangeImg = this.handleChangeImg.bind(this);
      this.handleChangePrice = this.handleChangePrice.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(event) {
        //event.preventDefault();
        fetch('http://59e9685258dd3e00128055af.mockapi.io/phones', {  
            method: 'POST',  
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
        return (
        <div className="input-box">
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend>Add new phone:</legend>
                        <label>Phone Name </label>
                        <input type="text" placeholder="Enter phone name..." required value={this.state.name} onChange={this.handleChangeName} />
                        <label>IMG Url</label>
                        <input type="text" placeholder="Enter image url..." required value={this.state.img} onChange={this.handleChangeImg} />
                        <label>Price</label>
                        <input type="text" placeholder="Enter price..." required value={this.state.price} onChange={this.handleChangePrice} />
                        <button>Summit</button>
                </fieldset>
            </form>     
        </div>
        );
    }
}

export default Input;
