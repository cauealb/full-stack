import styled from "styled-components";

export default styled.div`
    background-color: ${({ theme }) => theme.postBackgroundColor};
    padding: 10px;
    border-radius: 8px;

    h1 {
       font-size: 24px 
    }

    span {
        color: #ccc
    }
`;