const reducer = function reducer(state = 0, action) {
  if (typeof state === 'undefined') {
    return 0;
  } else {
    switch (action.type) {
      case 'SET_TITLE':
        return {
          id: action.id,
          text: action.text,
        };
      case 'INCREMENT':
        console.log('INCREMENT');
        console.log('state:' + (state + 1));
        return state + 1;
      case 'PAUSEPLAY':
        console.log('PAUSEPLAY');
        console.log('state:' + 0);
        return 0;
      case 'DECREMENT':
        console.log('DECREMENT');
        console.log('state:' + (state - 1));
        return state - 1;
      default:
        return state;
    }
  }
};
module.exports = reducer;
