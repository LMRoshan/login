// eslint-disable-next-line no-unused-vars
import React from 'react'

//swiper
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Banner = () => {
  return (
    <div>
      <h1>Banner</h1>
      <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={2}
          slidesPerView={3}
          centeredSlides={true}
          navigation
          loop
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img
              src="https://imgs.search.brave.com/4jXFgawiSkuiC1qcAqQqn83Nvxs30Tf_RvpayPrOIck/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI4/ODY0Mzc1NS9waG90/by9kaWdpdGFsLWJp/bmFyeS1jb2RlLW51/bWJlcnMuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVdUcXBY/Y3d4UEJES1RMZ0hO/ZXlOeTBEaF9GS1dU/bHhBVlljM2NUX2RU/cHc9"
              alt="img1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://imgs.search.brave.com/RC9wYzjkS5aeUJnHJaZPrt4QN4pXlS6xiXTDolUGvTQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/Y29kaW5nLW9uLWxh/cHRvcC5qcGc_d2lk/dGg9MTAwMCZmb3Jt/YXQ9cGpwZyZleGlm/PTAmaXB0Yz0w"
              alt="img2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://imgs.search.brave.com/3p808baVMStuKzRLpo3fmlewHBs5jLgFAyH71YLVjm0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/aHAtcHJvZ3JhbW1p/bmctaHRtbC1jb2Rp/bmctY3liZXJzcGFj/ZS1jb25jZXB0XzUz/ODc2LTEyMDQ1My5q/cGc_c2VtdD1haXNf/aHlicmlk"
              alt="img3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://imgs.search.brave.com/oRJzXnBHyk5bCEdBxmyALz1gaPJcrUnyidv7-dRaZtM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/ZGV2ZWxvcGVyLWNv/ZGluZy1pbi1waHAu/anBnP3dpZHRoPTEw/MDAmZm9ybWF0PXBq/cGcmZXhpZj0wJmlw/dGM9MA"
              alt="img4"
            />
          </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Banner
