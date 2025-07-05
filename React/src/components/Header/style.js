import styled from 'styled-components';

export default styled.header`
    display: flex;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.headerBackgroundColor};
    margin: ${({ theme }) => theme.spacing.small};
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: ${({ theme }) => theme.spacing.large};

    h1 {
        color: ${({ theme }) => theme.textBackgroundColor}
    }
    
    button {
        background-color: ${({ theme }) => theme.btnBackgroundColor};
        border: none;
        border-radius: ${({ theme }) => theme.borderRadius};
        padding: ${({ theme }) => theme.spacing.small};
        cursor: pointer;
    }
`;