import Header from "../component/header/index";
import Footer from "../component/footer/index";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

const Home = () => {
  useEffect(() => {}, []);

  return (
    <div classNameName="test">
      <Header />
      <main>
        <article className="container">
          <div className="flex home">
            <section className="slider m-3">
              <Swiper
                navigation={{
                  nextEl: ".swiper-button-next-unique",
                  prevEl: ".swiper-button-prev-unique",
                }}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                pagination={{ clickable: true }}
                spaceBetween={2}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <img src="../img/slider/slider1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="../img/slider/slider2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="../img/slider/slider3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="../img/slider/slider4.jpg" alt="" />
                </SwiperSlide>
                <div class="swiper-button-prev-unique"></div>
                <div class="swiper-button-next-unique"></div>
              </Swiper>
              {/* <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <a href="#">
                      <img src="../img/slider/slider1.jpg" alt="" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="#">
                      <img src="../img/slider/slider2.jpg" alt="" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="#">
                      <img src="../img/slider/slider3.jpg" alt="" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="#">
                      <img src="../img/slider/slider4.jpg" alt="" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="#">
                      <img src="../img/slider/slider5.jpg" alt="" />
                    </a>
                  </div>
                </div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-pagination"></div>
              </div> */}
            </section>

            <aside className="bannerLeft">
              <a href="#">
                <img src="../img/banner/banner1.gif" alt="" />
              </a>
              <a href="#">
                <img src="../img/banner/banner2.jpg" alt="" />
              </a>
            </aside>
          </div>
        </article>
        <article>
          <section className="container amazingSugest">
            <div className="right">
              <a href="">
                <img src="../img/amazing-segustion/amazing-typo.svg" alt="" />
              </a>
              <a href="">
                <img src="../img/amazing-segustion/box.png" alt="" />
              </a>
              <div className="seeAll">
                <a href="#">
                  <span className="amazingTxt">مشاهده ی همه</span>
                  <i className="fa fa-angle-left"></i>
                </a>
              </div>
            </div>
            <div className="left">
              <div className="swiper s1">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <a className="card" href="">
                      <div className="image">
                        <img
                          src="../img/amazing-segustion/amazing1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="title">محصول شماره 1</div>
                      <div className="price">
                        <div className="oldPrice">
                          <del>23000</del>
                          <span>20%</span>
                        </div>
                      </div>
                      <div className="timer"></div>
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a className="card" href="">
                      <div className="image">
                        <img
                          src="../img/amazing-segustion/amazing2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="title">محصول شماره 1</div>
                      <div className="price">
                        <div className="oldPrice">
                          <del>23000</del>
                          <span>20%</span>
                        </div>
                      </div>
                      <div className="timer"></div>
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a className="card" href="">
                      <div className="image">
                        <img
                          src="../img/amazing-segustion/amazing3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="title">محصول شماره 1</div>
                      <div className="price">
                        <div className="oldPrice">
                          <del>23000</del>
                          <span>20%</span>
                        </div>
                      </div>
                      <div className="timer"></div>
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a className="card" href="">
                      <div className="image">
                        <img
                          src="../img/amazing-segustion/amazing4.jpg"
                          alt=""
                        />
                      </div>
                      <div className="title">محصول شماره 1</div>
                      <div className="price">
                        <div className="oldPrice">
                          <del>23000</del>
                          <span>20%</span>
                        </div>
                      </div>
                      <div className="timer"></div>
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a className="card" href="">
                      <div className="image">
                        <img
                          src="../img/amazing-segustion/amazing5.jpg"
                          alt=""
                        />
                      </div>
                      <div className="title">محصول شماره 1</div>
                      <div className="price">
                        <div className="oldPrice">
                          <del>23000</del>
                          <span>20%</span>
                        </div>
                      </div>
                      <div className="timer"></div>
                    </a>
                  </div>
                </div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
};

export default Home;
