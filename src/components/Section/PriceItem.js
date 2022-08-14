import styled from "styled-components";

const Wrapper = styled.div.attrs({
    className: 'col-xl-3 col-md-6',
})`
    margin-bottom: 40px; 

    .container-custom {
        padding: 40px 30px;
    
        .price__subheading {
            letter-spacing: 1.5px;
        }
    
        .price__heading {
            font-size: 5rem;
        }

        .price__button {
            width: 70%;
        }
    }
`;

function PriceItem (props) {
    const { typePlan, price, contentPrice } = props
    return (
        <Wrapper>
            <div className="container-custom d-flex flex-column bg-white shadow h-100">
                <span className="price__subheading text-uppercase fw-bold fs-4 mb-4">{typePlan} plan</span>
                <span className="price__heading text-primary-color mb-5 fw-bold">
                    <sup className="text-black-50 fw-normal">$</sup>
                    {price}
                </span>
                <p className="text-center mb-5">{contentPrice}</p>
                <a className="price__button btn btn-light py-4 px-3 m-auto">get started</a>
            </div>
        </Wrapper>
    )
}

export default PriceItem;