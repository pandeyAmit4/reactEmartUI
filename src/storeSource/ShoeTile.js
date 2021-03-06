import React, { Component } from 'react';
import CardFooter from './CardFooter';
class ShoeTile extends Component {
    render() {
        let responsiveClasses="col-lg-4 col-md-5 col-sm-6 col-xs-12";
        responsiveClasses="";
        return (
            <div className={`card border-default ${responsiveClasses}`}>
                <img className="card-img-top" src='data:image/svg+xml;charset=UTF-8,<svg%20width%3D"286"%20height%3D"180"%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20viewBox%3D"0%200%20286%20180"%20preserveAspectRatio%3D"none"><defs><style%20type%3D"text%2Fcss">%23holder_165eceb358b%20text%20%7B%20fill%3A092e3f%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20<%2Fstyle><%2Fdefs><g%20id%3D"holder_165eceb358b"><rect%20width%3D"286"%20height%3D"180"%20fill%3D"%23fbb763"><%2Frect><g><text%20x%3D"90.0"%20y%3D"96.3">Book%20Caption<%2Ftext><%2Fg><%2Fg><%2Fsvg>' alt="Card product cap" />
                <div className="card-body">
                    <h5 className="card-title">Book Details</h5>
                    <div><strong>{this.props.labels.BRAND}</strong>: {this.props.brand}</div>
                    <div><strong>{this.props.labels.COLOR}</strong>: {this.props.color}</div>
                    <div><strong>{this.props.labels.TYPE}</strong>: {this.props.type}</div>
                    <div><strong>{this.props.labels.PRICE}</strong>: {this.props.price}</div>
                </div>
                <CardFooter 
                    id={this.props.id}
                />
            </div>
        );
    }
}
export default ShoeTile;