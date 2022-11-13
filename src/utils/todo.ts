export interface ITodo {
    id: number | string;
    title: string;
    description: string;
    status: boolean;

}

export type TodoContextType = {
    todos: ITodo[];
    saveTodo: (todo: ITodo) => void;
    updateTodo: (id: number | string) => void;
};