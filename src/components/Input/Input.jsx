import s from './Input.module.css'

const Input = ({ type, onChange, onKeyDown }) => {
	return <input type={type} onChange={onChange} onKeyDown={onKeyDown} />
}

export default Input
