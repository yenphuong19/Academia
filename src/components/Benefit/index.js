import styled from "styled-components";

const Wrapper = styled.div.attrs({
    className: 'container-xl',
})`
    .section__image {
        background: url('https://preview.colorlib.com/theme/academia/images/xabout.jpg.pagespeed.ic.cvAg9veoWl.webp') no-repeat top center;
        background-size: cover;
    }

    .section__heading {
        font-size: 4.6rem;
    }

    .section__content {

        .benefit-item {
            background-color: #fff;

            .benefit-item__icon {
                color: var(--primary-color);
                font-size: 5rem;
            }

            .content {
            }

            &:hover {
                color: #fff;
                background-color: var(--primary-color);

                .benefit-item__icon {
                    color: #fff;
                }

                .content {
                    color: #fff;
                }
            }
        }

    }
   
`;

function Benefit () {
    return (
        <Wrapper>
            <div className="row g-xl-5">
                <div className="section__image col-md-6 "></div>
                <div className="section__container col-md-6 my-5 d-flex flex-column">
                    <h4>Learn anything</h4>
                    <h1 className="section__heading">Benefits About Online Learning Expertise</h1>
                    <div className="section__content overflow-hidden d-flex flex-column">
                        <div className="benefit-item d-flex mt-3 p-5">
                            <i class="benefit-item__icon d-flex align-items-start pe-5 bi bi-book"></i>
                            <div>
                                <h3 className="pb-4">Online Courses</h3>
                                <p className="content m-0">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            </div>
                        </div>
                        <div className="benefit-item d-flex mt-3 p-5">
                            <i class="benefit-item__icon d-flex align-items-start pe-5 bi bi-patch-check"></i>
                            <div>
                                <h3 className="pb-4">Earn A Certificates</h3>
                                <p className="content m-0">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            </div>
                        </div>
                        <div className="benefit-item d-flex mt-3 p-5">
                            <i class="benefit-item__icon d-flex align-items-start pe-5 bi bi-person-badge"></i>
                            <div>
                                <h3 className="pb-4">Learn with Expert</h3>
                                <p className="content m-0">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Benefit;