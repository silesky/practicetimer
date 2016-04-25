const reducer = function(
  state = [{ id: 1, time: 10, title: 'shop' }], action) {

    // copy the state array
    const stateCopyArr = state.slice(0);


    const util = {
      getState_replaceElByIndex: (index, el) => {
        console.log('getState_replace...');
        return [
          ...state.slice(0, index),
          state[index] =  el,
          ...state.slice(index + 1)
        ];

      },
      getState_removeElByIndex: (index) => {
                console.log('getState_remove...');
        return [
          ...state.slice(0, index),
          ...state.slice(index + 1)
        ];
      },
      getCurrentIndex: () => {
        const foundObj = state.find((el) => el.id === action.id);
        const foundIndex = state.indexOf(foundObj);
        return foundIndex;
      },
      getCurrentObjEl: () => {
        console.log('getCurrentObjEl...');
         return state.find((el) => el.id === action.id);
       },
      getNextId: () => {
        return Math.max(...state.map(el => el['id'])) + 1;
      },
    };
    switch (action.type) {
      case 'SET_TITLE':
      console.log(state);
      const _individualTimerObjEl = util.getCurrentObjEl();
      _individualTimerObjEl.title = action.text;
      return util.getState_replaceElByIndex(util.getCurrentIndex(), _individualTimerObjEl);
      //at the moment that add_timer is instantiated, the state only has two timers
      case 'ADD_TIMER':
      console.log(util.getNextId());
      return [...state, { id: util.getNextId(), time: 10, title: 'new timer' }];

      case 'INCREMENT':
      console.log('INCREMENT');
      return state;

      case 'DECREMENT':
      console.log('INCREMENT');
      return state;

      case 'REMOVE_TIMER':
      return util.getState_removeElByIndex(util.getCurrentIndex());

      default:
      return state;
    }
  };

export default reducer;
