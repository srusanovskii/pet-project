import {useForm} from 'react-hook-form'
import {Description, Topic} from "../atoms/Inputs"
import {Button} from "../atoms/Buttons"
import {FormDiv} from "../atoms/Divs"
import { todoListAtom } from "./../store";

type FormInputs = {
    topic: string
    description: string
};

const Form = () => {
    const {register, handleSubmit, reset} = useForm<FormInputs>()

    const onSubmit = (formData: FormInputs) => {
        if (!formData.topic && !formData.description) {
            return
        }
        todoListAtom.add.dispatch({topic: formData.topic, description: formData.description})
        reset()
    }

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