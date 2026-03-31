function ActionButton({ children, handleClick, visibility = "hidden" }) {
	return (
		<button className={`btn ${visibility}`} onClick={handleClick}>
			{children}
		</button>
	);
}

export default ActionButton;
