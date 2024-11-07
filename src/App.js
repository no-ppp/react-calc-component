import './App.css';
import { NumButton }  from "./NumButton";
import { OperatorButton } from "./OperatorButton";
import { Screen } from "./Screen";
import { useState } from "react";

function App() {
    const [state, setState] = useState({
        currentValue: '',
        previousValue: '',
        operation: '',
        result: 0,
    });

    function numPrinter(new_num) {
        setState(prevState => ({
            ...prevState,
            currentValue: prevState.currentValue + new_num,
        }));
    }
    function setOperation(op) {
        if (state.currentValue === '') return;
        const current = parseFloat(state.currentValue);
        if (state.currentValue !== '') {
            const prev = parseFloat(state.previousValue);
            let calcValue;
            switch (state.operation){
                case "+":
                    calcValue = prev + current
                    break;
                case "-":
                    calcValue = prev - current
                    break;
                case "*":
                    calcValue = prev * current
                    break;
                case '/':
                    calcValue = prev / current
                    break;
                default:
                    calcValue = current;

            }
            setState({
            ...state,
            result: calcResult,
            previousValue: calcValue.toString(),
                currentValue: '',
                operation: op
        })
    }
  return (
      <div className='min-h-screen flex items-center justify-center bg-gray-600'>
          <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
              <div className='bg-green-500 pb-2 pt-2 pl-2 h-16'>
                  <Screen> { state.currentValue || state.result || 0 } </Screen>

              </div>
              <div className="pt-5 grid grid-cols-4 gap-4">
                  <NumButton onHolder={() => numPrinter('1')}> 1 </NumButton>
                  <NumButton onHolder={() => numPrinter('2')}> 2 </NumButton>
                  <NumButton onHolder={() => numPrinter('3')}> 3 </NumButton>
                  <OperatorButton> + </OperatorButton>
                  <NumButton onHolder={() => numPrinter('4')}> 4 </NumButton>
                  <NumButton onHolder={() => numPrinter('5')}> 5 </NumButton>
                  <NumButton onHolder={() => numPrinter('6')}> 6 </NumButton>
                  <OperatorButton> - </OperatorButton>
                  <NumButton onHolder={() => numPrinter('7')}> 7 </NumButton>
                  <NumButton onHolder={() => numPrinter('8')}> 8 </NumButton>
                  <NumButton onHolder={() => numPrinter('9')}> 9 </NumButton>
                  <OperatorButton> / </OperatorButton>
                  <NumButton onHolder={() => numPrinter('0')}> 0 </NumButton>
                  <NumButton onHolder={() => numPrinter(',')}> , </NumButton>
                  <NumButton onHolder={() => numPrinter('=')}> = </NumButton>
                  <OperatorButton> * </OperatorButton>
                  <OperatorButton onHolder={() => numPrinter('C')}> C </OperatorButton>

              </div>
              </div>
          </div>
          )
          }


          export default App;
