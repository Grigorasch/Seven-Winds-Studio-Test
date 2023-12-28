import styled from "styled-components"

export const Aside = styled.aside`
    border-right: 1px solid ${props => props.theme.frameColor};
    background-color: ${props => props.theme.menuBackgroundColor};
`

export const MenuContainer = styled.menu`
    list-style-type: none;
`

export const Header = styled.header`
    position: relative;
    padding: 8px 10px 8px 20px;
    flex-basis: 235px;
    height: 44px;

    font-weight: 400;
    color: ${props => props.theme.darkTextCollor};
    border-bottom: 1px solid ${props => props.theme.frameColor};
    background-color: ${props => props.theme.menuBackgroundColor};

    &::after {
        content: '';
        position: absolute;
        right: 7px;
        bottom: 10px;
        width: 24px;
        height: 24px;
        background: url("data:image/svg+xml;charset=UTF-8,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg id='icon' clip-path='url(%23clip0_3_4487)'%3e%3cpath id='Vector' d='M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z' fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_3_4487'%3e%3crect width='24' height='24' fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
    }
`

export const ProjectName = styled.h2`
    font-size: 14px;
    line-height: 16px;
`

export const ProjectAbbreviation = styled.span`
    display: block;
    font-size: 10px;
    line-height: 12px;
`

export const Item = styled.li`
    width: 100%;
    height: 32px;
`

export const SectionButton = styled.button<{ $isTabOpen: boolean }>`
    padding: 5px 20px;

    display: flex;
    align-items: center;
    gap: 14px;

    width: 100%;
    height: 100%;
    border: none;
    background-color: ${props => props.$isTabOpen ?
        props => props.theme.sectionButtonHoverColor :
        'transparent'};

    font-size: 14px;
    font-weight: 400;
    color: ${props => props.theme.lightTextColor};
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background-color:  ${props => props.theme.sectionButtonHoverColor};
    }
`