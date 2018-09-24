import React, { Component } from 'react';
// import heartIcon from '@material-ui/icons/Heart';
class CardFooter extends Component {
    render() {
        return (
            <div className="card-footer">
                <div className="">
                    <input type="hidden" value={this.props.id} />
                    <button className="btn btn-outline-primary btn-small" name="addToCart">
                        <i className="material-icons">add_shopping_cart</i>
                    </button>
                    <button className="btn btn-link btn-small" name="addFev">Add Fav</button>
                    <div className="custom-control custom-checkbox mr-sm-2 iaminlineblock">
                        <input type="checkbox" className="custom-control-input" id={this.props.id} />
                        <label className="custom-control-label" htmlFor={this.props.id}>Wishlist</label>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardFooter;