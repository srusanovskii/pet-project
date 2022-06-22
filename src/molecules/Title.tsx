import styled from "styled-components";
import { Todo } from "../atoms/Todo";
import { ChangeLanguageButton } from './../atoms/Buttons';
import { useTranslation } from "react-i18next";
import { MdOutlinePhotoCamera } from 'react-icons/md';
import { useState } from 'react';

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
    const [isChrome, setIsChrome] = useState(false);

    const changeLanguage = () => i18n.language === 'en' ? i18n.changeLanguage('ru') : i18n.changeLanguage('en');

    async function startCapture(options: DisplayMediaStreamConstraints = {}) {
        const stream = await navigator.mediaDevices.getDisplayMedia(options);
        const track = stream.getVideoTracks()[stream.getVideoTracks().length-1];
        const image = new ImageCapture(track);
        const bitmap = await image.grabFrame();
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        
        track.stop();

        canvas.width = bitmap.width;
        canvas.height = bitmap.height;

        context.drawImage(bitmap, 0, 0);

        canvas.toBlob(blob => { 
            setTimeout(async () =>
            navigator.clipboard.write([
                new ClipboardItem({
                    [blob.type]: blob
                })
            ])
                .then(() => {
                    alert('Скриншот сделан и сохранён в буфер обмена!');
                    canvas.remove();
                })
                .catch(error => {
                    alert('Ошибка во время сохранения скриншота! Подробнее в консоли разработчика.');
                    console.log(error);
                    canvas.remove();
                }), 1000
            );
        });
    }

    function checkBrowser() {
        const userAgent = navigator.userAgent.toLowerCase();
        setIsChrome(/chrome/.test(userAgent));
    }

    return (
        <Wrapper>
            <MdOutlinePhotoCamera 
                style={{ 
                    width: '40px', height: '40px', fill: 'black', 
                    position: 'absolute', top: 40, left: 40,
                    cursor: isChrome ? 'pointer' : 'default'
                }} 
                onClick={() => isChrome ? startCapture({video: {mediaSource: 'screen'}} as DisplayMediaStreamConstraints): null}
                onMouseEnter={checkBrowser}
            />
            <ChangeLanguageButton onClick={changeLanguage}>{i18n.language}</ChangeLanguageButton>
            <Title>
                ToDo
            </Title>
            <Title>{t('number of tasks')} {todos.length}</Title>
        </Wrapper>
    );
};
export default TitleName;
