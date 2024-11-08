import {ACTIONS} from './App.js'

export function NumButton( { dispatch, digit } ) {
    return (
        <button
            onClick={() => dispatch({type:ACTIONS.ADD_DIGIT, payload: {digit} })}
            className="bg-gray-500 rounded-full text-white w-16 h-16 font-semibold hover:bg-gray-400"
        >
            {digit}
        </button>
    )
}