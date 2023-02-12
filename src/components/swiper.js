import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../style/swiper.css";
import { Navigation } from "swiper";



export default function Carusel(product){
const images= product.product.images 


return (
<>
  <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
    {images.map(img=>
    <SwiperSlide>
      <img src={img}/>
    </SwiperSlide>
      )}
  </Swiper> 
</>


)     
 
}
      