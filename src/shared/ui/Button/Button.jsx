import styles from './Button.module.scss'

const Button = ({ children, className = '', type = 'button', isDisabled, onClick }) => {
    return (
        <button
            className={`${styles.button} ${className}`}
            type={type}
            onClick={onClick}
            disabled={isDisabled}
        >
            {children}
        </button>
    )
}

export default Button