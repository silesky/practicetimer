const initialState = [{ id: 1, time: 2, title: 'shop', ticking: false }];

const reducer = function(state = initialState, action) {

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
         return state.find((el) => el.id === action.id);
       },
      getNextId: () => {
        return Math.max(...state.map(el => el['id'])) + 1;
      },
    };
    var _individualTimerObjEl = util.getCurrentObjEl();
    var _currentIndex = util.getCurrentIndex();
console.log(state);
    switch (action.type) {
      case 'SET_TICKING_TRUE':
      console.log('SET_TICKING_TRUE');
      if (_individualTimerObjEl !== 'undefined')   {
        _individualTimerObjEl.ticking =  true;
      }
      return util.getState_replaceElByIndex(_currentIndex, _individualTimerObjEl);
      case 'SET_TICKING_FALSE':
      console.log('SET_TICKING_FALSE');
        if (_individualTimerObjEl !== 'undefined') {
          _individualTimerObjEl.ticking = false;
      }
      return util.getState_replaceElByIndex(_currentIndex, _individualTimerObjEl);
      case 'SET_TITLE':
      _individualTimerObjEl.title = action.text;
      return util.getState_replaceElByIndex(_currentIndex, _individualTimerObjEl);
      // at the moment that add_timer is instantiated, the state only has two timers
      case 'ADD_TIMER':
      return [...state, { id: util.getNextId(), time: 10, title: 'new timer', ticking: false }];
      case 'INCREMENT':
      console.log('INCREMENT');
      _individualTimerObjEl.time = _individualTimerObjEl.time + 1;
      return util.getState_replaceElByIndex(_currentIndex, _individualTimerObjEl);
      case 'DECREMENT':
      _individualTimerObjEl.time = _individualTimerObjEl.time - 1;
      return util.getState_replaceElByIndex(_currentIndex, _individualTimerObjEl);
      case 'REMOVE_TIMER':
      return util.getState_removeElByIndex(_currentIndex, _individualTimerObjEl);
      default:
      return state;
    }
  };

export default reducer;
