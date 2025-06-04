import './Button.css';

function Button({ children, variant = "primary", onClick, type = "button", ...props }) {
    return (
        <button
            className={`custom-button ${variant}`}
            onClick={onClick}
            type={type}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;
