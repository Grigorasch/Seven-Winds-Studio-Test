import styled from "styled-components"
import arrow from "../../images/arrow.svg"

export const Header = styled.header`
    grid-column-start: 1;
    grid-column-end: -1;

    display: flex;
    flex-wrap: wrap;
    gap: 1px;

    width: 100%;
    height: 89px;
    background-color: ${props => props.theme.frameColor};
`

export const ControlPanelContainer = styled.div`
    display: flex;
    align-items: center;

    height: 44px;
    flex-basis: 100%;
    background-color: ${props => props.theme.menuBackgroundColor};
`

export const IconButton = styled.button`
    padding: 0 0 0 20px;
    background-color: transparent;
    border: none;
    cursor: pointer;
`

export const ControlButton = styled.button`
    margin-left: 30px;
    padding: 0 4px;
    height: 100%;

    border: none;
    background-color: transparent;
    border-bottom: 2px solid transparent;

    font-size: 14px;
    font-weight: 400;
    color: ${props => props.theme.darkTextCollor};
    cursor: pointer;
    transition: 0.3s;

    &:hover {
    color: ${props => props.theme.lightTextColor};
border-bottom-color: ${props => props.theme.lightTextColor};
    }
`

export const ProjectMenuWrapper = styled.div`
    position: relative;
    padding: 8px 10px 8px 20px;
    flex-basis: 235px;
    height: 44px;

    font-weight: 400;
    color: ${props => props.theme.darkTextCollor};
    background-color: ${props => props.theme.menuBackgroundColor};

    &::after {
        content: '';
        position: absolute;
        right: 7px;
        bottom: 10px;
        width: 24px;
        height: 24px;
        background: url(${arrow});
    }
`

export const ProjectName = styled.h2`
    font-size: 14px;
    line-height: 16px;
`

export const ProjectAbbreviation = styled.span`
    font-size: 10px;
    line-height: 12px;
    vertical-align: super;
`

export const TabBarContainer = styled.div`
    flex-grow: 1;
    height: 44px;
    background-color: ${props => props.theme.menuBackgroundColor};
`

export const TabContainer = styled.button`
    padding: 0 15px;
    width: fit-content;
    height: 100%;

    border: none;
    border-right: 1px solid ${props => props.theme.frameColor};
    background-color: transparent;

    font-size: 18px;
    font-weight: 400;
    line-height: 44px;
    color: ${props => props.theme.lightTextColor};
    cursor: pointer;
    transition: 0.3s;
`