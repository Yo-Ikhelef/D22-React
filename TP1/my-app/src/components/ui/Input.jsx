import './Input.css';

function Input({ value, onChange, placeholder, ...props }) {
    return (
        <input
            className="custom-input"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            {...props}
        />
    );
}

export default Input;
