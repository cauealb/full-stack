import styled from "styled-components";

export default styled.div`
    display: grid;
    gap: ${({ theme }) => theme.spacing.small};
    margin: ${({ theme }) => theme.spacing.small};
`