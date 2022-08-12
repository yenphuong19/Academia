import Info from "./Info";
import Navbar from "./Navbar";
import styled from "styled-components";

const Wrapper = styled.div`
  z-index: 1;
`;

function Header() {
  return (
    <Wrapper className="position-absolute start-0 end-0">
      <Info />
      <Navbar />
    </Wrapper>
  );
}

export default Header;
