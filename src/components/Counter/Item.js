import styled from "styled-components";

const Wrapper = styled.div.attrs({
    className: 'col-lg-3 col-sm-6 p-5 d-flex justify-content-start',
})`
    .counter-icon {
        font-size: 5rem;
        padding-right: 20px;
    }
`;

function Item ( props ) {
    const { number, content } = props
    return (
        <Wrapper>
            <i class="counter-icon d-flex align-items-center bi bi-person-bounding-box"></i>
            <div>
                <h1 className="fw-bold p-0 d-block">{number}</h1>
                <span className="text-uppercase d-block text-light">{content}</span> 
            </div>
        </Wrapper>
    )
}

export default Item;