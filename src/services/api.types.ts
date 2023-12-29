export interface SentData {
    rowName: string,
    equipmentCosts: number,
    estimatedProfit: number,
    machineOperatorSalary: number,
    mainCosts: number,
    materials: number,
    mimExploitation: number,
    overheads: number,
    parentId: number,
    salary: number,
    supportCosts: number
}

export interface ReceivedData extends SentData {
    id: number,
    child?: ReceivedData[]
}

export interface ResponseData {
    changed: ReceivedData[],
    current: ReceivedData
}

export interface UpdateArgs {
    id: number,
    data: SentData
}