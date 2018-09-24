import React, {Component} from 'react';

class SectionHead extends Component {
    render(){
        return(
            <h2 className="ListingHead">Product Listing for {this.props.Product}</h2>
        );
    }
}

export default SectionHead;