import styled from "styled-components";

const Wrapper = styled.div.attrs({
  className: "position-relative vh-100 d-flex flex-column justify-content-center"
})`
  min-height: 750px;
  color: #fff;

  background: url("https://preview.colorlib.com/theme/academia/images/xbg_1.jpg.pagespeed.ic.Qvddt6BzWR.webp")
    no-repeat;
  background-size: cover;
  background-position: fixed;
  
  .sub-heading {
    color: rgba(255,255,255,0.7);
    font-size: 1.4rem;
    letter-spacing: 1.5px;
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
  return (
    <Wrapper>
      <div className="container">
        <div className="row mt-5">
          <div className="col-5">
            <div className="d-flex flex-column my-5">
              <span className="sub-heading text-uppercase fw-bold mt-5 pt-5">Welcome to academia</span>
              <h1 className="heading fw-bold">Best Online Education Expertise</h1>
            </div>
            <p className="content mb-5">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div>
              <a className="btn btn-primary p-4 px-5 me-2">
                Get started now!
                <i class="bi bi-arrow-right ps-4"></i>
              </a>
              <a className="btn btn-light p-4 px-5">
                View course
                <i class="bi bi-arrow-right ps-4"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Intro;
