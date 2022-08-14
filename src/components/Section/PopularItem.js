import styled from "styled-components";

const Wrapper = styled.div.attrs({
    className: 'col-lg-4 col-md-6 col-sm-12 bg-white p-5 me-5',
})`
    .course__icon {
        font-size: 40px;
        background-color: var(--primary-color);
        height: 80px;
        width: 80px;
        color: #fff;
    }

`;

function PopularItem (props) {
    const { nameCourse, instructor, duration, price } = props
    return (
        <Wrapper>
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
                        <img className="rounded-circle me-3" width={30} height={30} alt="avartar" src='https://preview.colorlib.com/theme/academia/images/xauthor-1.jpg.pagespeed.ic.Wy7AO4X3gr.webp'/>
                        <span className="fw-bold text-black-50">{instructor}</span>
                    </div>
                    <span className="fs-5 fw-bolder text-primary-color">{duration}</span>
                </div>
            </div>
            <div>
                <div className="bg-light py-3 fw-bold text-primary-color mb-4 rounded">{price}</div>
                <a href="#" className="btn btn-light w-100 py-3">enroll now!</a>
            </div>
        </Wrapper>
    )
}

export default PopularItem;