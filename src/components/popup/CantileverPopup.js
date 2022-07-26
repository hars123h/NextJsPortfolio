const CantileverPopup = ({ open, close }) => {
  return (
    <div className={`dizme_tm_modalbox ${open ? "opened" : ""}`}>
      <div className="box_inner">
        <div className="close">
          <a href="#" onClick={() => close()}>
            <i className="icon-cancel" />
          </a>
        </div>
        <div className="description_wrap">
          <div className="popup_details">
            <div className="top_image">
              <img src="img/thumbs/4-2.jpg" alt="image" />
              <div
                className="main"
                data-img-url="img/portfolio/portfolioDetail/cantiLogo.png"
                style={{ backgroundImage: 'url("img/portfolio/portfolioDetail/cantiLogo.png")', backgroundSize: 'contain' }}
              />
            </div>
            <div className="portfolio_main_title">
              <a href="https://www.cantileverlabs.com/" target="_blank" rel="noopener noreferrer"><h3>Cantilever Labs</h3></a>
              <span>
                <a href="#">Full Stack</a>
              </span>
              <div />
            </div>
            <div className="main_details">
              <div className="textbox">
                <p>
                  I have worked as a intern for a 6 month on a Cantileverlabs.My responsibility is to maintain and create
                  apis and then integrating it on Frontend
                </p>
                <p>
                  {`Some Highlights of Website are -`}
                </p>
               <div className="" style={{marginLeft: '2rem'}}>
               <ol>
                  <li>Website is build using MERN STACK</li>
                  <li>Redux is used</li>
                  <li>MongoDB as a Database</li>
                  <li>NodeJs and ExpressJs as a backend Framework</li>
                  <li>Authentication and Authorization using JWT</li>
                  <li>Admin Panel as well as Student Panel</li>


                </ol>
               </div>
              </div>
              <div className="detailbox">
                <ul>

                  <li>
                    <span className="first">Website Link</span>
                    <span>
                      <a href="https://www.cantileverlabs.com/" target="_blank" rel="noopener noreferrer">Cantilever Labs</a>
                    </span>
                  </li>
                  <li>
                    <span className="first">Stack</span>
                    <span>MERN STACK</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
export default CantileverPopup;
