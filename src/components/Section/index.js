import { Fragment } from "react";
import styled from "styled-components";
import BlogItem from "./BlogItem";
import CourseItem from "./CourseItem";
import PopularItem from "./PopularItem";
import PriceItem from "./PriceItem";
import StudentItem from "./StudentItem";

const Wrapper = styled.div.attrs({
    className: '',
})`
    padding-top: 128px;
    text-align: center;
`;

function Section () {
    return (
        <Fragment>
            <Wrapper>
                <h4>our courses</h4>
                <h1 className="mb-5 text-capitalize">Explore Our Popular Online Courses</h1>
                <div className="container">
                    <div className="row">
                        <PopularItem nameCourse="HTML, CSS, and Javascript for Web Developers" instructor="by John Smith" duration="50 lectures (190 hrs)" price="$100 All Course / $15 per month"/>
                        <PopularItem nameCourse="HTML, CSS, and Javascript for Web Developers" instructor="by John Smith" duration="50 lectures (190 hrs)" price="$100 All Course / $15 per month"/>
                        <PopularItem nameCourse="HTML, CSS, and Javascript for Web Developers" instructor="by John Smith" duration="50 lectures (190 hrs)" price="$100 All Course / $15 per month"/>
                    </div>
                    {/* Slider cho popular courses */}
                </div>
            </Wrapper>

            <Wrapper>
                <h4>courses</h4>
                <h1 className="mb-5 text-capitalize">Browse Our Online Courses</h1>
                <div className="container-xl">
                    <div className="row g-3">
                       <CourseItem nameCourse="UI/UX design courses" countCourse="25 courses"/>
                       <CourseItem nameCourse="graphic design" countCourse="20 courses"/>
                       <CourseItem nameCourse="marketing" countCourse="8 courses"/>
                       <CourseItem nameCourse="music" countCourse="8 courses"/>
                       <CourseItem nameCourse="web management" countCourse="8 courses"/>
                       <CourseItem nameCourse="heathy & fitness" countCourse="16 courses"/>
                       <CourseItem nameCourse="information software" countCourse="2 courses"/>
                       <CourseItem nameCourse="information software" countCourse="2 courses"/>
                       <CourseItem nameCourse="information software" countCourse="2 courses"/>
                       <CourseItem nameCourse="information software" countCourse="2 courses"/>
                       <CourseItem nameCourse="information software" countCourse="2 courses"/>
                       <CourseItem nameCourse="information software" countCourse="2 courses"/>
                    </div>
                </div>
            </Wrapper>

            <Wrapper>
                <h4>testimonial</h4>
                <h1 className="mb-5 text-capitalize">Our Successful Students</h1>
                <div className="container-xl">
                    <div className="row justify-content-center">
                        <StudentItem nameStudent="roger scott" position="marketing manager" message="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."/>
                        <StudentItem isActive nameStudent="roger scott" position="marketing manager" message="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."/>
                        <StudentItem nameStudent="roger scott" position="marketing manager" message="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."/>
                    </div>
                </div>
            </Wrapper>

            <Wrapper>
                <h4>our blog</h4>
                <h1 className="mb-5 text-capitalize">recent from blog</h1>
                <div className="container-xl">
                    <div className="row justify-content-center">
                        <BlogItem imageBlog="https://preview.colorlib.com/theme/academia/images/ximage_1.jpg.pagespeed.ic.7R2Zr2FA0t.webp" blogger="admin" date="jan.18 2021" commentCount="3" titleBlog="Build your Dream Software & Engineering Career" contentBlog="A small river named Duden flows by their place and supplies it with the necessary regelialia."/>
                        <BlogItem imageBlog="https://preview.colorlib.com/theme/academia/images/ximage_2.jpg.pagespeed.ic.LFeFzbiNiA.webp" blogger="creator" date="mar. 03 2021" commentCount="20" titleBlog="Build your Dream Software & Engineering Career" contentBlog="A small river named Duden flows by their place and supplies it with the necessary regelialia."/>
                        <BlogItem imageBlog="https://preview.colorlib.com/theme/academia/images/ximage_3.jpg.pagespeed.ic.mPHHvHgH24.webp" blogger="stranger" date="sep. 12 2021" commentCount="7" titleBlog="Build your Dream Software & Engineering Career" contentBlog="A small river named Duden flows by their place and supplies it with the necessary regelialia."/>
                    </div>
                </div>
            </Wrapper>

            <Wrapper>
                <h4>our pricing</h4>
                <h1 className="mb-5 text-capitalize">pricing & packages</h1>
                <div className="container-xl">
                    <div className="row justify-content-center">
                        <PriceItem typePlan="basic" price="49k" contentPrice="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."/>
                        <PriceItem typePlan="beginer" price="79k" contentPrice="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."/>
                        <PriceItem typePlan="premium" price="109k" contentPrice="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."/>
                        <PriceItem typePlan="ultimate" price="179k" contentPrice="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."/>
                    </div>
                </div>
            </Wrapper>

        </Fragment>
    )
}

export default Section;