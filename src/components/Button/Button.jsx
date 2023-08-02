import s from './Button.module.css'
import clsx from 'clsx'

const Button = ({ className, onClick, children }) => {
	return (
		<button onClick={onClick} className={clsx(className, s.button)}>
			{children}
		</button>
	)
}

export default Button
