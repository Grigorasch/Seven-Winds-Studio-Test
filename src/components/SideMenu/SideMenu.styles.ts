import styled from "styled-components"

export const SideMenuWrapper = styled.aside`
    background-color: ${props => props.theme.menuBackgroundColor};
`

export const Menu = styled.menu`
    list-style-type: none;
`

export const Item = styled.li`
    width: 100%;
    height: 32px;
`

export const SectionButton = styled.button`
    padding: 5px 20px;

    display: flex;
    align-items: center;
    gap: 14px;

    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;

    font-size: 14px;
    font-weight: 400;
    color: ${props => props.theme.lightTextColor};
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background-color:  ${props => props.theme.sectionButtonHoverColor};
    }
`