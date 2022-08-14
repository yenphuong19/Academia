import styled from "styled-components"

const Wrapper = styled.div.attrs({

})`
    background-color: var(--primary-color);

    .container {
        padding: 48px 0;
    }

    .form {
        height: 45px;

        &__input::placeholder {
            color: #fff;
        }
    }
`;

function Register () {
    return (
        <Wrapper>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-xl-6">
                        <h2 className="text-white">Newsletter - Stay tune and get the latest update</h2>
                        <p className="mb-4 text-light">Far far away, behind the word mountains</p>
                    </div>
                    <div className="col-xl-4 my-auto">
                        <div className="form border-bottom border-white d-flex justify-content-between">
                            <input placeholder="Enter email address" className="form__input bg-transparent border-0"/>
                            <button className="bg-transparent border-0">
                                <i class="bi bi-send-fill text-white"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Register;