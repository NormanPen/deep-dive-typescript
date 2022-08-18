import { Todo } from "./Todo";
import { Metadata } from "Metadata";

import { TodoList } from "TodoList";

const todoList = new TodoList<Metadata>();



todoList.note("Code aufräumen", { assignee: "@nope" });
todoList.note("UI ergänzen", { assignee: "@nope" });

const improveErrorHandlingId = todoList.note("Felerbehandlung verbessern", { assignee: "@nope" });

todoList.edit(improveErrorHandlingId, " Fehlerbehandlung verbessern");
todoList.tickOff(improveErrorHandlingId);

console.log(todoList.getOpenTodos());





/*
let text: string = "Hallo Welt";


const add = function (left: number, right: number): number {
    return left + right;
}
// unknown jeder Typ muss mit typeoff überprüft werden, any kann jeden Typen. void = kein Rückgabewert
const printMyLine = function (value: string): void {
    console.log(value);
}

printMyLine("asd");


console.log(text); 
*/