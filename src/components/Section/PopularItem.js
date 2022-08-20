import styled from "styled-components";

const Wrapper = styled.div.attrs({
  className: "col-xl-4 col-md-6"
})`
  .course__icon {
    font-size: 40px;
    background-color: var(--primary-color);
    height: 80px;
    width: 80px;
    color: #fff;
  }
`;

function PopularItem(props) {
  const {
    nameCourse,
    instructorName,
    instructorAvatar,
    duration,
    price
  } = props;
  return (
    <Wrapper>
      <div
        className="bg-white h-100 d-flex flex-column justify-content-between"
        style={{ padding: "40px 30px" }}
      >
        <div className="d-flex mb-5">
          <div>
            <i className="bi bi-box-seam course__icon rounded-circle d-flex align-items-center justify-content-center"></i>
          </div>
          <div className="text-start ps-4">
            <h2 className="pb-3">{nameCourse}</h2>
            <div className="pb-2 text-primary-color">
              <i className="bi bi-star-fill pe-2 fs-4"></i>
              <i className="bi bi-star-fill pe-2 fs-4"></i>
              <i className="bi bi-star-fill pe-2 fs-4"></i>
              <i className="bi bi-star-fill pe-2 fs-4"></i>
              <i className="bi bi-star-fill pe-2 fs-4"></i>
              <span className="fs-4">(5.0)</span>
            </div>
            <div>
              <img
                className="rounded-circle me-3"
                width={30}
                height={30}
                alt="avartar"
                src={instructorAvatar}
              />
              <span className="fw-bold text-black-50">{instructorName}</span>
            </div>
            <span className="fs-5 fw-bolder text-primary-color">
              {duration}
            </span>
          </div>
        </div>
        <div>
          <div className="bg-light py-3 fw-bold text-primary-color mb-4 rounded">
            {price}
          </div>
          <a href="#" className="btn btn-light w-100 py-3">
            enroll now!
          </a>
        </div>
      </div>
    </Wrapper>
  );
}

export default PopularItem;
