import styled from "styled-components";

const Wrapper = styled.div.attrs({
  className: "col-xl-4 col-md-6"
})`
  .container-custom {
    background-color: ${(props) =>
      props.isActive ? "var(--primary-color)" : "#fff"};
    color: ${(props) => (props.isActive ? "#fff" : "")};

    .avatar {
      background-image: ${(props) => `url(${props.avatar})`};
      background-size: cover;
      width: 80px;
      height: 80px;
      position: relative;

      &__quote {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 30px;
        height: 30px;
        font-size: 22px;
        line-height: 30px;
        background-color: ${(props) =>
          props.isActive ? "#fff" : "var(--primary-color)"};
        color: ${(props) => (props.isActive ? "var(--primary-color)" : "#fff")};
      }
    }

    .student-info {
      &__position {
        color: ${(props) => (props.isActive ? "#fff" : "")};
      }
    }

    .student-message {
      color: ${(props) => (props.isActive ? "#ffffffe6" : "")};
    }
  }
`;

function StudentItem(props) {
  const { isActive, avatar, name, position, message } = props;
  return (
    <Wrapper isActive={isActive} avatar={avatar}>
      <div className="container-custom d-flex flex-column align-items-start p-5">
        <div className="d-flex mb-5">
          <div className=" avatar rounded-circle">
            <i className="bi bi-quote avatar__quote rounded-circle"></i>
          </div>
          <div className="student-info d-flex flex-column justify-content-center ps-4">
            <h3 className="student-info__name text-uppercase fw-bold mb-3">
              {name}
            </h3>
            <span className="student-info__position text-uppercase fs-5 fw-semibold text-primary-color">
              {position}
            </span>
          </div>
        </div>
        <p className="student-message">{message}</p>
      </div>
    </Wrapper>
  );
}

export default StudentItem;
