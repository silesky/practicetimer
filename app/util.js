
// given the state and the current id, grab the next id;
export const nextInLine = (state, currentId) => {
  const idArr = state.map((el) => el.id); // [1, 4, 6]
  const currentIndex = idArr.indexOf(currentId); // e.g. if 4 , then zero
  const nextId = idArr[currentIndex + 1];
  return nextId;
}
/*
export const getNextId = (stateArr = this.props.state.getState(), currentId = this.props.eachKey) => {
  const _getCurrentValueFromStateArr = () => {
    return stateArr.find((el) => el.id === currentId);
  };
  const _getNextIdFromCurrentValue = (currentValue) => {
    let index = stateArr.indexOf(currentValue);
    if (index >= 0 && index < stateArr.length - 1) {
      const nextItem = stateArr[index + 1];
      return nextItem.id;
    } else {
      return 0;
    }
  }
  return _getNextIdFromCurrentValue(_getCurrentValueFromStateArr());
};

- set ticking false
-  clear interval
- get nextID
*/
