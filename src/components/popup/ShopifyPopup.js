const ShopifyPopup = ({ open, close }) => {
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
                                data-img-url="img/portfolio/cloud.webp"
                                style={{ backgroundImage: 'url("img/portfolio/portfolioDetail/sharvil.png")', backgroundSize: 'contain' }}
                            />
                        </div>
                        <div className="portfolio_main_title">
                            <a href="https://cloud-jp.net/" target="_blank" ><h3>Cloud</h3></a>
                            <a href="https://shop.cloud-jp.net/" target="_blank" ><h3>Cloud Shop</h3></a>
                            <span>
                                <a href="#">Shopify</a>
                            </span>
                            <div />
                        </div>
                        <div className="main_details">
                            <div className="textbox">
                                <p>
                                   There are two websites which is build using Shopify. 
                                   
                                </p>
                                <p>
                                    {`My Responsibility is  -`}
                                </p>
                                <div className="" style={{ marginLeft: '2rem' }}>
                                    <ol>
                                        <li>Maintain  the website</li>
                                        <li>Optimize the speed</li>
                                        <li>Optimize the loading time etc.</li>

                                    </ol>
                                </div>
                            </div>
                            <div className="detailbox">
                                <ul>

                                    <li>
                                        <span className="first">Website Link 1</span>
                                        <span>
                                            <a href="https://cloud-jp.net/" target="_blank">Cloud</a>
                                        </span>
                                    </li>

                                    <li>
                                        <span className="first">Website Link 2</span>
                                        <span>
                                            <a href="https://shop.cloud-jp.net/" target="_blank">Cloud Shop</a>
                                        </span>
                                    </li>

                                    <li>
                                        <span className="first">Stack</span>
                                        <span>Shopify</span>
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
export default ShopifyPopup;
