import {useForm} from 'react-hook-form'
import {Description, Topic} from "../atoms/Inputs"
import {Button} from "../atoms/Buttons"
import {FormDiv} from "../atoms/Divs"
import { addAction } from "./../store";
import { useAction } from '@reatom/react';

type FormInputs = {
    topic: string
    description: string
};

const Form = () => {
    const {register, handleSubmit, reset} = useForm<FormInputs>()

    const onSubmit = useAction((formData: FormInputs) => {
        if (!formData.topic && !formData.description) {
            return
        }
        reset()
        return addAction(formData)
    })

    return (
        <FormDiv onSubmit={handleSubmit(onSubmit)}>
            <Topic
                placeholder="Заголовок"
                type="text"
                {...register("topic")}
            />
            <Description
                placeholder="Текст"
                type="text"
                {...register("description")}
            />
            <Button type="submit">Добавить</Button>
        </FormDiv>
    );
};


export default Form;