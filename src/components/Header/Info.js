import styled from "styled-components";

const Wrapper = styled.div.attrs({
  className: "container"
})`
  color: #fff;
  padding: 19px 0;

  .logo {
    font-size: 3rem;
    cursor: pointer;
    letter-spacing: 0.1px;

    &:hover {
      color: var(--primary-color);
    }
  }

  .sub-logo {
    font-size: 1.2rem;
    cursor: pointer;
    letter-spacing: 0.1px;
  }

  .icon {
    font-size: 38px;
    padding-right: 10px;
  }

  .social-item {
    background-color: rgba(255, 255, 255, 0.2);
    height: 40px;
    width: 40px;
    line-height: 40px;
    margin-left: 4px;

    i {
      color: var(--primary-color);
    }

    &:hover {
      background-color: var(--primary-color);
      cursor: pointer;

      i {
        color: #fff;
      }
    }
  }
`;

function Info() {
  return (
    <Wrapper>
      <div className="row">
        <div className="col-md col-xl-5 d-flex text-uppercase">
          <div className="d-flex flex-column">
            <div className="logo fw-bold">Academia</div>
            <div className="sub-logo fw-semibold">
              Online euducation & learning
            </div>
          </div>
        </div>
        <div className="col-md d-flex align-items-center">
          <i className="icon bi bi-clock"></i>
          <div className="d-flex flex-column">
            <span>Monday - Friday</span>
            <span className="fw-bold">8:00AM-8:00PM</span>
          </div>
        </div>
        <div className="col-md d-flex align-items-center">
          <i className="icon bi bi-telephone"></i>
          <div className="d-flex flex-column">
            <span>Call Us</span>
            <span className="fw-bold">+2 392 3929 210</span>
          </div>
        </div>
        <div className="col-md d-flex align-items-center justify-content-end">
          <ul className="d-flex">
            <li className="social-item d-flex justify-content-center rounded-circle">
              <a href="/">
                <i className="bi bi-facebook"></i>
              </a>
            </li>
            <li className="social-item d-flex justify-content-center rounded-circle">
              <a href="/">
                <i className="bi bi-twitter"></i>
              </a>
            </li>
            <li className="social-item d-flex justify-content-center rounded-circle">
              <a href="/">
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li className="social-item d-flex justify-content-center rounded-circle">
              <a href="/">
                <i className="bi bi-dribbble"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
}

export default Info;
