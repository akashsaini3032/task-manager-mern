
// const Footer=()=>{
//     return(
//         <>
//          <div id="footer">

//          </div>
//         </>
//     )
// }
// export default Footer;


import React from "react";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="footer-container">

          <div className="footer-about">
            <h2>About This App</h2>
            <p>This Task Management App is made by Akash Saini.</p>
          </div>

          <div className="footer-quicklinks">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#tasks">Tasks</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h2>Newsletter</h2>
            <p>Subscribe to get latest updates</p>
            <form onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>

          <div className="footer-social">
            <h2>Follow Us</h2>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
        </div>

        <div className="footer-bottom">
          <p>© 2025 Akash Saini. All rights reserved.</p>
          <button
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to Top"
          >
            ↑ Top
          </button>
        </div>
      </footer>
    </>
  );
};

export default Footer;




