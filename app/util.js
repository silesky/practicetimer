export const ifZero = () => {
  console.log("ifZero()");
  // basically does the same thing as a while loop since it's called multiple times
  if (this.props.eachTime < 1 && this.props.eachTicking) {
    console.log('ifZero: if statement passed (time should be less than 1, current timer should be ticking)');
}
/*

- set ticking false
-  clear interval
- get nextID
*/
