import { FC, useState } from "react";
import './styles.css'

export const Button:FC = () => {
	const [value, setValue] = useState(0);
	return <button className="button" onClick={() => setValue((old) => old + 1)}>{value}</button>
}