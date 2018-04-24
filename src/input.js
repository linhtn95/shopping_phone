import React, { Component } from 'react';
import './input.css';

class Input extends Component {
  
  constructor(props) {
      super(props);
      this.state = {
        iName: '',
        exampleInputImg: '',
        exampleInputPrice: ''
      };
      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangeImg = this.handleChangeImg.bind(this);
      this.handleChangePrice = this.handleChangePrice.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event){
        this.setState({
            iName: event.target.value,
        })
    }

    handleChangeImg(event){
        this.setState({
            exampleInputImg: event.target.value,
        })
    }

    handleChangePrice(event){
        this.setState({
            exampleInputPrice: event.target.value,
        })
    }

    handleSubmit(event) {
        //event.preventDefault();
        // fetch('http://59e9685258dd3e00128055af.mockapi.io/phones', {  
        fetch('https://nodemobileshop.herokuapp.com/products', {      
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                "Content-type": "application/json; charset=UTF-8"
            },  
            body: JSON.stringify({
               iName: this.state.iName,
               exampleInputImg: this.state.exampleInputImg,
               exampleInputPrice: this.state.exampleInputPrice
            })
        })
        .then( data => {
            console.log(data);
            this.setState({data});
        })  
        .catch(error => console.log('Request failure: ', error));
        // this.props.history.push(`/phones`);
    }
     
    render() {
        return (
            <div className="input-box">
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Add new phone:</legend>
                            <label>Phone Name </label>
                            <input type="text" placeholder="Enter phone name..." required value={this.state.iName} onChange={this.handleChangeName} />
                            <label>IMG Url</label>
                            <input type="text" placeholder="Enter image url..." required value={this.state.exampleInputImg} onChange={this.handleChangeImg} />
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
