import s from './Header.module.css'
import Logo from '/logo.svg'
import { Nav, Container } from '@components'

const Header = () => {
	return (
		<header className={s.header}>
			<Container className={s.headerContainer}>
				<div className={s.logo}>
					<img src={Logo} alt='' />
				</div>
				<Nav />
			</Container>
		</header>
	)
}
export default Header
