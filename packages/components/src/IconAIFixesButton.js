import React from "react";
import PropTypes from "prop-types";

/* Yoast dependencies */
import { colors } from "@yoast/style-guide";

/* Internal dependencies */
import IconButtonBase from "./IconButtonBase";

/**
 * Returns the IconAIFixesButton component.
 *
 * @param {Object} props Component props.
 *
 * @returns {JSX.Element} IconAIFixesButton component.
 */
const IconAIFixesButton = function( props ) {
	return (
		<IconButtonBase
			disabled={ props.disabled }
			type="button"
			onClick={ props.onClick }
			pressed={ props.pressed }
			unpressedBoxShadowColor={ props.unpressedBoxShadowColor }
			pressedBoxShadowColor={ props.pressedBoxShadowColor }
			pressedBackground={ props.pressedBackground }
			unpressedBackground={ props.unpressedBackground }
			id={ props.id }
			aria-label={ props.ariaLabel }
			aria-pressed={ props.pressed }
			unpressedIconColor={ props.unpressedIconColor }
			pressedIconColor={ props.pressedIconColor }
			hoverBorderColor={ props.hoverBorderColor }
			className={ props.className }
		>
			{ props.children }
		</IconButtonBase>
	);
};

IconAIFixesButton.propTypes = {
	disabled: PropTypes.bool,
	children: PropTypes.node,
	id: PropTypes.string.isRequired,
	ariaLabel: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	unpressedBoxShadowColor: PropTypes.string,
	pressedBoxShadowColor: PropTypes.string,
	pressedBackground: PropTypes.string,
	unpressedBackground: PropTypes.string,
	pressedIconColor: PropTypes.string,
	unpressedIconColor: PropTypes.string,
	pressed: PropTypes.bool.isRequired,
	hoverBorderColor: PropTypes.string,
	className: PropTypes.string,
};

IconAIFixesButton.defaultProps = {
	disabled: false,
	unpressedBoxShadowColor: colors.$color_button_border,
	pressedBoxShadowColor: colors.$color_purple,
	pressedBackground: colors.$color_pink_dark,
	unpressedBackground: colors.$color_button,
	pressedIconColor: colors.$color_white,
	unpressedIconColor: colors.$color_button_text,
	hoverBorderColor: colors.$color_white,
};

export default IconAIFixesButton;