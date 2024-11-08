import React, { useReducer } from 'react';
import {NumButton} from "./NumButton";
import {OperatorButton} from "./OperatorButton";

const ACTIONS = {
    ADD_DIGIT: 'add-digit',
    CLEAR: 'clear',
    DELETE_DIGIT: 'delete-digit',
    OPERATIONS: 'operations',
    EVALUATE: 'evaluate',
}
function reducer(state, { type, payload }) {
    switch (type) {
        case ACTIONS.ADD_DIGIT:
            return {
                ...state,
                currentOperand: `${currentOperand || ''}${payload.digit}`,
            }
    }

}

function App() {
    const [{currentOperand,previousOperan,operation}, dispatch] = useReducer(reducer, {})
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-600">
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
                <div className="bg-green-500 pb-2 pt-2 pl-2 h-16">
                    <div className="text-white text-4xl">
                        {'1'}
                    </div>
                </div>
                <div className="pt-5 grid grid-cols-4 gap-4">

                    <NumButton>1</NumButton>
                    <NumButton>2</NumButton>
                    <NumButton>3</NumButton>
                    <OperatorButton>+</OperatorButton>
                    <NumButton>4</NumButton>
                    <NumButton>5</NumButton>
                    <NumButton>6</NumButton>
                    <OperatorButton>+</OperatorButton>
                    <NumButton>7</NumButton>
                    <NumButton>8</NumButton>
                    <NumButton>9</NumButton>
                    <OperatorButton>/</OperatorButton>
                    <NumButton>0</NumButton>
                    <NumButton>,</NumButton>
                    <OperatorButton>=</OperatorButton>

                </div>
            </div>
        </div>
    );
}

export default App;

