import styled from "styled-components";

const Wrapper = styled.div.attrs({
  className: ""
})`
  background-color: #eee;

  .container {
    padding-top: 80px;
  }

  .heading {
    padding-bottom: 40px;
  }

  .social {
    &-item {
      width: 40px;
      height: 40px;
      line-height: 40px;
      background-color: var(--primary-color);
    }
  }
`;

function Footer() {
  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="col-lg">
            <h2 className="heading fw-bold text-uppercase">
              <a>
                academia
                <span className="text-primary-color fs-5 fw-semibold d-block lh-1">
                  online education & learning
                </span>
              </a>
            </h2>
            <p className="content mb-5">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
            <ul className="social d-flex">
              <li className="social-item d-flex justify-content-center rounded-circle me-3">
                <a>
                  <i className="bi bi-dribbble text-white"></i>
                </a>
              </li>
              <li className="social-item d-flex justify-content-center rounded-circle me-3">
                <a>
                  <i className="bi bi-twitter text-white"></i>
                </a>
              </li>
              <li className="social-item d-flex justify-content-center rounded-circle">
                <a>
                  <i className="bi bi-instagram text-white"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2">
            <h3 className="heading text-capitalize">explore</h3>
            <ul>
              <li className="mb-4">
                <a href="#" className="text-capitalize text-secondary-color">
                  <i class="bi bi-arrow-right-short text-primary-color me-1"></i>
                  About us
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-capitalize text-secondary-color">
                  <i class="bi bi-arrow-right-short text-primary-color me-1"></i>
                  Services
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-capitalize text-secondary-color">
                  <i class="bi bi-arrow-right-short text-primary-color me-1"></i>
                  Courses
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-capitalize text-secondary-color">
                  <i class="bi bi-arrow-right-short text-primary-color me-1"></i>
                  Blog
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-capitalize text-secondary-color">
                  <i class="bi bi-arrow-right-short text-primary-color me-1"></i>
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2">
            <h3 className="heading text-capitalize">quick links</h3>
            <ul>
              <li className="mb-4">
                <a href="#" className="text-capitalize text-secondary-color">
                  <i class="bi bi-arrow-right-short text-primary-color me-1"></i>
                  contact us
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-capitalize text-secondary-color">
                  <i class="bi bi-arrow-right-short text-primary-color me-1"></i>
                  pricing
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-capitalize text-secondary-color">
                  <i class="bi bi-arrow-right-short text-primary-color me-1"></i>
                  terms & conditions
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-capitalize text-secondary-color">
                  <i class="bi bi-arrow-right-short text-primary-color me-1"></i>
                  privacy
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-capitalize text-secondary-color">
                  <i class="bi bi-arrow-right-short text-primary-color me-1"></i>
                  feedbacks
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg">
            <h3 className="heading text-capitalize">recent posts</h3>
            <div className="d-flex mb-5">
              <img
                width={50}
                height={50}
                className="rounded-3"
                alt="blog-img"
                src="https://preview.colorlib.com/theme/academia/images/ximage_1.jpg.pagespeed.ic.7R2Zr2FA0t.webp"
              />
              <div className="ms-4">
                <div className="text-primary-color fs-5">
                  <span className="me-2">
                    <i className="bi bi-calendar me-2"></i>
                    Jan. 18, 2021
                  </span>
                  <span>
                    <i className="bi bi-person-fill  me-1"></i>
                    Admin
                  </span>
                </div>
                <div className="text-secondary-color mt-2">
                  Creativity and Inspiration
                </div>
              </div>
            </div>
            <div className="d-flex mb-5">
              <img
                width={50}
                height={50}
                className="rounded-3"
                alt="blog-img"
                src="https://preview.colorlib.com/theme/academia/images/ximage_1.jpg.pagespeed.ic.7R2Zr2FA0t.webp"
              />
              <div className="ms-4">
                <div className="text-primary-color fs-5">
                  <span className="me-2">
                    <i className="bi bi-calendar me-2"></i>
                    Jan. 18, 2021
                  </span>
                  <span>
                    <i className="bi bi-person-fill  me-1"></i>
                    Admin
                  </span>
                </div>
                <div className="text-secondary-color mt-2">
                  Creativity and Inspiration
                </div>
              </div>
            </div>
            <div className="d-flex mb-5">
              <img
                width={50}
                height={50}
                className="rounded-3"
                alt="blog-img"
                src="https://preview.colorlib.com/theme/academia/images/ximage_1.jpg.pagespeed.ic.7R2Zr2FA0t.webp"
              />
              <div className="ms-4">
                <div className="text-primary-color fs-5">
                  <span className="me-2">
                    <i className="bi bi-calendar me-2"></i>
                    Jan. 18, 2021
                  </span>
                  <span>
                    <i className="bi bi-person-fill  me-1"></i>
                    Admin
                  </span>
                </div>
                <div className="text-secondary-color mt-2">
                  Creativity and Inspiration
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg">
            <h3 className="heading text-capitalize">have a questions?</h3>
            <ul>
              <li className="d-flex mb-4" style={{ fontSize: "1.5rem" }}>
                <i class="bi bi-map-fill text-primary-color me-5"></i>
                <span>
                  203 Fake St. Mountain View, San Francisco, California, USA
                </span>
              </li>
              <li className="d-flex mb-4" style={{ fontSize: "1.4rem" }}>
                <i class="bi bi-telephone-fill text-primary-color me-5"></i>
                <span>+2 392 3929 210</span>
              </li>
              <li className="d-flex mb-4" style={{ fontSize: "1.4rem" }}>
                <i class="bi bi-send-fill text-primary-color me-5"></i>
                <span>info@yourdomain.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid p-0">
        <div
          className="row d-inline-block w-100 m-0 p-0"
          style={{ backgroundColor: "#e9e9e9" }}
        >
          <p
            style={{ fontSize: "1.4rem", padding: "48px 0" }}
            className="m-0 text-center"
          >
            Copyright ©2022 All rights reserved | This template is made with{" "}
            <i className="bi bi-heart-fill"></i> by{" "}
            <span className="text-primary-color">YenPhuong</span>
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

export default Footer;
