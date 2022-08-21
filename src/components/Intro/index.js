import styled from "styled-components";
import { RESPONSIVE } from "../../constants";
import { useViewport } from "../../services/hooks";

const Wrapper = styled.div.attrs({
  className: "position-relative vh-100 d-flex align-items-center"
})`
  min-height: 750px;
  color: #fff;

  background: url("https://preview.colorlib.com/theme/academia/images/xbg_1.jpg.pagespeed.ic.Qvddt6BzWR.webp")
    no-repeat top center;
  background-size: cover;
  background-attachment: fixed;
  
  .sub-heading {
    color: rgba(255,255,255,0.7);
    font-size: 1.4rem;
    letter-spacing: 1.5px;
    padding-top: 96px;
  }
  
  .heading {
    font-size: 4rem;
  }
  
  .content {
    color: rgba(255,255,255,0.8);
    line-height: 3rem;
  }
`;

function Intro() {
  const viewport = useViewport()
  const isMobile = viewport.width <= RESPONSIVE.mobile;
  return (
    <Wrapper>
      <div className="container">
        <div className="row mt-5">
          <div className="col-xl-6 col-lg">
            <div className="d-flex flex-column">
              <span className="sub-heading text-uppercase fw-bold">Welcome to academia</span>
              <h1 className="heading fw-bold mb-0">Best Online Education Expertise</h1>
            </div>
            <p className="content mb-5">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <p className="">
              <a className={`${isMobile ? "d-block mb-2" : "me-2"} btn btn-primary p-4 px-5`}>
                Get started now!
                <i class="bi bi-arrow-right ps-4"></i>
              </a>
              <a className={`${isMobile ? "d-block" : ""} btn btn-light p-4 px-5 border-0`}>
                View course
                <i class="bi bi-arrow-right ps-4"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Intro;
