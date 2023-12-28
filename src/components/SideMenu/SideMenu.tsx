import menuItemIcon from "../../images/side-menu-icon.svg"
import { Header, Item, MenuContainer, ProjectAbbreviation, ProjectName, SectionButton, Aside } from "./SideMenu.styles"
import { useAppSelector } from "../../app/hooks"
import { getSections } from "../../features/projects/projectsSlice"

export default function SideMenu() {
    return (
        <Aside>
            <ProjectsList />
            <Menu />
        </Aside>
    )
}

function ProjectsList() {
    return (
        <Header>
            <ProjectName>Название проекта
                <ProjectAbbreviation>Аббревиатура</ProjectAbbreviation>
            </ProjectName>
        </Header>
    )
}

function Menu() {
    const sectionsList = useAppSelector(getSections);
    return (
        <MenuContainer>
            {sectionsList.map((section) => <MenuRow
                shortName={section.shortName}
                isTabOpen={section.isTabOpen}
                key={section.id}
            />)}
        </MenuContainer>
    )
}

function MenuRow({ shortName, isTabOpen }: { shortName: string, isTabOpen: boolean }) {
    return (
        <Item>
            <SectionButton $isTabOpen={isTabOpen}>
                <img src={menuItemIcon} alt="" />
                <span>{shortName}</span>
            </SectionButton>
        </Item>
    )
}