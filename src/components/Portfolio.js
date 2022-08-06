import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import { dataImage, portfolioHover } from "../utilits";
import CantileverPopup from "./popup/CantileverPopup";
import DetailsPopup from "./popup/DetailsPopup";
import MbsPopup from "./popup/MbsPopup";
import SharvilPopup from "./popup/SharvilPopup";
import ShopifyPopup from "./popup/ShopifyPopup";

const Portfolio = () => {
  useEffect(() => {
    dataImage();
    portfolioHover();
  }, []);

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery_zoom", {
        itemSelector: ".grid-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 500);
    return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey == "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current" : "");

  // Popup
  const [popup, setPopup] = useState(false);
  const [cantiPopup, setCantiPopup] = useState(false);
  const [mbsPopup, setMbsPopup] = useState(false);
  const [sharvilPopup, setSharvilPopup] = useState(false);
  const [shopifyPopup, setShopifyPopup] = useState(false);





  return (
    <div className="dizme_tm_section" id="portfolio">
      <DetailsPopup open={popup} close={() => setPopup(false)} />
      <CantileverPopup open={cantiPopup} close={() => setCantiPopup(false)} />
      <MbsPopup open={mbsPopup} close={() => setMbsPopup(false)} />
      <SharvilPopup open={sharvilPopup} close={() => setSharvilPopup(false)} />
      <ShopifyPopup open={shopifyPopup} close={() => setShopifyPopup(false)} />


      <div className="dizme_tm_portfolio">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Portfolio</span>
            <h3>My Amazing Works</h3>
            <p>
              Most common methods for designing websites that work well on
              desktop is responsive and adaptive design
            </p>
          </div>
          <div className="portfolio_filter">
            <ul>
              <li>
                <a
                  className={`c-pointer ${activeBtn("*")}`}
                  onClick={handleFilterKeyChange("*")}
                >
                  All
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("fullstack")}`}
                  onClick={handleFilterKeyChange("fullstack")}
                >
                  Full Stack
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("frontend")}`}
                  onClick={handleFilterKeyChange("frontend")}
                >
                  frontend
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("template")}`}
                  onClick={handleFilterKeyChange("template")}
                >
                  Templates
                </a>
              </li>
              {/* <li>
                <a
                  className={`c-pointer ${activeBtn("popup")}`}
                  onClick={handleFilterKeyChange("popup")}
                >
                  Popup
                </a>
              </li> */}
              {/* <li>
                <a
                  className={`c-pointer  ${activeBtn("detail")}`}
                  onClick={handleFilterKeyChange("detail")}
                >
                  Detail
                </a>
              </li> */}
            </ul> 
          </div>
          <div className="dizme_tm_portfolio_titles" />
          <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
            <ul className="gallery_zoom grid">
              <li className="fullstack grid-item" onClick={() => setMbsPopup(true)}>
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Mbs"
                    data-category="fullstack"
                  > 
                    <a
                      className="popup-youtube"
                      href="#"
                    >
                      <img src="img/thumbs/42-56.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/mbs.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Mbs</h3>
                    <span>Full Stack</span>
                  </div>
                </div>
              </li>
              <li className="frontend grid-item" onClick={() => setSharvilPopup(true)}>
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Sharvil"
                    data-category="frontend"
                  >
                    <a
                      className="popup-vimeo"
                      href="#"
                    >
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/sharvil.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Sharvil</h3>
                    <span>Frontend</span>
                  </div>
                </div>
              </li>
              <li className="fullstack grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Internwell"
                    data-category="fullstack"
                  >
                    <a
                      className="soundcloude_link mfp-iframe audio"
                      href="#"
                    >
                      <img src="img/thumbs/42-56.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/internwell.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Internwell</h3>
                    <span>Full Stack</span>
                  </div>
                </div>
              </li>
              <li className="template grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="SLIET-Coe"
                    data-category="template"
                  >
                    <a className="zoom" href="https://hars123h.github.io/sliet-coe/index.html" >
                      <img src="img/thumbs/42-56.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/sliet.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>SLIET-Coe</h3>
                    <span>Template</span>
                  </div>
                </div>
              </li>
              <li className="frontend grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="e-posture"
                    data-category="frontend"
                  >
                    <a className="zoom" href="https://www.e-posture.jp/" >
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/eposture.png"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>e-posture</h3>
                    <span>frontend</span>
                  </div>
                </div>
              </li>
              <li className="template grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Blog"
                    data-category="template"
                  >
                    <a className="portfolio_popup" href="https://hars123h.github.io/Blog-template.github.io/" >
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/blog.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Blog</h3>
                    <span>Template</span>
                  </div>
                </div>
              </li>

               <li className="template grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Beauty Parlour"
                    data-category="template"
                  > 
                    <a
                      className="popup-youtube"
                      href="https://hars123h.github.io/beauty-parlour.github.io/"
                    >
                      <img src="img/thumbs/42-56.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/beauty.png"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Beauty Parlour</h3>
                    <span>template</span>
                  </div>
                </div>
              </li>
              <li className="frontend grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Movie Review"
                    data-category="frontend"
                  >
                    <a
                      className="popup-vimeo"
                      href="http://movies-reviewss.herokuapp.com/"
                    >
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/review.png"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Movie Review</h3>
                    <span>frontend</span>
                  </div>
                </div>
              </li>
              <li className="fullstack grid-item" onClick={() => setShopifyPopup(true)}>
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Ecommerse - Shopify"
                    data-category="fullstack"
                  >
                    <a
                      className="soundcloude_link mfp-iframe audio"
                      href="#"
                    >
                      <img src="img/thumbs/42-56.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/cloud.webp"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Ecommerse - Shopify</h3>
                    <span>Full Stack</span>
                  </div>
                </div>
              </li>
              <li className="frontend grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Portfolio"
                    data-category="frontend"
                  >
                    <a className="zoom" href="https://hars123h.github.io/tripathi-harsh.github.io/" >
                      <img src="img/thumbs/42-56.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/blog.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Portfolio</h3>
                    <span>Frontend</span>
                  </div>
                </div>
              </li>
              <li className="template grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Restraunt"
                    data-category="template"
                  >
                    <a className="zoom" href="https://hars123h.github.io/restraunt.github.io/" >
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/straw.png"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Restraunt</h3>
                    <span>Template</span>
                  </div>
                </div>
              </li>
              <li className="fullstack grid-item" onClick={() => setCantiPopup(true)}>
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Cantilever Labs"
                    data-category="fullstack"
                  >
                    <a className="portfolio_popup" href="#">
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/cant.jfif"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Cantilever Labs</h3>
                    <span>Full Stack</span>
                  </div>
                </div>
              </li> 
            </ul>
          </div>
        </div>
        <div className="brush_1 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/portfolio/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/portfolio/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
