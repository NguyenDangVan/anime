import React from "react";
import "../../assets/footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <nav>
        <div className="left_nav">
          <div className="home_footer">
            <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
              alt="The Movie Database (TMDb)"
            >
            </img>
            <a className="footer_signup">Join our Community</a>
          </div>

          <div>
            <h3>The Basics</h3>
            <ul>
              <li>About Animee</li>
              <li>Contact Us</li>
              <li>Support</li>
            </ul>
          </div>

          <div>
            <h3>Legal</h3>
            <ul>
              <li>ATerms of Use</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h3>Contact</h3>
            <ul>
              <li>FB: ...</li>
              <li>Instagram: ...</li>
              <li>Twitter: ...</li>
              <li>Linkedin: ...</li>
            </ul>
          </div>
        </div>

        <div className="right_nav">
          <ul></ul>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
