// Интерфейс раздела бокового меню
export interface Section {
    id: number,
    sectionName: string,
    shortName: string,
    isTabOpen: boolean
}

export interface Project {
    id: number,
    projectName: string,
    sections: Section[]
}