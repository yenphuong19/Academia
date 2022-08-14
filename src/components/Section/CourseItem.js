import styled from "styled-components";

const Wrapper = styled.div.attrs({
    className: 'col-xl-2 col-md-3',
})`
    .course-item {
        background-color: #fff;
        cursor: pointer;

        &__icon {
            color: var(--primary-color);
            font-size: 50px;
        }

        &:hover {
            background-color: var(--primary-color);
            color: #fff;

            .course-item__icon {
                color: #fff;
            }
        }
   }
`;

function CourseItem (props) {
    const { nameCourse, countCourse} = props
    return (
        <Wrapper>
            <div className="course-item d-flex flex-column rounded px-4 py-5 h-100">
                <i className="course-item__icon bi bi-binoculars mb-3"></i>
                <div>
                    <h3 className="fw-bold text-capitalize mb-3">{nameCourse}</h3>
                    <span className="course-item__count fs-5 fw-bold bg-light rounded text-primary-color p-2">{countCourse}</span>
                </div>
            </div>
        </Wrapper>
    )
}

export default CourseItem;