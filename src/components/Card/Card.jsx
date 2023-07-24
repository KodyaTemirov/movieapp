import s from './Card.module.css'

const Card = ({ title, year, type, imdbID, poster }) => {
	return (
		<div className={s.card}>
			<div className={s.poster}>
				<img src={poster} alt={title} />
			</div>
			<div className={s.footer}>
				<h3>{title}</h3>
				<span>imdbID:{imdbID}</span>
				<span>{type === 'movie' ? 'Фильм' : 'Сериалы'}</span>
			</div>
		</div>
	)
}

export default Card
