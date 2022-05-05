import {useForm} from 'react-hook-form';
import {Button} from "../atoms/Buttons";
import {Description, Topic} from "../atoms/Inputs";
import {FormDiv} from "../atoms/Divs";
import {Todo} from "../atoms/Todo";
import { editAction } from "./../store";
import { useAction } from '@reatom/react';

type Props = {
    todo: Todo;
}

type FormInputs = {
    topic: string;
    description: string;
};

const EditTodo = (props: Props) => {
    const {todo} = props
    const {register, handleSubmit} = useForm<FormInputs>()


    const onSubmit = useAction((formData: FormInputs) => {
        const editedTodo = {
            ...todo, 
            taskTopic: formData.topic, 
            taskDescription: formData.description
        }
        return editAction(editedTodo)
    })

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