import "../Buttons/Buttons/ButtonsStyle/ButtonsStyle.scss";
function Button(props) {
  if (props.disabledButton) {
    return (
      <button className={props.class} onClick={props.onclick} disabled>
        {props.text}
      </button>
    );
  } else {
    return (
      <button className={props.class} onClick={props.onclick}>
        {props.text}
      </button>
    );
  }
}
export default Button;
