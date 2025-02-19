import Top from "../Top/Top";

 
function ProductWidgetArea () {
    return (
        <div className="product-widget-area">
            <div className="zigzag-bottom" />
            <div className="container">
                <div className="row">
                <Top name = "Top Sellers" api="http://localhost:3000/top-sellers-products"/>
                <Top name = "Recently Viewed" api="http://localhost:3000/top-new-products" />
                <Top name = "Top New" api="http://localhost:3000/top-new-products"/>
                </div>
            </div>
        </div>
    )
}
export default ProductWidgetArea;