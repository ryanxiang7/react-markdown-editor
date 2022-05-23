import React from 'react';
import { BTNTYPE } from './utils/var';
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
export declare type EditorProps = {
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
export declare type EditorToolbarProps = {
    left: React.ReactElement[];
    right: React.ReactElement[];
};
export declare type EditorLeftButtonProps = {
    title: string;
    type: BTNTYPE;
    insertMarkdown: Function;
};
export declare type EditorRightButtonProps = {
    title: string;
    type: BTNTYPE;
    editorState: EditorProps;
    setEditorState: React.Dispatch<React.SetStateAction<EditorProps>>;
};
