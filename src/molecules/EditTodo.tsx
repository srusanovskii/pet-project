import { useForm } from 'react-hook-form';
import { Button } from "../atoms/Buttons";
import { Description, Topic } from "../atoms/Inputs";
import { FormDiv } from "../atoms/Divs";
import { Todo } from "../atoms/Todo";
import { editAction } from "./../store";
import { useAction } from '@reatom/react';
import { useTranslation } from 'react-i18next';

type Props = {
    todo: Todo;
}

type FormInputs = {
    topic: string;
    description: string;
};

const EditTodo = (props: Props) => {
    const { t } = useTranslation('EditTodo'); 
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
                placeholder={t('new header')}
                type="text"
                {...register('topic')}
            />
            <Description
                placeholder={t('new text')}
                type="text"
                {...register('description')}
            />
            <Button type="submit">{t('change')}</Button>
        </FormDiv>
    );
};

export default EditTodo;
