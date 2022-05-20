import styled from "styled-components";
import { Todo } from "../atoms/Todo";
import { ChangeLanguageButton } from './../atoms/Buttons';
import { useTranslation } from "react-i18next";

type Props = {
    todos: Todo[];
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #000000;
`
const Wrapper = styled.section`
  padding: 4em;
  background: #ffffff;
`
const TitleName = (props: Props) => {
    const { todos } = props;
    const { t, i18n } = useTranslation('Title');
    const changeLanguage = () => i18n.language === 'en' ? i18n.changeLanguage('ru') : i18n.changeLanguage('en');
    return (
        <Wrapper>
            <ChangeLanguageButton onClick={changeLanguage}>{i18n.language}</ChangeLanguageButton>
            <Title>
                ToDo
            </Title>
            <Title>{t('number of tasks')} {todos.length}</Title>
        </Wrapper>
    );
};
export default TitleName;