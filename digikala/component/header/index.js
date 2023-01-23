const Header = () => {
  return (
    <>
      <header>
        <div className="header">
          <div className="headerRight">
            <a href="" className="logo"></a>
            <i className="far fa-search"></i>
            <input type="text" className="searchBox" placeholder="جستجو" />
          </div>

          <div className="headerLeft">
            <a href="">
              <i className="far fa-user"></i>
              ورود به حساب کاربری
            </a>
            <a href="">
              <i className="far fa-shopping-cart"></i>
            </a>
          </div>
        </div>
        <nav>
          <div className="container">
            <ul className="flex">
              <li>
                <ul className="flex">
                  <li>
                    <i className="fa fa-bars"></i>
                    <div className="nav">
                      <div id="nav-item" className="nav-item" href="">
                        دسته بندی کالاها
                        <div id="menu-container" className="menu-container">
                          <ul id="menu" className="menu">
                            <li className="titleMenu">
                              <a href="">موبایل </a>
                              <ul className="subMenu">
                                <li>
                                  <a href="">گوشی اپل</a>
                                </li>
                                <li>
                                  <a href="">گوشی سامسونگ</a>
                                </li>
                                <li>
                                  <a href="">گوشی شیائومی</a>
                                </li>
                                <li>
                                  <a href="">گوشی نوکیا</a>
                                </li>
                              </ul>
                            </li>
                            <li className="titleMenu">
                              <a href="">کالای دیجیتال</a>
                              <ul className="subMenu">
                                <li>
                                  <a href="">لوازم جانبی گوشی</a>
                                </li>
                                <li>
                                  <a href="">لوازم جانبی دوربین</a>
                                </li>
                                <li>
                                  <a href="">هدفون، هدست</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="">خودرو و تجهیزات صنعتی</a>
                            </li>
                            <li>
                              <a href="">مد و پوشاک </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* <!-- <div className="nav-item" href="">Nav item 2</div>
                                    <button onmouseover=""></button> --> */}
                    </div>
                  </li>
                  <li>
                    <a href="search.html">سوپرمارکت</a>
                  </li>
                  <li>
                    <a href="">تخفیف ها و پیشنهاد ها</a>
                  </li>
                  <li>
                    <a href="">دیجی کالای من</a>
                  </li>
                  <li>
                    <a href="">دیجی پلاس</a>
                  </li>
                  <li>
                    <a href="">دیجی کتاب</a>
                  </li>
                  <li>
                    <a href="">سوالی دارید؟</a>
                  </li>
                </ul>
              </li>
              <li className="chooseCity">
                <span>لطفا شهر و استان خود را انتخاب کنید</span>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
