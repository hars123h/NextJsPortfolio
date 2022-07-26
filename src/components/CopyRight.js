const CopyRight = ({ brandName }) => {
  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_copyright">
        <div className="container">
          <div className="inner">
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              <p>
                Developed by{" "}
                <a
                  href="https://themeforest.net/user/codeefly"
                  target="_blank"
                  rel="noreferrer"
                >
                  Harsh Tripathi
                </a>{" "}
                © {new Date().getFullYear()}
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default CopyRight;
