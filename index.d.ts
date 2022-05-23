import React from 'react';

declare module 'react-markdown-editor' {
	export enum BTNTYPE {
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

	/**
	 * Editor Style
	 */
	export interface IEditorStyle {
		/**
		 * Editor width.
		 * default value : 100%
		 */
		width?: string;
		/**
		 * Editor height.
		 * default value : 100%
		 */
		height?: string;
	}

	/**
	 * content Style
	 */
	export interface IContainer {
		/**
		 * fontSize of contentbox
		 * default is "20px"
		 */
		fontSize: string;
		/**
		 * align of content text
		 * default is "left"
		 */
		align: string;
	}

	/**
	 * Editor Props Interface
	 */
	export interface IEditorProps {
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

	export type EditorProps = {
		rightButtons: BTNTYPE[];
		styleCache: IEditorStyle;
		/**
		 * onImageUploaded Event Callback
		 */
		onImageUploaded?: Function;
		/**
		 * onChange Event Callback
		 */
		onChange?: Function;
		/**
		 * markdownToHtml
		 */
		markdownToHTML?: Function;
	} & IEditorProps;

	export interface IEditorChildProps {
		editorState: EditorProps;
		setEditorState: React.Dispatch<React.SetStateAction<EditorProps>>;
	}

	export type EditorToolbarProps = {
		left: React.ReactElement[];
		right: React.ReactElement[];
	};

	export type EditorLeftButtonProps = {
		title: string;
		type: BTNTYPE;
		insertMarkdown: Function;
	};

	export type EditorRightButtonProps = {
		title: string;
		type: BTNTYPE;
		editorState: EditorProps;
		setEditorState: React.Dispatch<React.SetStateAction<EditorProps>>;
	};

	export function Editor(props: {
		editorProps: IEditorProps;
		markdownToHTML?: Function;
		onChange?: Function;
		onImageUploaded?: Function;
	}): JSX.Element;

	export function getMDVal(): string;
	export function getHTMLVal(): string;
	export function use(plugin: BTNTYPE | BTNTYPE[]): void;
	export function unuse(plugin: BTNTYPE | BTNTYPE[]): void;
}
