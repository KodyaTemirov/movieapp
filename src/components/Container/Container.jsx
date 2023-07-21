import s from './Container.module.css'
import clsx from 'clsx'
const Container = ({ children, className }) => {
	return <div className={clsx(s.container, className)}>{children}</div>
}
export default Container
