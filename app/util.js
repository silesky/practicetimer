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

export const ifZero = () => {
  console.log("ifZero()");
  // basically does the same thing as a while loop since it's called multiple times
  if (this.props.eachTime < 1 && this.props.eachTicking) {
    console.log('ifZero: if statement passed (time should be less than 1, current timer should be ticking)');
    store.dispatch({
      type: 'SET_TICKING_FALSE',
      id: this.props.eachKey,
    });
    clearInterval(this.myInt);
    const _nextId = getNextId(store.getState(), this.props.eachKey);
    console.log('next ID: ' + _nextId);
    startTicking(_nextId);
  }
};
