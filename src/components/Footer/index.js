import styled from "styled-components";

const Wrapper = styled.div.attrs({
    className: '',
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

function Footer () {
    return (
        <Wrapper>
            <div className="container">
                <div className="row">

                    <div className="col-lg">
                        <h2 className="heading fw-bold text-uppercase">
                            <a>
                                academia
                                <span className="text-primary-color fs-5 fw-semibold d-block lh-1">online education & learning</span>
                            </a>
                        </h2>
                        <p className="content mb-5">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        <ul className="social d-flex">
                            <li className="social-item d-flex justify-content-center rounded-circle me-3">
                                <a><i className="bi bi-dribbble text-white"></i></a>
                            </li>
                            <li className="social-item d-flex justify-content-center rounded-circle me-3">
                                <a><i className="bi bi-twitter text-white"></i></a>
                            </li>
                            <li className="social-item d-flex justify-content-center rounded-circle">
                                <a><i className="bi bi-instagram text-white"></i></a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-2">
                        <h3 className="heading">explore</h3>
                        <ul>
                            <li>
                                <a href="#">
                                    <i class="bi bi-arrow-right-short text-primary-color"></i>
                                    About us
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="bi bi-arrow-right-short text-primary-color"></i>
                                    About us
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2">3</div>
                    <div className="col-lg">4</div>
                    <div className="col-lg">5</div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Footer;