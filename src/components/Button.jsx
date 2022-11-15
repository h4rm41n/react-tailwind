
const Button = (props) => {
    const { text, children, className = 'bg-blue-600', type = 'submit' } = props;
    return (
        <button {...props} type={type} className={`${className} bg-blue-900 px-4 py-2 rounded text-white flex gap-x-2`}>
            {text || children}
        </button>
    );
};

export default Button;
