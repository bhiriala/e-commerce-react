import Brands from '../Components/Brands/Brands'
import Carousel from '../Components/Carrousel/Carrousel'
import ProductWidgetArea from '../Components/ProductWidgetArea/ProductWidgetArea'
import Promo from '../Components/Promo/Promo'

function Home () {
    return(
        <>
        <Carousel/>
        <Promo/>
        <Brands/>
        <ProductWidgetArea/>
        </>
    )
}
export default Home;