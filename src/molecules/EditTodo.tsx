import {useForm} from 'react-hook-form';
import {Button} from "../atoms/Buttons";
import {Description, Topic} from "../atoms/Inputs";
import {FormDiv} from "../atoms/Divs";
import {Todo} from "../atoms/Todo";

type Props = {
    editTask(newTodoItem: Todo): void;
    todo: Todo;
}

type FormInputs = {
    topic: string;
    description: string;
};

const EditTodo = (props: Props) => {
    const {editTask, todo} = props
    const {register, handleSubmit} = useForm<FormInputs>();

    const onSubmit = (formData: FormInputs) => {
        console.log(formData);
        const editedTodo = {
            ...todo, 
            taskTopic: formData.topic, 
            taskDescription: formData.description
        };
        console.log(editedTodo);
        editTask(editedTodo);
    }

    return (
        <FormDiv onSubmit={handleSubmit(onSubmit)}>
            <Topic
                placeholder="Новый заголовок"
                type="text"
                {...register('topic')}
            />
            <Description
                placeholder="Новый текст"
                type="text"
                {...register('description')}
            />
            <Button type="submit">Изменить</Button>
        </FormDiv>
    );
};
export default EditTodo;