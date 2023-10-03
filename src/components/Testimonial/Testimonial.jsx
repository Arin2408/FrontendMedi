import React from "react";
import { Navigation, Pagination } from 'swiper/modules';
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import patientAvatar from "../../assets/images/patient-avatar.png";
import { HiStar } from "react-icons/hi";

const Testimonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{clickable:true}}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
         <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Amit Jain
                </h4>
                <div className="flex items-center gap-[2px]">
                    <HiStar  className="text-yellowColor w-[18px] h-5"/>
                    <HiStar  className="text-yellowColor w-[18px] h-5"/>
                    <HiStar  className="text-yellowColor w-[18px] h-5"/>
                    <HiStar  className="text-yellowColor w-[18px] h-5"/>
                    <HiStar  className="text-yellowColor w-[18px] h-5"/>
                </div>
              </div>
            </div> 
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400] ">"I have taken medical services from them. They treat so well and they are provading best medical services."</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Naman Sharma
                </h4>
                <div className="flex items-center gap-[2px]">
                    <HiStar  className="text-yellowColor w-[18px] h-5"/>
                    <HiStar  className="text-yellowColor w-[18px] h-5"/>
                    <HiStar  className="text-yellowColor w-[18px] h-5"/>
                    <HiStar  className="text-yellowColor w-[18px] h-5"/>
                </div>
              </div>
            </div> 
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400] ">"My experience with their services is amazing. Good website."</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Mahendra Anjana
                </h4>
                <div className="flex items-center gap-[2px]">
                    <HiStar  className="text-yellowColor w-[18px] h-5"/>
                    <HiStar  className="text-yellowColor w-[18px] h-5"/>
                    <HiStar  className="text-yellowColor w-[18px] h-5"/>
                    <HiStar  className="text-yellowColor w-[18px] h-5"/>
                    <HiStar  className="text-yellowColor w-[18px] h-5"/>
                </div>
              </div>
            </div> 
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400] ">"They are provading best medical services. Doctors are best and certified."</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Yugal Yadav
                </h4>
                <div className="flex items-center gap-[2px]">
                    <HiStar  className="text-yellowColor w-[18px] h-5"/>
                    <HiStar  className="text-yellowColor w-[18px] h-5"/>
                    <HiStar  className="text-yellowColor w-[18px] h-5"/>
                    <HiStar  className="text-yellowColor w-[18px] h-5"/>
                    
                </div>
              </div>
            </div> 
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400] ">"They treat so well and they are provading best medical services."</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Inder Kumar Dhakad
                </h4>
                <div className="flex items-center gap-[2px]">
                    <HiStar  className="text-yellowColor w-[18px] h-5"/>
                    <HiStar  className="text-yellowColor w-[18px] h-5"/>
                    <HiStar  className="text-yellowColor w-[18px] h-5"/>
                    <HiStar  className="text-yellowColor w-[18px] h-5"/>
                    <HiStar  className="text-yellowColor w-[18px] h-5"/>
                </div>
              </div>
            </div> 
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400] ">"Best services than other local apps"</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Sumit Parmar
                </h4>
                <div className="flex items-center gap-[2px]">
                    <HiStar  className="text-yellowColor w-[18px] h-5"/>
                    <HiStar  className="text-yellowColor w-[18px] h-5"/>
                    <HiStar  className="text-yellowColor w-[18px] h-5"/>
                    <HiStar  className="text-yellowColor w-[18px] h-5"/>
                    
                </div>
              </div>
            </div> 
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400] ">"Booking mde easy using this app."</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
