import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import './styles.css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
const Partners = () => {
    return (
        <Swiper
            spaceBetween={80}
            slidesPerView={4}
            //   onSlideChange={() => console.log('slide change')}
            //   onSwiper={(swiper) => console.log(swiper)}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper flex "
        >
            <SwiperSlide><img className='object-contain h-32 w-full' src="https://www.kintone.com/en-sea/lp/my/customizable-crm/image/Seiko-logo.png" alt="" /></SwiperSlide>
            <SwiperSlide><img className='object-contain h-32 w-full' src="https://www.kintone.com/en-sea/lp/my/customizable-crm/image/Ajinomoto-logo.png" alt="" /></SwiperSlide>
            <SwiperSlide><img className='object-contain h-32 w-full' src="https://www.kintone.com/en-sea/lp/my/customizable-crm/image/Toto-logo.png" alt="" /></SwiperSlide>
            <SwiperSlide><img className='object-contain h-32 w-full' src="https://www.kintone.com/en-sea/lp/my/customizable-crm/image/Yoshinoya-logo.png" alt="" /></SwiperSlide>
            <SwiperSlide><img className='object-contain h-32 w-full' src="https://www.kintone.com/en-sea/lp/my/customizable-crm/image/PersolKelly_vertical.png" alt="" /></SwiperSlide>
            <SwiperSlide><img className='object-contain h-32 w-full' src="https://www.kintone.com/en-sea/lp/my/customizable-crm/image/gojek-logo_normal.svg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='object-contain h-32 w-full' src="https://www.kintone.com/en-sea/lp/my/customizable-crm/image/House-logo.png" alt="" /></SwiperSlide>
            <SwiperSlide><img className='object-contain h-32 w-full mb-16' src="https://www.kintone.com/en-sea/lp/my/customizable-crm/image/Roland-logo.png" alt="" /></SwiperSlide>
        </Swiper>
    )
};

export default Partners;