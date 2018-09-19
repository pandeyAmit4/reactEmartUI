import React, { Component } from 'react'
class Smartphone extends Component {
    render() {
        return (
            <div className="card border-info col-md-4 col-sm-1">
                <img className="card-img-top" src='data:image/svg+xml;charset=UTF-8,<svg%20width%3D"286"%20height%3D"180"%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20viewBox%3D"0%200%20286%20180"%20preserveAspectRatio%3D"none"><defs><style%20type%3D"text%2Fcss">%23holder_165eceb358b%20text%20%7B%20fill%3A092e3f%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20<%2Fstyle><%2Fdefs><g%20id%3D"holder_165eceb358b"><rect%20width%3D"286"%20height%3D"180"%20fill%3D"%2323e1db"><%2Frect><g><text%20x%3D"60.0"%20y%3D"96.3">Smartphone%20Caption<%2Ftext><%2Fg><%2Fg><%2Fsvg>' alt="Card product cap" />
                <div className="card-body">
                    <h5 className="card-title">Smart Phone Features</h5>
                    <div><strong>{this.props.labels.BRAND}</strong>: {this.props.companyName}</div>
                    <div><strong>{this.props.labels.MODEL}</strong>: {this.props.modelName}</div>
                    <div><strong>{this.props.labels.WORRANTY}</strong>: {this.props.warranty}</div>
                    <div><strong>{this.props.labels.PRICE}</strong>: {this.props.price}</div>
                </div>
                <div className="card-footer">
                    <div className="">
                        <button className="btn btn-default btn-small" name="addToCart">+ Cart</button>
                        <button className="btn btn-link btn-small" name="addFev">Add Fev</button>
                        <div className="custom-control custom-checkbox mr-sm-2 iaminlineblock">
                            <input type="checkbox" className="custom-control-input" id={this.props.id}/>
                            <label className="custom-control-label" htmlFor={this.props.id}>Wishlist</label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Smartphone;