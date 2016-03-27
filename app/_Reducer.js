const reducer = (state, action) => {
        if (typeof state === 'undefined') {
          return 0
        }
        switch (action.type) {
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
            return state
        }
      };

module.exports = reducer;
