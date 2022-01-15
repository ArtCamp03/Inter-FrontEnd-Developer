
const Button = ( {children, className, onClick} ) => {
    return(
        <button 
            type="button" 
            className={className}
            onClick={onclick}
            >
                {children}
        </button>
    )
}

export default Button;