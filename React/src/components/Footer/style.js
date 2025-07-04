import styled from 'styled-components';

export default styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.headerBackgroundColor};
    margin: 10px;
    border-radius: 4px;
    padding: 20px;

    h1 {
        color: ${({ theme }) => theme.textBackgroundColor}
    }

    button {
        background-color: ${({ theme }) => theme.btnBackgroundColor};
        border: none;
        border-radius: 4px;
        padding: 10px;
        cursor: pointer;
    }
`;