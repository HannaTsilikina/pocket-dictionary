function Input(props) {
  return (
    <input
      className={props.error === true ? "added-word-error" : "added-word"}
      value={props.value}
      type="text"
      onChange={props.handleInputChange}
    ></input>
  );
}
export default Input;
