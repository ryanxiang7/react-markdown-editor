import React, { useRef } from 'react';
import { IEditorChildProps } from './types';

export function ImageBtn(props: IEditorChildProps & { insertImage: Function }) {
	const { editorState, setEditorState, insertImage } = props;
	const fileInput = useRef<HTMLInputElement>(null);
	function handleBtnClick(e: React.MouseEvent) {
		fileInput.current!.click();
	}

	function handleChange(e: React.ChangeEvent) {
		const { onImageUploaded = () => {} } = editorState;
		let formData = new FormData();
		let file = fileInput!.current!.files![0];
		formData.append('image', file);
		if (editorState.imageUrl) {
			fetch(editorState.imageUrl, {
				method: 'POST',
				body: formData,
			})
				.then((res) => res.json())
				.then((data) => {
					const { fileName, path } = data;

					onImageUploaded.apply(window, [fileName, path]);
					insertImage(fileName, path);
				})
				.catch((err) => {
					console.warn(err);
				});
		}
	}

	return (
		<button
			className={'w-[36px] h-[36px] flex justify-center items-center rounded-md mr-[2px] hover:bg-gray-300 '}
			onClick={(e: React.MouseEvent) => handleBtnClick(e)}
			title='image'>
			<i className={`icon-format  opacity-60 bg-image hover: 'opacity-100' `}></i>
			<input
				ref={fileInput}
				type='file'
				className='z-[-1] absolute left-0 top-0 w-0 h-0 hidden opacity-0'
				onChange={(e: React.ChangeEvent) => {
					handleChange(e);
				}}
			/>
		</button>
	);
}
