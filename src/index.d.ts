import React from 'react';

declare interface IEditorStyle {
	[x: string]: string | number;
}

declare enum BTNTYPE {
	QUOTE = 'quote',
	H1 = 'h1',
	H2 = 'h2',
	H3 = 'h3',
	BOLD = 'bold',
	ITALIC = 'italic',
	DELETE = 'delete',
	UNDERLINE = 'underLine',
	INLINECODE = 'inlineCode',
	CODEBLOCK = 'codeBlock',
	LINK = 'link',
	NEWLINE = 'newLine',
	ORDEREDLIST = 'orderedList',
	UNORDERLIST = 'unorderedList',
	IMAGE = 'image',
	TABLE = 'table',
	PREVIEW_MODE = 'preview',
	EDIT_MODE = 'edit',
	SYNC_MODE = 'sync',

	MAXIMAZE = 'maximize',
	MINIMAZE = 'minimize',
}

declare interface IEditorProps {
	/**
	 * set Editor Width and Height
	 */
	editorStyle: IEditorStyle;

	/**
	 * markdown Class
	 */
	markdownClass: string;

	/**
	 * preview Class
	 */
	previewClass: string;

	/**
	 * editor mode
	 */
	editorMode: string;
	/**
	 * content Md
	 */
	contentMD: string;

	/**
	 * content html
	 */
	contentHTML: string;

	/**
	 * toolbar buttons
	 */
	leftButtons?: BTNTYPE[];

	/**
	 * table button row
	 */
	tableRow?: number;

	/**
	 * table button col
	 */
	tableCol?: number;

	/**
	 * image
	 */
	imageUrl?: string;
}

declare function Editor(props: {
	editorProps: IEditorProps;
	markdownToHTML?: Function;
	onChange?: Function;
	onImageUploaded?: Function;
}): JSX.Element;

declare function getMDVal(): string;
declare function getHTMLVal(): string;
declare function use(plugin: BTNTYPE | BTNTYPE[]): unknown;
declare function unuse(plugin: BTNTYPE | BTNTYPE[]): unknown;
declare function getEditorConfig(): IEditorProps;

export default Editor;
export { BTNTYPE, getEditorConfig, getMDVal, getHTMLVal, use, unuse };
