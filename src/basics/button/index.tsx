import { FC, useState } from "react";
import classes from './styles.module.scss'

export const Button:FC = () => {
	const [value, setValue] = useState(0);
	return <button className={classes.button} onClick={() => setValue((old) => old + 1)}>{value}</button>
}