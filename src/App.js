import React, { useState } from 'react';

function App() {
    const [shower, setShower] = useState('');
    const [current, setCurrent] = useState('');
    const [previous, setPrevious] = useState('');
    const [operator, setOperator] = useState('');
    const [result, setResult] = useState('');
    function clickHandler(input){
        setCurrent(prevCurrent => {
            const newCurrent = prevCurrent + input;
            setShower(result + operator + newCurrent);
            return newCurrent;
        });

    }
    function clearAll(){
        setCurrent('');
        setPrevious('');
        setOperator('');
        setResult('');
        setShower('')
    }
    function operatorHandler(input){
        if (operator === ''){
            setOperator(input)
            setPrevious(current)
            setCurrent('')
            setResult(result + current)
            setShower( result + operator + current)
            return;
        } else {

        }

    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-600">
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
                <div className="bg-green-500 pb-2 pt-2 pl-2 h-16">
                    <div className="text-white text-4xl">
                        { shower }
                    </div>
                </div>
                <div className="pt-5 grid grid-cols-4 gap-4">

                    <button onClick={() => clickHandler('1')}
                            className="bg-gray-500 rounded-full text-white w-16 h-16">1</button>
                    <button
                        onClick={() => clickHandler('2')}
                        className="bg-gray-500
                        rounded-full
                        text-white
                        w-16 h-16"
                        > 2
                    </button>
                    <button onClick={() => clickHandler('3')} className="bg-gray-500 rounded-full text-white w-16 h-16">3</button>
                    <button onClick={() => {clickHandler('+'); operatorHandler('+')}} className="bg-gray-500 rounded-full text-white w-16 h-16">+</button>

                    <button onClick={() => clickHandler('4')} className="bg-gray-500 rounded-full text-white w-16 h-16">4</button>
                    <button onClick={() => clickHandler('5')} className="bg-gray-500 rounded-full text-white w-16 h-16">5</button>
                    <button onClick={() => clickHandler('6')} className="bg-gray-500 rounded-full text-white w-16 h-16">6</button>
                    <button  className="bg-gray-500 rounded-full text-white w-16 h-16">-</button>

                    <button onClick={() => clickHandler('7')} className="bg-gray-500 rounded-full text-white w-16 h-16">7</button>
                    <button onClick={() => clickHandler('8')} className="bg-gray-500 rounded-full text-white w-16 h-16">8</button>
                    <button onClick={() => clickHandler('9')} className="bg-gray-500 rounded-full text-white w-16 h-16">9</button>
                    <button className="bg-gray-500 rounded-full text-white w-16 h-16">*</button>

                    <button onClick={() => clickHandler('0')} className="bg-gray-500 rounded-full text-white w-16 h-16">0</button>
                    <button onClick={() => clearAll()} className="bg-gray-500 rounded-full text-white w-16 h-16">C</button>
                    <button  className="bg-gray-500 rounded-full text-white w-16 h-16">/</button>
                    <button  className="bg-gray-500 rounded-full text-white w-16 h-16">=</button>
                </div>
            </div>
        </div>
    );
}

export default App;

