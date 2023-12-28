import { createSlice } from "@reduxjs/toolkit";
import { Project } from "../../components/SideMenu/SideMenu.types";
import { RootState } from "../../app/store";

interface ProjectsList {
    projects: Project[]
}

const initialState: ProjectsList = {
    projects: [
        {
            id: 999,
            projectName: '',
            sections: [
                { shortName: 'По проекту', id: 325, sectionName: '', isTabOpen: false },
                { shortName: 'Объекты', id: 2352, sectionName: '', isTabOpen: false },
                { shortName: 'РД', id: 234, sectionName: '', isTabOpen: false },
                { shortName: 'МТО', id: 647, sectionName: '', isTabOpen: false },
                { shortName: 'СМР', id: 3563, sectionName: 'Строительно-монтажные работы', isTabOpen: true },
                { shortName: 'График', id: 2356, sectionName: '', isTabOpen: false },
                { shortName: 'МиМ', id: 5 + 62, sectionName: '', isTabOpen: false },
                { shortName: 'Рабочие', id: 346, sectionName: '', isTabOpen: false },
                { shortName: 'Капвложения', id: 63, sectionName: '', isTabOpen: false },
                { shortName: 'Бюджет', id: 745, sectionName: '', isTabOpen: false },
                { shortName: 'Финансирование', id: 34772, sectionName: '', isTabOpen: false },
                { shortName: 'Панорамы', id: 984, sectionName: '', isTabOpen: false },
                { shortName: 'Камеры', id: 589, sectionName: '', isTabOpen: false },
                { shortName: 'Поручения', id: 734, sectionName: '', isTabOpen: false },
                { shortName: 'Контрагенты', id: 364, sectionName: '', isTabOpen: false },
            ]
        }
    ]
}

export const productsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {}
})

export const getSections = (state: RootState) => (
    state.projects.projects[0].sections
)

export default productsSlice.reducer