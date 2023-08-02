import s from './Dropdown.module.css'
import { Button } from '@components'

const Dropdown = ({
	array = [
		{
			id: '1',
			value: 'serial',
			checked: true,
		},
		{
			id: '2',
			value: 'film',
			checked: false,
		},
		{
			id: '3',
			value: 'episode',
			checked: false,
		},
	],
	open,
	onClick,
	onClickItem,
	dref,
	selected,
}) => {
	return (
		<>
			<div ref={dref}>
				<Button onClick={onClick}>{selected}</Button>

				{open && (
					<ul className={s.items}>
						{array.map(item => {
							return (
								<li
									onClick={() => {
										onClickItem(item.id)
									}}
									key={item.id}
									className={s.item}
								>
									{item.value} {item.checked && 'checked'}
								</li>
							)
						})}
					</ul>
				)}
			</div>
		</>
	)
}

export default Dropdown
