import { useState } from 'react';
import Button from './button.js';
import Display from './display.js';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const handleOnclik = (char) => {
    setState(calculate(state, char));
  };
  return (
    <div className="calculator">
      <Display listChar={state.next || state.total || '0'} />
      <div className="keypad">
        <Button name="simple" handleClick={handleOnclik}>
          7
        </Button>
        <Button name="simple" handleClick={handleOnclik}>
          8
        </Button>
        <Button name="simple" handleClick={handleOnclik}>
          9
        </Button>
        <Button name="del" handleClick={handleOnclik}>
          del
        </Button>
        <Button name="simple" handleClick={handleOnclik}>
          4
        </Button>
        <Button name="simple" handleClick={handleOnclik}>
          5
        </Button>
        <Button name="simple" handleClick={handleOnclik}>
          6
        </Button>
        <Button name="simple opr" handleClick={handleOnclik}>
          +
        </Button>
        <Button name="simple " handleClick={handleOnclik}>
          3
        </Button>
        <Button name="simple" handleClick={handleOnclik}>
          2
        </Button>
        <Button name="simple" handleClick={handleOnclik}>
          1
        </Button>
        <Button name="simple opr" handleClick={handleOnclik}>
          -
        </Button>
        <Button name="simple" handleClick={handleOnclik}>
          .
        </Button>
        <Button name="simple" handleClick={handleOnclik}>
          0
        </Button>
        <Button name="simple opr" handleClick={handleOnclik}>
          ÷
        </Button>
        <Button name="simple opr" handleClick={handleOnclik}>
          x
        </Button>
        <Button name="reset" handleClick={handleOnclik}>
          RESET
        </Button>
        <Button name="equal" handleClick={handleOnclik}>
          =
        </Button>
      </div>
    </div>
  );
}

export default Calculator;
