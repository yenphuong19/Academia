import styled from "styled-components";

const Wrapper = styled.div.attrs({
  className: "container p-0"
})`
  background-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.5rem;

  .navbar-item {
    padding: 22px 25px;
  }
  .button {
    background-color: var(--primary-color);
    width: 200px;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;

    &::before {
      content: "";
      background-color: var(--primary-color);
      width: 50px;
      position: absolute;
      top: 0;
      bottom: 0;
      left: -8%;
      transform: skewX(-20deg);
    }
  }
`;

function Navbar() {
  return (
    <Wrapper>
      <div className="row w-100 position-relative">
        <ul className="d-flex">
          <li className="navbar-item fw-semibold">Home</li>
          <li className="navbar-item fw-semibold">All Courses</li>
          <li className="navbar-item fw-semibold">About</li>
          <li className="navbar-item fw-semibold">Team</li>
          <li className="navbar-item fw-semibold">Pricing</li>
          <li className="navbar-item fw-semibold">Jounal</li>
          <li className="navbar-item fw-semibold">Contact</li>
        </ul>
        <a
          href="/"
          className="button fw-bold text-uppercase d-flex align-items-center justify-content-center"
        >
          Get certificate
        </a>
      </div>
    </Wrapper>
  );
}

export default Navbar;
