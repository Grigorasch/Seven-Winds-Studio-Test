// Интерфейс раздела бокового меню
export interface Section {
    sectionName: string,
    id: number
}

// Перечень разделов в боковом меню
export const sideMenuSectionsList: Section[] = [
    { sectionName: 'По проекту', id: 325 },
    { sectionName: 'Объекты', id: 2352 },
    { sectionName: 'РД', id: 234 },
    { sectionName: 'МТО', id: 647 },
    { sectionName: 'СМР', id: 3563 },
    { sectionName: 'График', id: 2356 },
    { sectionName: 'МиМ', id: 5 + 62 },
    { sectionName: 'Рабочие', id: 346 },
    { sectionName: 'Капвложения', id: 63 },
    { sectionName: 'Бюджет', id: 745 },
    { sectionName: 'Финансирование', id: 34772 },
    { sectionName: 'Панорамы', id: 984 },
    { sectionName: 'Камеры', id: 589 },
    { sectionName: 'Поручения', id: 734 },
    { sectionName: 'Контрагенты', id: 364 },
]