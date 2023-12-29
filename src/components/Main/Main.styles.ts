import styled from "styled-components";

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
`

export const Header = styled.header`
    width: 100%;
    height: 44px;
    border-bottom: 1px solid ${props => props.theme.frameColor};
    background-color: ${props => props.theme.menuBackgroundColor};
`

export const Tab = styled.button`
    display: inline-flex;
    align-items: center;

    padding: 0 15px;
    height: 100%;

    font-size: 18px;
    font-weight: 400;
    color: ${props => props.theme.lightTextColor};

    border: none;
    border-right: 1px solid ${props => props.theme.frameColor};
    border-bottom: 2px solid transparent;
    background-color: transparent;

    cursor: pointer;
    transition: 0.3s;

    &:hover {
        border-bottom-color: ${props => props.theme.lightTextColor};
    }

    &:active {
        transform: scale(0.95);
    }
`

export const SectionContainer = styled.section`
    padding: 10px;
    flex-grow: 1;
    background-color: ${props => props.theme.mainBackgroundColor};
`