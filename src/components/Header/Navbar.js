import { useRef } from "react";
import styled from "styled-components";
import { RESPONSIVE } from "../../constants";
import { useViewport } from "../../services/hooks";

const navbars = {
  home: "Home",
  allCourses: "All Courses",
  about: "About",
  team: "Team",
  pricing: "Pricing",
  journal: "Journal",
  contact: "Contact"
}

function Navbar (props) {
  const {  } = props;
  const navbarCollapseRef = useRef()
  const viewport = useViewport();
  const isTablet = viewport.width <= RESPONSIVE.tablet;
  const handleShowNavbar = () => {
    if (navbarCollapseRef) {
      // navbarCollapseRef.current.classList.replace("collapse", "collapsing");
      navbarCollapseRef.current.classList.toggle("show")
      // setTimeout(() => navbarCollapseRef.current.classList.replace("collapsing", "collapse"), 2000)
    }
    return ;
  }
  
  return (
    <Wrapper isTablet={isTablet}>
      <div className="navbar navbar-expand-lg p-0 d-flex flex-lg-row-reverse justify-content-between">

        <a
          href="/"
          className="button fw-bold text-uppercase text-white d-flex align-items-center"
          >
          <span className="mx-auto">Get certificate</span>
        </a>

        <button 
          className="navbar-toggler text-uppercase text-white fw-bold bg-transparent border-0 align-items-center"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" 
          aria-expanded="true" 
          aria-label="Toggle navigation"
          onClick={handleShowNavbar}
        >
          <i className="bi bi-list fs-1 pe-2"></i>
          Menu
        </button>

        <div 
          ref={navbarCollapseRef}
          className="collapse navbar-collapse" 
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            {Object.keys(navbars).map(item => (
              <li className="nav-item fw-semibold" key={item}>{navbars[item]}</li>
              ))}
          </ul>
        </div>

      </div>
    </Wrapper>
  );
}

export default Navbar;

const Wrapper = styled.nav.attrs({
  className: "container-xl"
})`
  background-color: ${props => props.isTablet ? "var(--primary-color)" : "transparent"};
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.5rem;
  // padding-left: ${props => props.isTablet ? "12px" : "0"};

  .navbar {
    background-color: ${props => props.isTablet ? "var(--primary-color)" : "rgba(255, 255, 255, 0.1)"};
  }
  .navbar-toggler {
    display: ${props => props.isTablet ? "flex" : ""};
    padding: 22px 0;
    cursor: pointer;
    font-size: 1.6rem;

    &:focus {
      box-shadow: none;
    }
  }

  .navbar-collapse.show {
    animation: expand .2s linear;
  }

  .navbar-nav {

    .nav-item {
      padding: 24px 25px;
      cursor: pointer;
  
      &:hover {
        color: var(--primary-color);
      }
  }

  }
  .button {
    background-color: ${props => props.isTablet ? "#1ca499" : "var(--primary-color)"};
    width: 250px;
    position: relative;
    font-size: 1.3rem;
    letter-spacing: 2px;
    padding: 26px;

    &:hover {
      color: var(--text-normal-color);
    }

    &::before {
      display: ${props => props.isTablet ? "none" : "block"};
      content: "";
      background-color: var(--primary-color);
      width: 40px;
      position: absolute;
      top: 0;
      bottom: 0;
      left: -16px;
      transform: skewX(-20deg);
  }
`;

