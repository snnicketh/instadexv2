import { scrollToTop } from "@/lib/helpers";
import Link from "next/link";
import React from "react";

const FooterOne = () => {
  return (
    <footer>
      <div className="footer-area">
        <div className="container">
          <div className="footer-scroll-wrap">
            <button
              className="scroll-to-target"
              data-target="html"
              onClick={scrollToTop}
            >
              <i className="fas fa-arrow-up"></i>
            </button>
          </div>
          <div className="footer-top">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="footer-widget wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <Link href="/" className="f-logo">
                    <img src={"/img/logo/logo_idex.png"} alt="InstaDEX Logo" />
                  </Link>
                  <div className="footer-content">
                    <p>
                    Makes DEX Trading Simple, Accessible, And Affordable On Ethereum L1 And L2’S.
                    </p>
                    <ul className="footer-social">
                    <li>
                        <a href="https://twitter.com/InstadexFi">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/company/instadexfi">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://t.me/instadexfi">
                          <i className="fab fa-telegram-plane"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/InstaDEXFi">
                          <i className="fab fa-github"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-5 col-sm-6">
                <div
                  className="footer-widget  wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <h4 className="fw-title">Useful Links</h4>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link href="#sales">Token</Link>
                      </li>
                      <li>
                        <Link href="#roadmap">Build Plan</Link>
                      </li>
                      <li>
                        <Link href="#about">About</Link>
                      </li>
                      <li>
                        <Link href="#faq">FAQ</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-sm-6">
                <div
                  className="footer-widget wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <h4 className="fw-title">Community</h4>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link href="https://github.com/InstaDEXFi">Github</Link>
                      </li>
                      <li>
                        <Link href="https://docs.instadex.finance/">Docs</Link>
                      </li>
                      <li>
                        <Link href="#">Blog</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div
                  className="footer-widget wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <h4 className="fw-title">Subscribe Newsletter</h4>
                  <div className="footer-newsletter">
                    <form action="mailto:contaxt@instadex.finance">
                      <input
                        type="email"
                        placeholder="contact@instadex.finance"
                        required
                      />
                      <button type="submit">
                        <i className="fas fa-paper-plane"></i>
                      </button>                    
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="copyright-text">
                  <p>Copyright &copy; 2023. All Rights Reserved InstaDEX.finance</p>
                </div>
              </div>
              <div className="col-lg-6 d-none d-sm-block">
                <div className="footer-menu">
                  <ul>
                    <li>
                      < a href="terms-of-use">Terms and conditions</a>
                    </li>
                    <li>
                      <Link href="pravacy-policy">Privacy policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
