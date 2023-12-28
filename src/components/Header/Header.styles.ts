import styled from "styled-components";

export const HeaderContainer = styled.header`
    grid-column-start: 1;
    grid-column-end: -1;

    display: flex;
    width: 100%;
    height: 100%;

    background-color: ${props => props.theme.menuBackgroundColor};
    border-bottom: 1px solid ${props => props.theme.frameColor};
`

export const IconButton = styled.button`
    padding: 0 0 0 20px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: 0.3s;

    &:hover > svg {
        transform: scale(1.1);
        fill: ${props => props.theme.lightTextColor};
    }

    &:active > svg {
        transform: scale(0.95);
    }
`

export const TextButton = styled.button`
    margin-left: 30px;
    padding: 0 4px;
    height: 100%;

    border: none;
    border-bottom: 2px solid transparent;
    background-color: transparent;

    font-size: 14px;
    font-weight: 400;
    color: ${props => props.theme.darkTextCollor};
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        color: ${props => props.theme.lightTextColor};
        border-bottom-color: ${props => props.theme.lightTextColor};
    }

    &:active {
        transform-origin: bottom;
        transform: scale(0.95);
    }
`