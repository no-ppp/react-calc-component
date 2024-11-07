import './App.css';
import { NumButton }  from "./NumButton";

function App() {
  return (
      <div className='min-h-screen flex items-center justify-center bg-gray-600'>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className='bg-green-500 pb-2 pt-2 pl-2 h-16'>
                  <p> aha </p>

              </div>
              <div className="pt-5 grid grid-cols-4 gap-4">
                  <NumButton> 1 </NumButton>
                  <NumButton> 2 </NumButton>
                  <NumButton> 3 </NumButton>
                  <NumButton> 4 </NumButton>
                  <NumButton> 5 </NumButton>
                  <NumButton> 6 </NumButton>
                  <NumButton> 7 </NumButton>
                  <NumButton> 8 </NumButton>
                  <NumButton> 9 </NumButton>
                  <NumButton> 9 </NumButton>
                  <NumButton> 9 </NumButton>
                  <NumButton> 9 </NumButton>
                  <NumButton> 9 </NumButton>
                  <NumButton> 9 </NumButton>
                  <NumButton> 9 </NumButton>
                  <NumButton> 9 </NumButton>
                  <NumButton> 9 </NumButton>

              </div>
              </div>
          </div>
          )
          }


          export default App;
