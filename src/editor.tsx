import React, { useRef, useState } from 'react';
import { ImageBtn } from './image';
import { LeftButton } from './leftbutton';
import { RightButton } from './rightbutton';
import { TableBtn } from './table';
import Toolbar from './toolbar';
import { EditorProps, IEditorProps } from './types';
import { renderHtml } from './utils/utils';
import { BTNTYPE, InlineBtn, left, right } from './utils/var';

export default function Editor(props: {
	editorProps: IEditorProps;
	markdownToHTML?: Function;
	onChange?: Function;
	onImageUploaded?: Function;
}) {
	const { editorProps, markdownToHTML = renderHtml, onChange = () => {}, onImageUploaded = () => {} } = props;
	const [editorState, setEditorState] = useState<EditorProps>({
		editorStyle: { ...editorProps.editorStyle },
		styleCache: { ...editorProps.editorStyle },
		markdownClass: editorProps.markdownClass || 'prose',
		previewClass: editorProps.previewClass || 'prose',
		leftButtons: editorProps.leftButtons || [...left],
		rightButtons: [...right],
		editorMode: editorProps.editorMode || 'sync',
		contentMD: editorProps.contentMD || '',
		contentHTML: editorProps.contentHTML || '',
		imageUrl: editorProps.imageUrl || undefined,
		tableRow: editorProps.tableRow || 4,
		tableCol: editorProps.tableCol || 6,
		onChange: onChange,
		onImageUploaded: onImageUploaded,
		markdownToHTML: markdownToHTML,
	});

	const textArea = useRef<HTMLTextAreaElement>(null);

	/**
	 *  handle textArea input
	 * @param e textarea onChange Event
	 */
	function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
		let _html: string;
		if (editorState.editorMode != 'editor') {
			_html = editorState.markdownToHTML!(e.target.value);
		} else {
			_html = editorState.contentHTML;
		}
		try {
			editorState.onChange?.apply(window, [e.target.value, _html]);
		} catch (error) {
			console.warn(error);
		}
		setEditorState((pre) => {
			return {
				...pre,
				ancher: e.target.selectionStart,
				focus: e.target.selectionEnd,
				contentMD: e.target.value,
				contentHTML: _html,
			};
		});
	}
	/**
	 * handle key up event
	 * @param e key up event,handle Enter key up
	 */
	function handleKeyUp(e: React.KeyboardEvent) {
		let target: HTMLInputElement = e.target as HTMLInputElement;

		if (e.key === 'Enter') {
			let { ancher, focus } = getSelection(textArea.current);
			let { contentMD } = editorState;
			if (ancher === focus) {
				let first = contentMD.substring(0, ancher);
				let end = contentMD.substring(focus);
				let arr = first.split('\n');

				let r = /^(\- |\d*\. |\> )(.*)/.exec(arr[arr.length - 2]);

				if (arr.length > 1 && r) {
					if (r[2] === '') {
						// 1. - > 空行回车
						arr.splice(arr.length - 2);
						first = arr.join('\n') + '\n';
						ancher = first.length;
						focus = first.length;
					} else {
						// 非空行回车 补上应有前缀。
						let insertStr = '';
						if (r[1] === '- ') {
							insertStr = '- ';
						} else if (r[1] === '> ') {
							insertStr = '> ';
						} else {
							let ind = parseInt(r[1]);
							insertStr = ind + 1 + '. ';
						}

						first = arr.join('\n') + insertStr;

						ancher = first.length;
						focus = first.length;
					}
					let _html: string;
					if (editorState.editorMode != 'editor') {
						_html = editorState.markdownToHTML!(first + end);
					} else {
						_html = editorState.contentHTML;
					}
					setEditorState((pre) => {
						return {
							...pre,
							ancher,
							focus,
							contentMD: first + end,
							contentHTML: _html,
						};
					});
				}
			}
		}
	}

	/**
	 * insert marker in markdown text
	 * @param type button type
	 */
	function insertMarkdown(type: BTNTYPE) {
		const contentMD: string = editorState.contentMD;
		let { ancher = 0, focus = 0 } = getSelection(textArea.current);

		let first: string = contentMD.substring(0, ancher);
		let mid: string = contentMD.substring(ancher, focus);
		let end: string = contentMD.substring(focus);
		let _markdown = '';
		if (ancher > focus) {
			let temp = ancher;
			ancher = focus;
			focus = temp;
		}
		if (type === BTNTYPE.QUOTE) {
			if (ancher === focus) {
				_markdown = first + '\n> ' + mid + end;
			} else {
				let mds = mid.split('\n');
				mds = mds.map((line, index) => {
					return '> ' + line;
				});
				if (first.length === 0 || first[first.length - 1] === '\n') {
					_markdown = first + mds.join('\n') + end;
				} else {
					_markdown = first + '\n' + mds.join('\n') + end;
				}
			}
		} else if (type === BTNTYPE.ORDEREDLIST) {
			if (ancher === focus) {
				_markdown = first + '\n1. ' + mid + end;
			} else {
				let mds = mid.split('\n');
				mds = mds.map((line, index) => {
					return index + 1 + '. ' + line;
				});
				if (first.length === 0 || first[first.length - 1] === '\n') {
					_markdown = first + mds.join('\n') + end;
				} else {
					_markdown = first + '\n' + mds.join('\n') + end;
				}
			}
		} else if (type === BTNTYPE.UNORDERLIST) {
			if (ancher === focus) {
				_markdown = first + '\n- ' + mid + end;
			} else {
				let mds = mid.split('\n');
				mds = mds.map((line, index) => {
					return '- ' + line;
				});
				if (first.length === 0 || first[first.length - 1] === '\n') {
					_markdown = first + mds.join('\n') + end;
				} else {
					_markdown = first + '\n' + mds.join('\n') + end;
				}
			}
		} else {
			_markdown = first + InlineBtn[type][0] + mid + InlineBtn[type][1] + end;
		}

		setEditorState((pre) => {
			return {
				...pre,
				contentMD: _markdown,
				contentHTML: editorState.markdownToHTML!(_markdown),
			};
		});
	}

	function insertImage(fileName: string, path: string) {
		const contentMD: string = editorState.contentMD;
		let { ancher = 0, focus = 0 } = getSelection(textArea.current);
		if (ancher != focus) {
			ancher = contentMD.length;
		}
		let first: string = contentMD.substring(0, ancher);
		let mid: string = contentMD.substring(ancher, focus);
		let end: string = contentMD.substring(focus);
		let _markdown = first + '\n![' + fileName + '](' + path + ')\n' + mid + end;

		setEditorState((pre) => {
			return {
				...pre,
				contentMD: _markdown,
				contentHTML: editorState.markdownToHTML!(_markdown),
			};
		});
	}

	function insertTable(row: number, col: number) {
		const contentMD: string = editorState.contentMD;
		let { ancher = 0, focus = 0 } = getSelection(textArea.current);
		if (ancher != focus) {
			ancher = contentMD.length;
		}
		let first: string = contentMD.substring(0, ancher);
		let mid: string = contentMD.substring(ancher, focus);
		let end: string = contentMD.substring(focus);
		let th = '\n';
		let td = '';
		let tr = '';
		for (let i = 0; i <= col; i++) {
			th += ' | Head ';
			td += ' | ---- ';
			tr += ' | Data ';
		}
		th += '|\n';
		td += '|\n';
		tr += '|\n';

		let tableStr = th + td + tr;
		for (let i = 0; i < row; i++) {
			tableStr += tr;
		}

		let _markdown = first + tableStr + mid + end;

		setEditorState((pre) => {
			return {
				...pre,
				contentMD: _markdown,
				contentHTML: editorState.markdownToHTML!(_markdown),
			};
		});
	}
	/**
	 * get toolbar buttons
	 * @param loc : left Buttons and right Buttons
	 * @returns Buttons JSX
	 */
	function getButtons(loc: 'left' | 'right'): React.ReactElement[] {
		let buttons: React.ReactElement[] = [];

		if (loc === 'left') {
			for (const btn of editorState.leftButtons!) {
				if (btn === BTNTYPE.IMAGE) {
					buttons.push(
						<ImageBtn
							editorState={editorState}
							setEditorState={setEditorState}
							key='image'
							insertImage={insertImage}></ImageBtn>
					);
				} else if (btn === BTNTYPE.TABLE) {
					buttons.push(
						<TableBtn
							editorState={editorState}
							setEditorState={setEditorState}
							insertTable={insertTable}
							key='table'></TableBtn>
					);
				} else {
					buttons.push(<LeftButton title={btn} type={btn} insertMarkdown={insertMarkdown} key={btn}></LeftButton>);
				}
			}
		} else {
			for (const btn of editorState.rightButtons!) {
				buttons.push(
					<RightButton
						title={btn}
						type={btn}
						editorState={editorState}
						setEditorState={setEditorState}
						key={btn}></RightButton>
				);
			}
		}

		return buttons;
	}

	function getContentBox() {
		let markdown = (
			<textarea
				ref={textArea}
				className={`max-w-none resize-none block border-none bg-white outline-none antialiased flex-1 h-full min-h-[150px] rounded-bl-lg rounded-br-lg p-2 ${editorProps.markdownClass}`}
				onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
					handleChange(e);
				}}
				onKeyUp={(e: React.KeyboardEvent) => {
					handleKeyUp(e);
				}}
				value={editorState.contentMD}></textarea>
		);

		let _html = (
			<div
				className={`max-w-none bg-white min-h-[150px] overflow-auto flex-1 h-full p-2 rounded-bl-lg rounded-br-lg ${editorProps.previewClass}`}
				dangerouslySetInnerHTML={{ __html: editorState.contentHTML }}></div>
		);
		if (editorState.editorMode === 'sync') {
			return (
				<>
					{markdown}
					{_html}
				</>
			);
		} else if (editorState.editorMode === 'edit') {
			return markdown;
		} else {
			return _html;
		}
	}

	/**
	 * Get Selection in textArea
	 * @param ref textArea
	 */
	function getSelection(ref: HTMLTextAreaElement | null) {
		if (ref === null) {
			return { ancher: 0, focus: 0 };
		} else {
			return {
				ancher: ref.selectionStart,
				focus: ref.selectionEnd,
			};
		}
	}

	getMDVal = () => editorState.contentMD;
	getHTMLVal = () => editorState.contentHTML;

	return (
		<div
			className={`my-5 mx-auto min-w-0 min-h-0 leading-5 rounded-lg flex flex-col`}
			style={{ ...editorState.editorStyle }}>
			<Toolbar left={getButtons('left')} right={getButtons('right')} />
			<div
				className={`w-full h-full border-gray-200 border-t box-border overflow-hidden flex flex-row divide-x-2 break-all whitespace-normal font-default leading-tight `}>
				{getContentBox()}
			</div>
		</div>
	);
}

export let getMDVal: Function;
export let getHTMLVal: Function;
