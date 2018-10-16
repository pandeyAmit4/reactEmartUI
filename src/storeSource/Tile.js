import React, { Component } from 'react'
import * as Constants from '.././Constants';
import Smartphone from './Smartphone';
import Books from './Books';
import Pagination from './Pagination';
import SectionHead from './SectionHead';
import ProductFilter from './ProductFilter';
import ShoeTile from './ShoeTile'
import AddProduct from './AddProduct'
class Tile extends Component {
    constructor(props){
        super(props);
        this.state = {
            added : false,
            cartCount: 0
        }
    }
    handleCart() {
         
    }
    render() {
        const mobileCards = [];
        const bookCards = [];
        const shoeCards = [];
        Constants.STORE.map(function (categ, e) {
            if (categ.category === "mobiles") {
                categ.lists.map(function (product, e) {
                    mobileCards.push(
                        <Smartphone
                            key={product.productCode}
                            labels={Constants.Labels}
                            companyName={product.companyName}
                            modelName={product.modelName}
                            warranty={product.warranty}
                            price={product.price}
                            id={product.productCode}
                        />
                    );
                });
            } else if (categ.category === "books") {
                categ.lists.map(function (books, e) {
                    bookCards.push(
                        <Books
                            key={books.productCode}
                            labels={Constants.Labels}
                            bookTag={books.bookTag}
                            bookName={books.bookName}
                            authorName={books.authorName}
                            edition={books.edition}
                            price={books.price}
                            id={books.productCode}
                        />
                    );
                });
            } else if (categ.category === "shoes") {
                categ.lists.map(function (shoes, e) {
                    shoeCards.push(
                        <ShoeTile
                            key={shoes.productCode}
                            labels={Constants.Labels}
                            brand={shoes.brand}
                            color={shoes.color}
                            type={shoes.type}
                            price={shoes.price}
                            id={shoes.productCode}
                        />
                    );
                });
            }
        });
        return (
            <div className="container-fluid productPage">
                <div className="sidebar col-md-2 d-none d-sm-none d-md-block">
                    <ProductFilter />
                </div>
                <div className="listing col-md-10 col-sm-12">
                    <div className="productCategory">
                    <SectionHead
                        Product="Smart Phones"
                    />
                    <div className="row card-deck">
                        {mobileCards}
                    </div>
                    <Pagination />
                    <hr />
                    </div>
                    <div className="productCategory">
                    <SectionHead
                        Product="Books"
                    />
                    <div className="row card-deck">
                        {bookCards}
                    </div>
                    <Pagination />
                    <hr />
                    </div>
                    <div className="productCategory">
                    <SectionHead
                        Product="Shoes"
                    />
                    <div className="row card-deck">
                        {shoeCards}
                    </div>
                    <Pagination />
                    </div>
                </div>
                <AddProduct/>
            </div>
        );
    }
}
export default Tile;