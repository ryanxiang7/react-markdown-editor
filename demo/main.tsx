import React from 'react';
import ReactDOM from 'react-dom/client';
import Editor, { BTNTYPE, getMDVal, getHTMLVal, use, unuse } from '@ryanxiang/react-markdown-editor';
import './index.css';
import '@ryanxiang/react-markdown-editor/dist/style.css';

function App() {
	let prop = {
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
		imageUrl: 'http://localhost:3001/upload/sayHello',
	};

	function getMarkdown() {
		console.log(getMDVal());
	}
	function getHTML() {
		console.log(getHTMLVal());
	}
	function unuseBold() {
		console.log(unuse('bold'));
	}
	function useBold() {
		console.log(use('bold'));
	}

	return (
		<div className='w-screen h-screen flex flex-col justify-center'>
			<div className='h-16 flex justify-center items-center'>
				<h1 className='font-bold text-6xl'>Editor</h1>
				<button onClick={getMarkdown}>getMarkdown</button>
				<button onClick={getHTML}>getHTML</button>
				<button onClick={useBold}>useBold</button>
				<button onClick={unuseBold}>unuseBold</button>
			</div>
			<div className='w-full flex-1 box-border'>
				<Editor
					editorProps={prop}
					onChange={(a: string, b: string) => {
						console.log(a, b);
					}}
					onImageUploaded={(a: string, b: string) => {
						console.log(a, b);
					}}
				/>
			</div>
		</div>
	);
}

ReactDOM.createRoot(document.querySelector('#root')).render(<App />);
