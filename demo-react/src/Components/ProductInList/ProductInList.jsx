function ProductInList (props) {
    return (
        <>
            <div className="col-md-3 col-sm-6">
                <div className="single-shop-product">
                    <div className="product-upper">
                    <img src={props.img} alt="" />
                    </div>
                    <h2>
                    {" "}
                    <a href="product.html">{props.name} </a>
                    </h2>
                    <div className="product-carousel-price">
                    <ins>${props.price}</ins> <del>${props.discount}</del>
                    </div>
                    <div className="product-option-shop">
                    <a
                        className="add_to_cart_button"
                        data-quantity={1}
                        data-product_sku=""
                        data-product_id={70}
                        rel="nofollow"
                        href="/canvas/shop/?add-to-cart=70"
                    >
                        Add to cart
                    </a>
                    </div>
                </div>
            </div>
                        
        </>
    )
}
export default ProductInList;