import { Fragment } from "react";
import styled from "styled-components";
import {
  ALL_COURSES,
  BLOGS,
  POPULAR_COURSES,
  PRICINGS,
  STUDENTS
} from "../../constants";
import BlogItem from "./BlogItem";
import CourseItem from "./CourseItem";
import PopularItem from "./PopularItem";
import PriceItem from "./PriceItem";
import StudentItem from "./StudentItem";

const Wrapper = styled.div.attrs({
  className: ""
})`
  padding-top: 128px;
  text-align: center;
`;

function Section() {
  return (
    <Fragment>
      <Wrapper>
        <h4>our courses</h4>
        <h1 className="mb-5 text-capitalize">
          Explore Our Popular Online Courses
        </h1>
        <div className="container-xl">
          <div className="row">
            {POPULAR_COURSES.map((item) => (
              <PopularItem
                key={item.id}
                nameCourse={item.name}
                instructorName={item.instructorName}
                instructorAvatar={item.instructorAvatar}
                duration={item.duration}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </Wrapper>

      <Wrapper>
        <h4>courses</h4>
        <h1 className="mb-5 text-capitalize">Browse Our Online Courses</h1>
        <div className="container-xl">
          <div className="row g-3">
            {ALL_COURSES.map((item) => (
              <CourseItem
                key={item.id}
                nameCourse={item.name}
                countCourse={item.count}
                backgroundImage={item.image}
              />
            ))}
          </div>
        </div>
      </Wrapper>

      <Wrapper>
        <h4>testimonial</h4>
        <h1 className="mb-5 text-capitalize">Our Successful Students</h1>
        <div className="container-xl">
          <div className="row justify-content-center">
            {STUDENTS.map((item) => (
              <StudentItem
                key={item.id}
                avatar={item.avatar}
                name={item.name}
                position={item.position}
                message={item.message}
              />
            ))}
          </div>
        </div>
      </Wrapper>

      <Wrapper>
        <h4>our blog</h4>
        <h1 className="mb-5 text-capitalize">recent from blog</h1>
        <div className="container-xl">
          <div className="row justify-content-center">
            {BLOGS.map((item) => (
              <BlogItem
                key={item.id}
                imageBlog={item.thumbnailImage}
                author={item.author}
                date={item.date}
                commentCount={item.commentCount}
                titleBlog={item.title}
                contentBlog={item.content}
              />
            ))}
          </div>
        </div>
      </Wrapper>

      <Wrapper>
        <h4>our pricing</h4>
        <h1 className="mb-5 text-capitalize">pricing & packages</h1>
        <div className="container-xl">
          <div className="row justify-content-center">
            {PRICINGS.map((item) => (
              <PriceItem
                key={item.id}
                typePlan={item.type}
                price={item.price}
                contentPrice={item.content}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    </Fragment>
  );
}

export default Section;
