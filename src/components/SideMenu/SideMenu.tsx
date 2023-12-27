import menuItemIcon from "../../images/side-menu-icon.svg"
import { Section } from "./SideMenu.types"
import { Item, Menu, SectionButton, SideMenuWrapper } from "./SideMenu.styles"

export default function SideMenu({ sectionsList }: { sectionsList: Section[] }) {
    return (
        <SideMenuWrapper>
            <Menu>
                {sectionsList.map((section) => <MenuRow
                    sectionName={section.sectionName}
                    key={section.id}
                />)}
            </Menu>
        </SideMenuWrapper>
    )
}

function MenuRow({ sectionName }: { sectionName: string }) {
    return (
        <Item>
            <SectionButton>
                <img src={menuItemIcon} alt="" />
                <span>{sectionName}</span>
            </SectionButton>
        </Item>
    )
}