import { useState, useEffect } from 'react';
import { BiError } from 'react-icons/bi';

const GenerateErrorButton = () => {
    const [errorForExample, setErrorForExample] = useState(false);

    useEffect(() => {
        if (errorForExample) {
            throw new Error('test');
        }
    }, [errorForExample]);

    function generateError() {
        setErrorForExample(true);
    }

    return (
        <BiError 
            style={{
                width: '40px', height: '40px', fill: 'black',
                position: 'absolute', top: 40, left: 90,
                cursor: 'pointer'
            }}
            onClick={generateError}
        />
    );
};

export default GenerateErrorButton;

