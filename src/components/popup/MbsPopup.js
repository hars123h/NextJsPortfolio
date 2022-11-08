const MbsPopup = ({ open, close }) => {
    return (
      <div className={`dizme_tm_modalbox ${open ? "opened" : ""}`}>
        <div className="box_inner">
          <div className="close">
            <a  onClick={() => close()}>
              <i className="icon-cancel" />
            </a>
          </div>
          <div className="description_wrap">
            <div className="popup_details">
              <div className="top_image">
                <img src="img/thumbs/4-2.jpg" alt="image" />
                <div
                  className="main"
                  data-img-url="img/portfolio/portfolioDetail/mbs.jpg"
                  style={{ backgroundImage: 'url("img/portfolio/portfolioDetail/cantiLogo.png")', backgroundSize: 'contain' }}
                />
              </div>
              <div className="portfolio_main_title">
                <a href="https://www.mbsautoavenue.com/" target="_blank" rel="noopener noreferrer" ><h3>Mbs Auto Avenue</h3></a>
                <span>
                  <a href="#">Full Stack</a>
                </span>
                <div />
              </div>
              <div className="main_details">
                <div className="textbox">
                  <p>
                    I have taken the responsibility of frontend of this website which is build using ReactJs.
                  </p>
                  <p>
                    {`Some Highlights of Website are -`}
                  </p>
                 <div className="" style={{marginLeft: '2rem'}}>
                 <ol>
                    <li>Complete CRM</li>
                    <li>4 Authentication Views - Clients, Agents, Admins, SuperAdmin</li>
                    <li>Invoice Generation</li>
                    <li>Task Management</li>
                    <li>Other Managment</li>
                  </ol>
                 </div>
                </div>
                <div className="detailbox">
                  <ul>
  
                    <li>
                      <span className="first">Website Link</span>
                      <span>
                        <a href="https://www.mbsautoavenue.com/" target="_blank" rel="noopener noreferrer">Mbs Auto Avenue</a>
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
  export default MbsPopup;
  