import { Status } from "./Status";

interface Todo<TData> { // Interface definiert ein Opject
    id: string;
    desciption: string;
    status: Status; //string | number; // string oder number kompiniert
    //assignee?: string; mit ? optional
    data: TData; // variable für einen Typ (Platzhalter)
}

export { Todo };