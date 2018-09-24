import React, { Component } from 'react';

class Pagination extends Component {
    render() {
        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="#nogo">Previous</a></li>
                    <li className="page-item"><a className="page-link" href="#nogo">1</a></li>
                    <li className="page-item"><a className="page-link" href="#nogo">2</a></li>
                    <li className="page-item"><a className="page-link" href="#nogo">3</a></li>
                    <li className="page-item"><a className="page-link" href="#nogo">Next</a></li>
                </ul>
            </nav>
        );
    }
}
export default Pagination;