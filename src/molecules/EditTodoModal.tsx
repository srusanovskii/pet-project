import EditTodo from "./EditTodo";
import {Todo} from "../atoms/Todo";

type Props = {
    editTask(newTodoItem: Todo): void;
    editItem: Todo;
}

export const EditTodoModal = (props: Props) => {
    const {editTask, editItem} = props
    return <EditTodo editTask={editTask} todo={editItem} />;
}