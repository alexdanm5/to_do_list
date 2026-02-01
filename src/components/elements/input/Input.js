const Input = ({ value, className, type, name, placeholder, onChange}) => {
    return (
        <>
            <input 
                value={value}
                onChange={(e) => onChange(e)}
                className={className}
                required 
                type={type} 
                name={name} 
                placeholder={placeholder}/>
        </>
    )
}
export default Input;