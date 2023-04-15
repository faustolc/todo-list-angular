export interface Task{
    id?: number,
    title: string,
    description: string,
    updated?: string,
    created?: string,
    status: Status
}

export enum Status{
    active = 1,
    completed = 2,
    deleted = 3
}