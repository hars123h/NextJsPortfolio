const SharvilPopup = ({ open, close }) => {
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
                  data-img-url="img/portfolio/portfolioDetail/sharvil.png"
                  style={{ backgroundImage: 'url("img/portfolio/portfolioDetail/sharvil.png")', backgroundSize: 'contain' }}
                />
              </div>
              <div className="portfolio_main_title">
                <a href="https://sharvil-jp.com/" target="_blank" rel="noopener noreferrer"><h3>Sharvil Business Group</h3></a>
                <span>
                  <a href="#">Frontend</a>
                </span>
                <div />
              </div>
              <div className="main_details">
                <div className="textbox">
                  <p>
                    I have made this amazing website for Sharvil Group. The website is Done using Frontend Framework React Js 
                    I have used mindblowing animation to make website pretty in look.
                  </p>
                  <p>
                    {`Some Highlights of Website are -`}
                  </p>
                 <div className="" style={{marginLeft: '2rem'}}>
                 <ol>
                    <li>Website is created using ReactJs</li>
                    <li>Animation</li>
                    <li>Website is on two language</li>
                    
                  </ol>
                 </div>
                </div>
                <div className="detailbox">
                  <ul>
  
                    <li>
                      <span className="first">Website Link</span>
                      <span>
                        <a href="https://sharvil-jp.com/" target="_blank" rel="noopener noreferrer">Sharvil Business Group</a>
                      </span>
                    </li>
                    <li>
                      <span className="first">Stack</span>
                      <span>ReactJs</span>
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
  export default SharvilPopup;
  