import { useState } from 'react';
import { MdOutlinePhotoCamera } from 'react-icons/md';

const TakeScreenshotButton = () => {
    const [isChrome, setIsChrome] = useState(false);

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
        <MdOutlinePhotoCamera 
            style={{
                width: '40px', height: '40px', fill: 'black',
                position: 'absolute', top: 40, left: 40,
                cursor: isChrome ? 'pointer' : 'default'
            }} 
            onClick={() => isChrome ? startCapture({video: {mediaSource: 'screen'}} as DisplayMediaStreamConstraints): null}
            onMouseEnter={checkBrowser}
        />
    );
};

export default TakeScreenshotButton;

