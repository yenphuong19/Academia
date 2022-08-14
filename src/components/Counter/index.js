import styled from "styled-components";
import Item from "./Item";

const Wrapper = styled.div.attrs({
    className: 'position-relative',
})`
    padding: 6rem;
    background: url('https://preview.colorlib.com/theme/academia/images/xbg_3.jpg.pagespeed.ic._5ftKPXrag.webp') no-repeat center;
    background-size: cover;
    color: #fff;
    z-index: 0;

    .overlay {
        background-color: #111;
        opacity: 0.3;
        z-index: -1;
    }

    .counter-icon {
        font-size: 5rem;
        padding-right: 20px;
    }
`;

function Counter () {
    return (
        <Wrapper>
            <div className="overlay position-absolute top-0 bottom-0 start-0 end-0"></div>
            <div className="container">
                <div className="row">
                    <Item number='3,000' content='success stories'/>
                    <Item number='320' content='trusted tutors'/>
                    <Item number='1,000' content='schedules'/>
                    <Item number='587' content='courses'/>
                </div>
            </div>
        </Wrapper>
    )
}

export default Counter;