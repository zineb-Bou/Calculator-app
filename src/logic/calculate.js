import Big from 'big.js';
import operate from './operate';
import isNumber from './isNumber';

export default function calculate(obj, buttonName) {
  if (buttonName === 'RESET') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (isNumber(buttonName)) {
    /*  *****************************  */
    if (buttonName === '0' && obj.next === '0') {
      return {};
    }
    /*  *****************************  */
    // If there is an operation, update next
    if (obj.operation) {
      if (obj.next && obj.next.length <= 4) {
        return {
          total: obj.total,
          next: obj.next + buttonName,
          operation: obj.operation,
        };
      }
      return {
        total: obj.total,
        next: buttonName,
        operation: obj.operation,
      };
    }
    /*  *****************************  */
    // If there is no operation, update next and clear the value
    if (obj.next && obj.next.length <= 4) {
      const next = obj.next === '0' ? buttonName : obj.next + buttonName;
      return {
        next,
        total: null,
      };
    }
    return {
      next: buttonName,
      total: null,
    };
  }
  /*  *****************************  */
  if (buttonName === 'del') {
    if (obj.next) {
      return {
        total: obj.total,
        next: obj.next.slice(0, -1) === '' ? null : obj.next.slice(0, -1),
        operation: obj.operation,
      };
    }
    return {
      total: obj.total.slice(0, -1) === '' ? null : obj.total.slice(0, -1),
      next: null,
      operation: null,
    };
  }
  /*  *****************************  */
  if (buttonName === '.') {
    if (obj.next) {
      // ignore a . if the next number already has one
      if (obj.next.includes('.')) {
        return {};
      }
      return {
        total: obj.total,
        next: obj.next + '.',
        operation: obj.operation,
      };
    }
    return { total: obj.total, next: '0.', operation: obj.operation };
  }
  /*  *****************************  */
  if (buttonName === '=') {
    if (obj.next && obj.operation) {
      return {
        total: operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: null,
      };
    } else {
      // '=' with no operation, nothing to do
      return {};
    }
  }

  // Button must be an operation
  // When the user presses an operation button without having entered
  // a number first, do nothing.
  // if (!obj.next && !obj.total) {
  //   return {};
  // }
  // User pressed an operation button and there is an existing operation
  if (obj.operation) {
    return {
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: buttonName,
    };
  }

  // no operation yet, but the user typed one
  // The user hasn't typed a number yet, just save the operation
  if (!obj.next) {
    return { operation: buttonName };
  }
  // save the operation and shift 'next' into 'total'
  return {
    total: obj.next,
    next: null,
    operation: buttonName,
  };
}
