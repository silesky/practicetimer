  const initialState = [{ id: 1, time: 3, title: 'shop', ticking: false }];

const reducer = function(state = initialState, action) {
    let _index;
    let _objEl;
    let _individualTimerObjEl;
    // copy the state array
    const stateCopyArr = state.slice(0);


    const util = {
      getState_replaceElByIndex: (index, el) => {
        return [
          ...state.slice(0, index),
          state[index] =  el,
          ...state.slice(index + 1)
        ];

      },
      getState_removeElByIndex: (index) => {
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
         return state.find((el) => el.id == action.id);
       },
      getNextId: () => {
        return Math.max(...state.map(el => el['id'])) + 1;
      },
    };
    switch (action.type) {
      case 'SET_TICKING_TRUE':
      console.log('SET_TICKING_TRUE');
      _individualTimerObjEl = util.getCurrentObjEl();
      _individualTimerObjEl.ticking = true;
      return util.getState_replaceElByIndex(util.getCurrentIndex(), _individualTimerObjEl);

      case 'SET_TICKING_FALSE':
      console.log('SET_TICKING_FALSE');
      _individualTimerObjEl = util.getCurrentObjEl();
      _individualTimerObjEl.ticking = false;
      return util.getState_replaceElByIndex(util.getCurrentIndex(), _individualTimerObjEl);

      case 'SET_TITLE':
      _individualTimerObjEl = util.getCurrentObjEl();

      _individualTimerObjEl.title = action.text;
      return util.getState_replaceElByIndex(util.getCurrentIndex(), _individualTimerObjEl);
      // at the moment that add_timer is instantiated, the state only has two timers
      case 'ADD_TIMER':
      console.log(util.getNextId());
      return [...state, { id: util.getNextId(), time: 1, title: 'new timer' }];

      case 'INCREMENT':
      console.log('INCREMENT');
      _index = util.getCurrentIndex();
      _objEl = util.getCurrentObjEl();
      _objEl.time = _objEl.time + 1;
      return util.getState_replaceElByIndex(util.getCurrentIndex(), _objEl);


      case 'DECREMENT':
      console.log('DECREMENT');
      _index = util.getCurrentIndex();
      _objEl = util.getCurrentObjEl();
      _objEl.time = _objEl.time - 1;
      return util.getState_replaceElByIndex(util.getCurrentIndex(), _objEl);

      case 'REMOVE_TIMER':
      return util.getState_removeElByIndex(util.getCurrentIndex());

      default:
      return state;
    }
  };

export default reducer;
