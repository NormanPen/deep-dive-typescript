import { Todo } from "./Todo";
import { v4 } from "uuid";

class TodoList<TData> {
    private todos: Todo<TData>[];

    public constructor() {
        this.todos = [];
    }

    public note(desciption: string, data: TData): string {
        const id = v4();

        const todo: Todo<TData> = {
            id,
            desciption,
            status: "open",
            data
        }

        this.todos.push(todo);
        return id;
    }

    public edit(id: string, desciption: string): void {
        const todo = this.todos.find(todo => todo.id === id);

        if (!todo) {

            throw new Error("Todo not found");
        }
        todo.desciption = desciption;
    }

    public tickOff(id: string): void {
        const todo = this.todos.find(todo => todo.id === id);

        if (!todo) {

            throw new Error("Todo not found");
        }
        todo.status = "done";
    }

    public discard(id: string): void {
        const todo = this.todos.find(todo => todo.id === id);

        if (!todo) {

            throw new Error("Todo not found");
        }
        todo.status = "discarded";
    }

    public getAllTodos(): Todo<TData>[] {
        return this.todos;
    }

    public getOpenTodos(): Todo<TData>[] {
        return this.todos.filter(todo => todo.status === "open");
    }

    public getDoneTodos(): Todo<TData>[] {
        return this.todos.filter(todo => todo.status === "done");
    }

    public getDiscardedTodos(): Todo<TData>[] {
        return this.todos.filter(todo => todo.status === "discarded");
    }
}

export { TodoList };