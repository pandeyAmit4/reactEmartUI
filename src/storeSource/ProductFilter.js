import React, { Component } from 'react';
import './ProductFilter.css';
class ProductFilter extends Component {
    render() {
        return (
            <div className="cd-filter">
                <form>
                    <div className="cd-filter-block">
                        <h4>Choose a Store</h4>
                        <ul className="cd-filter-content cd-filters list">
                            <li>
                                <input className="filter" data-filter="" type="radio" name="radioButton" id="radio1" defaultChecked />
                                <label className="radio-label" htmlFor="radio1">All</label>
                            </li>
                            <li>
                                <input className="filter" data-filter=".radio2" type="radio" name="radioButton" id="radio2" />
                                <label className="radio-label" htmlFor="radio2">Apple Store</label>
                            </li>
                            <li>
                                <input className="filter" data-filter=".radio3" type="radio" name="radioButton" id="radio3" />
                                <label className="radio-label" htmlFor="radio3">Amazon.com</label>
                            </li>
                            <li>
                                <input className="filter" data-filter=".radio4" type="radio" name="radioButton" id="radio4" />
                                <label className="radio-label" htmlFor="radio4" >BestBuy.com</label>
                            </li>
                        </ul>
                    </div>

                    <div className="cd-filter-block">
                        <h4>Filter Results</h4>
                        <div className="cd-filter-content">
                            <input type="search" placeholder="Search Amazon.com" />
                        </div>
                    </div>

                    <div className="cd-filter-block">
                        <h4>Categories</h4>
                        <ul className="cd-filter-content cd-filters list">
                            <li>
                                <input className="filter" data-filter=".check1" type="checkbox" id="checkbox1" />
                                <label className="checkbox-label" htmlFor="checkbox1">iPhone</label>
                            </li>
                            <li>
                                <input className="filter" data-filter=".check2" type="checkbox" id="checkbox2" />
                                <label className="checkbox-label" htmlFor="checkbox2">iPad</label>
                            </li>
                            <li>
                                <input className="filter" data-filter=".check3" type="checkbox" id="checkbox3" />
                                <label className="checkbox-label" htmlFor="checkbox3">Apple TV</label>
                            </li>
                            <li>
                                <input className="filter" data-filter=".check3" type="checkbox" id="checkbox3" />
                                <label className="checkbox-label" htmlFor="checkbox3">Macbook</label>
                            </li>
                            <li>
                                <input className="filter" data-filter=".check3" type="checkbox" id="checkbox3" />
                                <label className="checkbox-label" htmlFor="checkbox3">Macbook Air</label>
                            </li>
                            <li>
                                <input className="filter" data-filter=".check3" type="checkbox" id="checkbox3" />
                                <label className="checkbox-label" htmlFor="checkbox3">Macbook Pro</label>
                            </li>
                            <li>
                                <input className="filter" data-filter=".check3" type="checkbox" id="checkbox3" />
                                <label className="checkbox-label" htmlFor="checkbox3">Apple Accessories</label>
                            </li>
                        </ul>
                    </div>
                    <div className="cd-filter-block">
                        <h4>Currency</h4>
                        <div className="cd-filter-content">
                            <div className="cd-select cd-filters">
                                <select className="filter" name="selectThis" id="selectThis">
                                    <option value="">ARS</option>
                                    <option value=".option1">USD</option>
                                    <option value=".option2">BRL</option>
                                    <option value=".option3">EUR</option>
                                    <option value=".option4">GBP</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </form>
                <a href="#0" className="cd-close"><i className="icon ent-close"></i> close </a>
            </div>
        )
    }
}

export default ProductFilter;