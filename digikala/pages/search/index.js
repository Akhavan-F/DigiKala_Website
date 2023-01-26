import Header from "../../component/header/index";
import Footer from "../../component/footer/index";
import { useEffect } from "react";
import $ from "jquery";
const Search = () => {
  const list = [
    {
      img: "img/searchPage/img300/phone3.jpg",
      a: " گوشی موبایل شیائومی مدل Redmi Note 11 pro 4G دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 8 گیگابایت",
      MOjodi: "موجود در انبار",
      rate: "4.4 (3019)",
      del: "129800",
      bargane: "10%",
      price: "120000",
    },
    {
      img: "img/searchPage/img300/phone3.jpg",
      a: " گوشی موبایل شیائومی مدل Redmi Note 11 pro 4G دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 8 گیگابایت",
      MOjodi: "موجود در انبار",
      rate: "4.4 (3019)",
      del: "129800",
      bargane: "10%",
      price: "120000",
    },
    {
      img: "img/searchPage/img300/phone3.jpg",
      a: " گوشی موبایل شیائومی مدل Redmi Note 11 pro 4G دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 8 گیگابایت",
      MOjodi: "موجود در انبار",
      rate: "4.4 (3019)",
      del: "129800",
      bargane: "10%",
      price: "120000",
    },
    {
      img: "img/searchPage/img300/phone3.jpg",
      a: " گوشی موبایل شیائومی مدل Redmi Note 11 pro 4G دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 8 گیگابایت",
      MOjodi: "موجود در انبار",
      rate: "4.4 (3019)",
      del: "129800",
      bargane: "10%",
      price: "120000",
    },
    {
      img: "img/searchPage/img300/phone3.jpg",
      a: " گوشی موبایل شیائومی مدل Redmi Note 11 pro 4G دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 8 گیگابایت",
      MOjodi: "موجود در انبار",
      rate: "4.4 (3019)",
      del: "129800",
      bargane: "10%",
      price: "120000",
    },
    {
      img: "img/searchPage/img300/phone3.jpg",
      a: " گوشی موبایل شیائومی مدل Redmi Note 11 pro 4G دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 8 گیگابایت",
      MOjodi: "موجود در انبار",
      rate: "4.4 (3019)",
      del: "129800",
      bargane: "10%",
      price: "120000",
    },
    {
      img: "img/searchPage/img300/phone3.jpg",
      a: " گوشی موبایل شیائومی مدل Redmi Note 11 pro 4G دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 8 گیگابایت",
      MOjodi: "موجود در انبار",
      rate: "4.4 (3019)",
      del: "129800",
      bargane: "10%",
      price: "120000",
    },
    {
      img: "img/searchPage/img300/phone3.jpg",
      a: " گوشی موبایل شیائومی مدل Redmi Note 11 pro 4G دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 8 گیگابایت",
      MOjodi: "موجود در انبار",
      rate: "4.4 (3019)",
      del: "129800",
      bargane: "10%",
      price: "120000",
    },
    {
      img: "img/searchPage/img300/phone3.jpg",
      a: " گوشی موبایل شیائومی مدل Redmi Note 11 pro 4G دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 8 گیگابایت",
      MOjodi: "موجود در انبار",
      rate: "4.4 (3019)",
      del: "129800",
      bargane: "10%",
      price: "120000",
    },
    {
      img: "img/searchPage/img300/phone3.jpg",
      a: " گوشی موبایل شیائومی مدل Redmi Note 11 pro 4G دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 8 گیگابایت",
      MOjodi: "موجود در انبار",
      rate: "4.4 (3019)",
      del: "129800",
      bargane: "10%",
      price: "120000",
    },
  ];

  useEffect(() => {
    $(document).ready(function () {
      $(".selected").click(function () {
        $(this).parents(".dropdown").find("ul").toggleClass("active");
        //   $(".dropdown > ul").toggleClass("active");
        $(this).parents(".dropdown").toggleClass("rotate");
      });
      $(".dropdown > ul >.item > #inputBox").click(function () {
        $(".dropdown > ul").removeClass("active");
        var txt = $(this).text();
        //   $(".dropdown .selected").text(txt);
        $(this).parents(".dropdown").find(".selected").text(txt);
      });
      $("#inputBox").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".dropdown > ul> .item").filter(function () {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
      });
    });
  }, []);

  <script></script>;
  return (
    <div className="searchPage">
      <Header />
      <main>
        <div class="container" id="search">
          <article class="flex">
            <div class="sideba">
              <div class="right">
                <div class="dropdown">
                  <div class="selected">برند</div>
                  <ul class="selectOptions">
                    <li>
                      <input
                        type="text"
                        id="inputBox"
                        placeholder="جستجو ..."
                      />
                    </li>
                    <li class="item flex">
                      <div class="inputBox">
                        <input type="checkbox" id="samsung" />
                        <span></span>
                      </div>
                      <label for="samsung">سامسونگ</label>
                    </li>
                    <li class="item flex">
                      <div class="inputBox">
                        <input type="checkbox" id="huawei" />
                        <span></span>
                      </div>
                      <label for="huawei">هووآوی</label>
                    </li>
                    <li class="item flex">
                      <div class="inputBox">
                        <input type="checkbox" id="nokia" />
                        <span></span>
                      </div>
                      <label for="nokia">نوکیا</label>
                    </li>
                    <li class="item flex">
                      <div class="inputBox">
                        <input type="checkbox" id="shiaomi" />
                        <span></span>
                      </div>
                      <label for="shiaomi">شیائومی</label>
                    </li>
                  </ul>
                </div>
                <div class="dropdown">
                  <div class="selected">سیستم عامل</div>
                  <ul class="selectOptions">
                    <li>
                      <input
                        type="text"
                        id="inputBox"
                        placeholder="جستجو ..."
                      />
                    </li>
                    <li class="item flex">
                      <div class="inputBox">
                        <input type="checkbox" id="android" />
                        <span></span>
                      </div>
                      <label for="android">اندروید</label>
                    </li>
                    <li class="item flex">
                      <div class="inputBox">
                        <input type="checkbox" id="ios" />
                        <span></span>
                      </div>
                      <label for="ios">آی او اس</label>
                    </li>
                  </ul>
                </div>
                <div class="dropdown">
                  <div class="selected">حافظه داخلی</div>
                  <ul class="selectOptions">
                    <li>
                      <input
                        type="text"
                        id="inputBox"
                        placeholder="جستجو ..."
                      />
                    </li>
                    <li class="item flex">
                      <div class="inputBox">
                        <input type="checkbox" id="8gb" />
                        <span></span>
                      </div>
                      <label for="8gb"> 8 گیگابایت</label>
                    </li>
                    <li class="item flex">
                      <div class="inputBox">
                        <input type="checkbox" id="16gb" />
                        <span></span>
                      </div>
                      <label for="16gb">16 گیگابایت</label>
                    </li>
                    <li class="item flex">
                      <div class="inputBox">
                        <input type="checkbox" id="32gb" />
                        <span></span>
                      </div>
                      <label for="32gb">32 گیگابایت</label>
                    </li>
                    <li class="item flex">
                      <div class="inputBox">
                        <input type="checkbox" id="64gb" />
                        <span></span>
                      </div>
                      <label for="64gb">64 گیگابایت</label>
                    </li>
                  </ul>
                </div>
                <div class="dropdown">
                  <div class="selected">شبکه های ارتباطی</div>
                  <ul class="selectOptions">
                    <li>
                      <input
                        type="text"
                        id="inputBox"
                        placeholder="جستجو ..."
                      />
                    </li>
                    <li class="item flex">
                      <div class="inputBox">
                        <input type="checkbox" id="8gb" />
                        <span></span>
                      </div>
                      <label for="8gb"> 8 گیگابایت</label>
                    </li>
                    <li class="item flex">
                      <div class="inputBox">
                        <input type="checkbox" id="16gb" />
                        <span></span>
                      </div>
                      <label for="16gb">16 گیگابایت</label>
                    </li>
                    <li class="item flex">
                      <div class="inputBox">
                        <input type="checkbox" id="32gb" />
                        <span></span>
                      </div>
                      <label for="32gb">32 گیگابایت</label>
                    </li>
                    <li class="item flex">
                      <div class="inputBox">
                        <input type="checkbox" id="64gb" />
                        <span></span>
                      </div>
                      <label for="64gb">64 گیگابایت</label>
                    </li>
                  </ul>
                </div>
                <div class="flex animatedCheckBox">
                  <input type="checkbox" id="delivery" />
                  <label for="delivery">فقط ارسال فوری</label>
                </div>
                <div class="flex animatedCheckBox">
                  <input type="checkbox" id="existGoods" />
                  <label for="existGoods">فقط کالاهای موجود</label>
                </div>
                <div class="flex animatedCheckBox">
                  <input type="checkbox" id="sendBySeller" />
                  <label for="sendBySeller">امکان ارسال توسط فروشنده</label>
                </div>
                <div class="dropdown">
                  <div class="selected">محدوده قیمت مورد نظر</div>
                  <ul class="selectOptions">
                    <li>
                      <p>
                        {/* <!-- <label for="amount">Price range:</label> --> */}
                        <input
                          class="rangePrice"
                          type="text"
                          id="amount"
                          readonly
                          // style="border: 0; color: #f6931f; font-weight: bold"
                        />
                      </p>

                      <div id="slider-range" onClick={() => testNew()}></div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="left">
              <div class="navBar flex">
                <nav>
                  <ul class="flex">
                    <li>
                      <a href="">دیجی کالا</a>
                    </li>
                    <li>
                      <a href="">کالای دیجیتال</a>
                    </li>
                    <li>
                      <a href="">موبایل</a>
                    </li>
                    <li>
                      <a href="">گوشی موبایل</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="searchHeader">
                <ul class="flex">
                  <li>پر بازدیدترین ها</li>
                  <li>پرفروش ترین ها</li>
                  <li>محبوب ترین</li>
                  <li>جدیدترین</li>
                  <li>ارزان ترین ها</li>
                  <li>گران ترین</li>
                </ul>
              </div>
              <div class="productList">
                <ul class="flex">
                  {list.map((item) => {
                    return (
                      <>
                        <li class="productItem">
                          <div class="productImage">
                            <div class="productColor">
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                            <img src={item.img} alt="" />
                          </div>
                          <a class="productName">{item.a}</a>
                          <div class="rate flex">
                            {item.MOjodi}
                            <span class="star"> {item.rate} </span>
                          </div>
                          <div class="productPrice">
                            <div class="priceOffer flex">
                              <del> {item.del} </del>
                              <span> {item.bargane} </span>
                            </div>
                            <div class="newPrice">
                              {item.price}
                              <span> تومان </span>
                            </div>
                          </div>
                        </li>
                      </>
                    );
                  })}
                  {/* <li class="productItem">
                    <div class="productImage">
                      <div class="productColor">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <img src="img/searchPage/img300/phone3.jpg" alt="" />
                    </div>
                    <a class="productName">
                      گوشی موبایل شیائومی مدل Redmi Note 11 pro 4G دو سیم‌ کارت
                      ظرفیت 128 گیگابایت و رم 8 گیگابایت
                    </a>
                    <div class="rate flex">
                      موجود در انبار
                      <span class="star"> 4.4 (3019) </span>
                    </div>
                    <div class="productPrice">
                      <div class="priceOffer flex">
                        <del> 129800 </del>
                        <span> 10% </span>
                      </div>
                      <div class="newPrice">
                        114000
                        <span> تومان </span>
                      </div>
                    </div>
                  </li>
                  <li class="productItem">
                    <div class="productImage">
                      <div class="productColor">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <img src="img/searchPage/img300/phone3.jpg" alt="" />
                    </div>
                    <a class="productName">
                      گوشی موبایل شیائومی مدل Redmi Note 11 pro 4G دو سیم‌ کارت
                      ظرفیت 128 گیگابایت و رم 8 گیگابایت
                    </a>
                    <div class="rate flex">
                      موجود در انبار
                      <span class="star"> 4.4 (3019) </span>
                    </div>
                    <div class="productPrice">
                      <div class="priceOffer flex">
                        <del> 129800 </del>
                        <span> 10% </span>
                      </div>
                      <div class="newPrice">
                        114000
                        <span> تومان </span>
                      </div>
                    </div>
                  </li>
                  <li class="productItem">
                    <div class="productImage">
                    <div class="productColor">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <img src="img/searchPage/img300/phone3.jpg" alt="" />
                    </div>
                    <a class="productName">
                      گوشی موبایل شیائومی مدل Redmi Note 11 pro 4G دو سیم‌ کارت
                      ظرفیت 128 گیگابایت و رم 8 گیگابایت
                    </a>
                    <div class="rate flex">
                      موجود در انبار
                      <span class="star"> 4.4 (3019) </span>
                    </div>
                    <div class="productPrice">
                      <div class="priceOffer flex">
                        <del> 129800 </del>
                        <span> 10% </span>
                      </div>
                      <div class="newPrice">
                        114000
                        <span> تومان </span>
                      </div>
                    </div>
                  </li>
                  <li class="productItem">
                    <div class="productImage">
                    <div class="productColor">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <img src="img/searchPage/img300/phone3.jpg" alt="" />
                    </div>
                    <a class="productName">
                      گوشی موبایل شیائومی مدل Redmi Note 11 pro 4G دو سیم‌ کارت
                      ظرفیت 128 گیگابایت و رم 8 گیگابایت
                    </a>
                    <div class="rate flex">
                      موجود در انبار
                      <span class="star"> 4.4 (3019) </span>
                    </div>
                    <div class="productPrice">
                      <div class="priceOffer flex">
                        <del> 129800 </del>
                        <span> 10% </span>
                      </div>
                      <div class="newPrice">
                        114000
                        <span> تومان </span>
                      </div>
                    </div>
                  </li>
                  <li class="productItem">
                    <div class="productImage">
                      <div class="productColor">
                        <span style="background: red"></span>
                        <span style="background: black"></span>
                        <span style="background: green"></span>
                      </div>
                      <img src="img/searchPage/img300/phone3.jpg" alt="" />
                    </div>
                    <a class="productName">
                      گوشی موبایل شیائومی مدل Redmi Note 11 pro 4G دو سیم‌ کارت
                      ظرفیت 128 گیگابایت و رم 8 گیگابایت
                    </a>
                    <div class="rate flex">
                      موجود در انبار
                      <span class="star"> 4.4 (3019) </span>
                    </div>
                    <div class="productPrice">
                      <div class="priceOffer flex">
                        <del> 129800 </del>
                        <span> 10% </span>
                      </div>
                      <div class="newPrice">
                        114000
                        <span> تومان </span>
                      </div>
                    </div>
                  </li> */}
                </ul>
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
