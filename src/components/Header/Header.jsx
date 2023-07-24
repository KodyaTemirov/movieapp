import s from './Header.module.css'
import Logo from '/logo.svg'
import { Nav, Container } from '@components'

const Header = ({ children }) => {
	return (
		<header className={s.header}>
			<Container className={s.headerContainer}>
				<div className={s.headerLeft}>
					<div className={s.logo}>
						<img src={Logo} alt='' />
					</div>
					<Nav />
				</div>

				<div className={s.children}> {children}</div>
			</Container>
		</header>
	)
}
export default Header
