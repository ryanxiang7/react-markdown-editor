import React from 'react';
import { EditorRightButtonProps } from './types';
import { BTNTYPE } from './utils/var';

export function RightButton(props: EditorRightButtonProps) {
	const { title, type, editorState, setEditorState } = props;

	function handleBtnClick(e: React.MouseEvent) {
		let btn: BTNTYPE[] = editorState.rightButtons!;
		let styleCache = editorState.styleCache;

		if (type === BTNTYPE.SYNC_MODE) {
			btn[0] = BTNTYPE.EDIT_MODE;
		} else if (type === BTNTYPE.EDIT_MODE) {
			btn[0] = BTNTYPE.PREVIEW_MODE;
		} else if (type === BTNTYPE.PREVIEW_MODE) {
			btn[0] = BTNTYPE.SYNC_MODE;
		} else if (type === BTNTYPE.MAXIMAZE) {
			btn[1] = BTNTYPE.MINIMAZE;
			setEditorState((pre) => {
				return {
					...pre,
					editorStyle: {
						position: 'fixed',
						zIndex: 999,
						left: '0',
						top: '0',
						margin: '0',
						width: 'calc(100vw)',
						height: 'calc(100vh)',
					},
				};
			});
			return;
		} else if (type === BTNTYPE.MINIMAZE) {
			btn[1] = BTNTYPE.MAXIMAZE;
			setEditorState((pre) => {
				return {
					...pre,
					editorStyle: { ...styleCache },
				};
			});
			return;
		}

		setEditorState((pre) => {
			return {
				...pre,
				rightButtons: btn,
				editorMode: btn[0],
			};
		});
	}

	return (
		<button
			className={
				'w-[36px] h-[36px] border-0 bg-transparent  flex justify-center items-center rounded-md mr-[2px] hover:bg-gray-300 '
			}
			onClick={(e: React.MouseEvent) => handleBtnClick(e)}
			title={title}>
			<i className={`icon-format  opacity-60 bg-${type} hover: 'opacity-100' `}></i>
		</button>
	);
}
