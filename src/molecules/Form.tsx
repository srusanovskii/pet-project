import {useForm} from 'react-hook-form';
import {Description, Topic} from "../atoms/Inputs";
import {Button} from "../atoms/Buttons";
import {FormDiv} from "../atoms/Divs";

type Props = {
    addTask(topic: string, description: string): void;
}

type FormInputs = {
    topic: string;
    description: string;
};

const Form = (props: Props) => {
    const {addTask} = props;
    const {register, handleSubmit, reset} = useForm<FormInputs>();

    const onSubmit = (formData: FormInputs) => {
        addTask(formData.topic, formData.description);
        reset();
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