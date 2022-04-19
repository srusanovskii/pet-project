import EditTodo from "./EditTodo";
import {Todo} from "../atoms/Todo";

type Props = {
    todoForEdit: Todo;
}

export const EditTodoModal = (props: Props) => {
    const {todoForEdit} = props
    return <EditTodo todo={todoForEdit} />;
}