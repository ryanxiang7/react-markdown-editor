import React from 'react';
import { BTNTYPE } from './utils/var';

/**
 * Editor Style
 */
export interface IEditorStyle {
	[x: string]: string | number;
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

	placeHolder?: string;

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
	/**
	 * content Md
	 */
	contentMD: string;

	/**
	 * content html
	 */
	contentHTML: string;

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
