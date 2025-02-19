function ProductList () {
    return(
        <>
            <div>
                <div className="product-big-title-area">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <div className="product-bit-title text-center">
                            <h2> Samsung </h2>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="single-product-area">
                    <div className="zigzag-bottom" />
                    <div className="container">
                    <div className="row">
                        
                        
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center">
                            <li className="page-item disabled">
                                <a className="page-link" href="#" tabIndex={-1}>
                                Previous
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                1
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                2
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                3
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                Next
                                </a>
                            </li>
                            </ul>
                        </nav>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductList;