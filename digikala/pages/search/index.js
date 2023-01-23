import Header from "../../component/header/index";
import Footer from "../../component/footer/index";

const Search = () => {
  return (
    <div className="searchPage">
      <Header />
      <main>
        <div className="container" id="search">
          <article className="flex">
            <div className="right"></div>
            <div className="left">
              <div className="navBar flex">
                <nav>
                  <ul className="flex">
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
              <div className="searchHeader">
                <ul className="flex">
                  <li>پر بازدیدترین ها</li>
                  <li>پرفروش ترین ها</li>
                  <li>محبوب ترین</li>
                  <li>جدیدترین</li>
                  <li>ارزان ترین ها</li>
                  <li>گران ترین</li>
                </ul>
              </div>
              <div className="productList">
                <ul className="flex">
                  <li className="productItem">
                    <div className="productImage">
                      <div className="productColor">
                        {/* <span style="background:red;"></span>
                        <span style="background:black;"></span>
                        <span style="background:green;"></span> */}
                      </div>
                      <img src="../img/searchPage/img300/phone3.jpg" alt="" />
                    </div>
                    <a className="productName">
                      گوشی موبایل شیائومی مدل Redmi Note 11 pro 4G دو سیم‌ کارت
                      ظرفیت 128 گیگابایت و رم 8 گیگابایت
                    </a>
                    <div className="rate flex">
                      موجود در انبار
                      <span className="star">4.4 (3019)</span>
                    </div>
                    <div className="productPrice">
                      <div className="priceOffer flex">
                        <del>129800</del>
                        <span>10%</span>
                      </div>
                      <div className="newPrice">
                        114000
                        <span>تومان</span>
                      </div>
                    </div>
                  </li>
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
