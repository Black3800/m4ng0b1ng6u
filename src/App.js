import './App.css';
import Encrypt from './Encrypt.js'

function App() {
  return (
    <div className='App'>
      <div className='App-header'>
        <h1>m4ng0_b1ng5u</h1>
      </div>
      <div className='App-content'>
        <div className='code-area'>
          <span>Hint: t1N4$1g#nZ$gS24oE6!d522$n4!5oBl2O.</span>
        </div>
        <p>
          Your hint has been encrypted with <b>Mango-Bingsu-Algorithm</b>. The encryption service below is provided for you to crack the hint.
        </p>
        <Encrypt />
        <p className="little">(Try encrypting 'abcd1234' and see what happens)</p>
      </div>
    </div>
  );
}

export default App;
