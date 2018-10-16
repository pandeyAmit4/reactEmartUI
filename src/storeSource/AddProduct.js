import React, { Component } from 'react';

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productCategory: "SmartPhones",
            productCode: "",
            companyName: "",
            modelName: "",
            warranty: "",
            price: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.productCategory);
        event.preventDefault();
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Product Category:
                    <select name="productCategory" 
                        onChange={this.handleInputChange}
                        value={this.state.productCategory}>
                            <option default value="SmartPhones">Smart Phones</option>
                            <option value="Books">Books</option>
                            <option value="Shoes">Shoes</option>
                    </select>
                </label>
                <label>
                    Product Code:
                    <input type="text" name="productCode" 
                        onChange={this.handleInputChange} 
                        value={this.state.productCode}/>
                </label>
                <label>
                    Company Name:
                    <input type="text" name="companyName" 
                        onChange={this.handleInputChange} 
                        value={this.state.companyName}/>
                </label>
                <label>
                    Model Name:
                    <input type="text" name="modelName" 
                        onChange={this.handleInputChange} 
                        value={this.state.modelName}/>
                </label>
                <label>
                    Warranty:
                    <input type="text" name="warranty" 
                        onChange={this.handleInputChange} 
                        value={this.state.warranty}/>
                </label>
                <label>
                    Price:
                    <input type="text" name="price" 
                        onChange={this.handleInputChange} 
                        value={this.state.price}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default AddProduct;