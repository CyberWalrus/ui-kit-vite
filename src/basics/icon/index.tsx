import { FC } from 'react';
import * as icons  from './assets';

export const Icon:FC<{icon: keyof typeof icons}> = ({icon}) => {
	const SvgIcon = icons[icon]
	return <SvgIcon />
}