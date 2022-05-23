import Editor, { getMDVal, getHTMLVal, use, unuse } from './editor';
import { BTNTYPE } from './utils/var';
import { IEditorProps } from './types';
import './style/main.css';

export function getEditorConfig(): IEditorProps {
	return {
		editorStyle: {
			width: '1200px',
			height: '600px',
		},
		leftButtons: [
			BTNTYPE.QUOTE,
			BTNTYPE.H1,
			BTNTYPE.H2,
			BTNTYPE.H3,
			BTNTYPE.BOLD,
			BTNTYPE.ITALIC,
			BTNTYPE.DELETE,
			BTNTYPE.UNDERLINE,
			BTNTYPE.LINK,
			BTNTYPE.INLINECODE,
			BTNTYPE.CODEBLOCK,
			BTNTYPE.NEWLINE,
			BTNTYPE.ORDEREDLIST,
			BTNTYPE.UNORDERLIST,
			BTNTYPE.IMAGE,
			BTNTYPE.TABLE,
		],
		editorMode: 'sync',
		markdownClass: 'prose prose-a:text-blue-400 hover:prose-a:opacity-60',
		previewClass: 'prose prose-a:text-blue-400 hover:prose-a:opacity-60',
		contentMD: '',
		contentHTML: '',
		tableRow: 4,
		tableCol: 6,
	};
}

export { BTNTYPE, use, unuse, getMDVal, getHTMLVal };

export default Editor;
