import React, { Component } from 'react';
import './edit.css';

class Edit extends Component {

    constructor(props) {
      super(props);
      this.state = {
        iName: this.props.item.name,
        exampleInputImg: this.props.item.img,
        exampleInputPrice: this.props.item.price
      };
      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangeImg = this.handleChangeImg.bind(this);
      this.handleChangePrice = this.handleChangePrice.bind(this);
      this.editPhone = this.editPhone.bind(this);
    //   this.goBack = this.goBack.bind(this);
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

    editPhone = event => {
        console.log(this.props.item._id);
        fetch(`https://nodemobileshop.herokuapp.com/products/${this.props.item._id}`, {  
            method: 'PUT',  
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
    }

    // goBack() {
    //     this.props.history.push('/phones');
    // }

    render() {
        console.log(`https://nodemobileshop.herokuapp.com/products/${this.props.item._id}`);
        
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
