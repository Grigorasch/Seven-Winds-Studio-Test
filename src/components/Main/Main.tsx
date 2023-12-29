import { useAppSelector } from "../../app/hooks";
import { getSections } from "../../features/projects/projectsSlice";
import { useGetTreeRowsQuery } from "../../services/api";
import { Section } from "../SideMenu/SideMenu.types";
import Table from "../Table/Table";
import { MainContainer, Header, SectionContainer, Tab } from "./Main.styles";

export default function Main() {
    const respo = useGetTreeRowsQuery();
    console.log(respo);
    
    const sectionsList = useAppSelector(getSections);
    const openTabsList = sectionsList.filter((section) => section.isTabOpen);

    return (
        <MainContainer>
            <TabsBar openTabsList={openTabsList} />
            <Workspace />
        </MainContainer>
    )
}

function TabsBar({ openTabsList }: { openTabsList: Section[] }) {
    return (
        <Header>
            {openTabsList.map((section) => <Tab>{section.sectionName}</Tab>)}
        </Header>
    )
}

function Workspace() {
    return (
        <SectionContainer>
            <Table />
        </SectionContainer>
    )
}