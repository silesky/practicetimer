
const reducer = function reducer(state = {
      id: 0,
      time: 0,
      text: 'enter text',
    },
    action) {
                                                console.log('reducer called');
                                                console.log(state);


    switch (action.type) {

      case 'SET_TITLE':
          return {
            id: action.id,
            time: state.time,
            text: action.text,
          };
      case 'RESET':
                                                    console.log('RESET');
            return {
              time: 0, /* should simply return
              the current time, and then clearInterval (stop ticking). */
            };
      case 'INCREMENT':
                                                    console.log('INCREMENT');
          return {
            time: state.time + 1,
          };
        case 'DECREMENT':
                                                      console.log('DECREMENT');
            return {
              time: state.time - 1,
            };
        case 'PAUSEPLAY':
                                                      console.log('PAUSEPLAY');
          /* should simply return
          the current time, and then clearInterval (stop ticking). */

        case 'SET_TIME':
                                                    console.log('SET THE TIME');
        return {
            time: action.time,
          };
        default:
          return state;
      }

};
module.exports = reducer;
