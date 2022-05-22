import React, { useRef, useState } from 'react';
import { IEditorChildProps } from './types';

export function TableBtn(props: IEditorChildProps & { insertTable: Function }) {
	const { editorState, setEditorState, insertTable } = props;
	const [table, setTable] = useState<number[]>([]);
	const list = useRef<HTMLUListElement>(null);
	function getColAndRow() {
		let row = editorState.tableRow || 4;
		let col = editorState.tableCol || 6;
		let arr = [];
		for (let i = 0; i < row * col; i++) {
			arr.push(
				<li
					className={
						'inline-block w-[24px] h-[24px] rounded m-[2px] ' +
						(table.indexOf(i) === -1 ? 'bg-gray-200' : 'bg-gray-400')
					}
					key={i}
					onMouseOver={(e: React.MouseEvent) => {
						handleLiMouseOver(e, i);
					}}
					onClick={(e: React.MouseEvent) => {
						handleLiClick(e, i);
					}}></li>
			);
		}
		return arr;
	}

	function handleLiClick(e: React.MouseEvent, index: number) {
		let x = Math.floor(index / editorState.tableCol!);
		let y = Math.floor(index % editorState.tableCol!);
		insertTable(x, y);
		setTable([]);
	}

	function handleLiMouseOver(e: React.MouseEvent, index: number) {
		let x = Math.floor(index / editorState.tableCol!);
		let y = Math.floor(index % editorState.tableCol!);
		let arr = [];

		for (let i = 0; i <= x; i++) {
			for (let j = 0; j <= y; j++) {
				arr.push(i * editorState.tableCol! + j);
			}
		}
		setTable([...arr]);
	}

	function handleMouseOver(e: React.MouseEvent) {
		list.current!.style.display = '';
	}
	function handleMouseOut(e: React.MouseEvent) {
		list.current!.style.display = 'none';
	}

	return (
		<button
			className={'relative inline-block w-[36px] h-[36px] rounded-md mr-[2px] hover:bg-gray-300 '}
			title='table'
			onMouseOver={(e: React.MouseEvent) => {
				handleMouseOver(e);
			}}
			onMouseOut={(e: React.MouseEvent) => {
				handleMouseOut(e);
			}}>
			<i className={`icon-format  opacity-60 bg-table hover: 'opacity-100'`}></i>
			<ul
				ref={list}
				className='absolute left-0 top-[36px] rounded-md list-none bg-white border box-content py-2'
				style={{
					width: editorState.tableCol! * 32 + 'px',
					height: editorState.tableRow! * 32 + 'px',
					display: 'none',
				}}>
				{getColAndRow()}
			</ul>
		</button>
	);
}
