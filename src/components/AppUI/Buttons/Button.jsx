import "../Buttons/Buttons/ButtonsStyle/ButtonsStyle.scss";
function Button(props) {
  return (
    <button className={props.class} onClick={props.onclick}>
      {props.text}
    </button>
  );
}
export default Button;
