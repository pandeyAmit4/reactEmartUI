import React, { Component } from 'react'
import * as Constants from '.././Constants';
import Smartphone from './Smartphone';
import Books from './Books';
import Pagination from './Pagination';
import SectionHead from './SectionHead';
import ProductFilter from './ProductFilter';

class Tile extends Component {

    render() {
        const mobileCards = [];
        const bookCards = [];
        Constants.STORE.forEach(function (categ, e) {
            if (categ.category === "mobiles") {
                categ.lists.forEach(function (product, e) {
                    mobileCards.push(
                        <Smartphone
                            key={categ.category + e}
                            labels={Constants.Labels}
                            companyName={product.companyName}
                            modelName={product.modelName}
                            warranty={product.warranty}
                            price={product.price}
                            id={categ.category + e}
                        />
                    );
                });
            } else if (categ.category === "books") {
                categ.lists.forEach(function (books, e) {
                    bookCards.push(
                        <Books
                            key={categ.category + e}
                            labels={Constants.Labels}
                            bookTag={books.bookTag}
                            bookName={books.bookName}
                            authorName={books.authorName}
                            edition={books.edition}
                            price={books.price}
                            id={categ.category + e}
                        />
                    );
                });
            }
        });
        return (
            <div className="container-fluid row">
                <div className="sidebar col-md-2">
                    <ProductFilter />
                </div>
                <div className="listing col-md-10">
                    <SectionHead
                        Product="Mobile"
                    />
                    <div className="row card-deck">
                        {mobileCards}
                    </div>
                    <Pagination />
                    <hr />
                    <SectionHead
                        Product="Book"
                    />
                    <div className="row card-deck">
                        {bookCards}
                    </div>
                    <Pagination />
                </div>
            </div>
        );
    }
}
export default Tile;