import PropTypes from "prop-types";

Button.propTypes = {
    secondary: PropTypes.bool,
    children: PropTypes.element.isRequired
};

export default function Button(props) {
    let buttonStyle = 'py-3 px-5 rounded-md ';
    if (!props.secondary) buttonStyle += ' bg-primary-default text-white ';
    else if (props.secondary) buttonStyle += 'border text-primary-default bg-white border-primary-default';

    return <button type="button" role="button" className={buttonStyle}>{props.children}</button>
}