import React from 'react';
import { EditorLeftButtonProps } from './types';

export function LeftButton(props: EditorLeftButtonProps) {
	const { title, type, insertMarkdown } = props;

	function handleBtnClick(e: React.MouseEvent) {
		insertMarkdown(type);
	}

	return (
		<button
			className={'w-[36px] h-[36px] flex justify-center items-center rounded-md mr-[2px] hover:bg-gray-300 '}
			onClick={(e: React.MouseEvent) => handleBtnClick(e)}
			title={title}>
			<i className={`icon-format  opacity-60 bg-${type} hover: 'opacity-100' `}></i>
		</button>
	);
}
