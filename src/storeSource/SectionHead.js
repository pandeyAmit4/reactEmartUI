import React, {Component} from 'react';

class SectionHead extends Component {
    render(){
        return(
            <h2>Product Listing for {this.props.Product}</h2>
        );
    }
}

export default SectionHead;