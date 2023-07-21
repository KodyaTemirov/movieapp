import s from './Nav.module.css'

const Nav = () => {
	return (
		<nav className={s.nav}>
			<ul>
				<li>
					<a>Главная</a>
				</li>
				<li>
					<a>Сериалы</a>
				</li>
				<li>
					<a>Фильмы</a>
				</li>
			</ul>
		</nav>
	)
}

export default Nav
