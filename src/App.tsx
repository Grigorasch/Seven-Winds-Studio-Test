import styled from "styled-components"
import SideMenu from "./components/SideMenu/SideMenu"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"

export default function App() {
    return (
        <ControlPanelWrapper>
            <Header />
            <SideMenu />
            <Main />
        </ControlPanelWrapper>
    )
}

const ControlPanelWrapper = styled.div`
    display: grid;
    grid-template-columns: 235px 1fr;
    grid-template-rows: 45px 1fr;
    width: 100%;
    height: 100vh;
`