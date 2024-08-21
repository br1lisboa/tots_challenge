"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./slideShow.css";

import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";

interface ISlideShow {
  slides: string[];
  title?: string;
  className?: string;
}

export function SlideShow({ slides, title, className }: ISlideShow) {
  const [thumbsSwiper] = useState<SwiperType>();

  return (
    <div className={className}>
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as React.CSSProperties
        }
        spaceBetween={10}
        navigation={true}
        autoplay={{
          delay: 4500,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide}>
            <Image
              src={`/${slide}`}
              alt={title ?? "Picture of the author"}
              width={300}
              height={300}
              className="rounded-lg object-fill"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
