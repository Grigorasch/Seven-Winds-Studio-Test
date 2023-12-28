import { Header, ProjectMenuWrapper, ProjectName, ProjectAbbreviation, ControlPanelContainer, IconButton, ControlButton, TabBarContainer, TabContainer } from "./TopMenu.styles"
import menuButtonIcon from "../../images/menu-button-icon.svg"
import backButtonIcon from "../../images/back-button-icon.svg"
import { TabList, tabList } from "./TopMenu.types"

export default function TopMenu() {
    return (
        <Header>
            <ControlPanel />
            <ProjectMenu />
            <TabBar tabList={tabList} />
        </Header>
    )
}

function ControlPanel() {
    return (
        <ControlPanelContainer>
            <IconButton aria-label="Меню.">
                <img src={menuButtonIcon} alt="" />
            </IconButton>
            <IconButton aria-label="Назад.">
                <img src={backButtonIcon} alt="" />
            </IconButton>
            <ControlButton>Просмотр</ControlButton>
            <ControlButton>Управление</ControlButton>
        </ControlPanelContainer>
    )
}

function ProjectMenu() {
    return (
        <ProjectMenuWrapper>
            <ProjectName>Название проекта</ProjectName>
            <ProjectAbbreviation>Аббревиатура</ProjectAbbreviation>
        </ProjectMenuWrapper>
    )
}

function TabBar({ tabList }: { tabList: TabList[] }) {
    return (
        <TabBarContainer>
            {tabList.map((tab) => <Tab tabName={tab.tabName} key={tab.id} />)}
        </TabBarContainer>
    )
}

function Tab({ tabName }: { tabName: string }) {
    return (
        <TabContainer>{tabName}</TabContainer>
    )
}