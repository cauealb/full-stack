import styled from "styled-components";

export default styled.div`
    background-color: ${({ theme }) => theme.postBackgroundColor};
    padding: ${({ theme }) => theme.spacing.small};
    border-radius: ${({ theme }) => theme.borderRadius};

    h1 {
       font-size: ${({ theme }) => theme.spacing.large};
    }

    span {
        color: ${({ theme }) => theme.textColorPost}
    }
`;