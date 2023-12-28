import styled from "styled-components"
import TopMenu from "./components/TopMenu/TopMenu"
import SideMenu from "./components/SideMenu/SideMenu"
import CurrentWindow from "./components/CurrentWindow/CurrentWindow"
import { sideMenuSectionsList } from "./components/SideMenu/SideMenu.types"

export default function App() {
    return (
        <ControlPanelWrapper>
            <TopMenu />
            <SideMenu sectionsList={sideMenuSectionsList} />
            <CurrentWindow />
        </ControlPanelWrapper>
    )
}

const ControlPanelWrapper = styled.div`
    display: grid;
    grid-template-columns: 235px 1fr;
    grid-template-rows: 90px 1fr;
    gap: 1px;
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.frameColor};
`