import styled from "styled-components";

const Wrapper = styled.div.attrs({
    className: 'col-xl-4 col-md-6',
})`
    margin-bottom: 40px; 

    .container-custom {
        

        .blog__link {
            background: url('${props => props.imageBlog}');
            background-size: cover;
            width: 100%;
            height: 300px;
        }

        .blog__info {

            &-link {
                font-size: 2.4rem;
            }
        }
    }

`;

function BlogItem (props) {
    const { imageBlog, blogger, date, commentCount, titleBlog, contentBlog } = props
    return (
        <Wrapper imageBlog={imageBlog}>
            <div className="container-custom d-flex flex-column rounded bg-white shadow h-100">
                <a href="#" className="blog__link"></a>
                <div className="blog__info text-start p-5">
                    <div className="mb-4">
                        <span className="text-uppercase fs-5 fw-bold me-4 text-black-50">
                            <i class="bi bi-person-fill text-primary-color me-1"></i>
                            {blogger}
                        </span>
                        <span className="text-uppercase fs-5 fw-bold me-4 text-black-50">
                            <i class="bi bi-calendar text-primary-color me-2"></i>
                            {date}
                        </span>
                        <span  className="text-uppercase text-primary-color fs-5 fw-bold">
                            <i class="bi bi-chat-fill me-2"></i>
                            {commentCount} comments
                        </span>
                    </div>
                    <h2 className="blog__info-link fw-normal pb-4">
                        <a href="#" >{titleBlog}</a>
                    </h2>
                    <p>{contentBlog}</p>
                </div>
            </div>
        </Wrapper>
    )
}

export default BlogItem;