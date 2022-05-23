import React from 'react';
import ReactDOM from 'react-dom/client';
import Editor, { getMDVal, getHTMLVal, use, unuse, getEditorConfig, BTNTYPE } from '@ryanxiang/react-markdown-editor';
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import 'markdown-it-emoji';
import DOMPurify from 'dompurify';
import './index.css';
import '@ryanxiang/react-markdown-editor/dist/style.css';
import 'highlight.js/styles/atom-one-light.css';

// 自定义markdown解析器
function initMarked() {
	//  不使用插件
	let md = MarkdownIt({
		html: false, // 在源码中启用 HTML 标签
		xhtmlOut: false, // 使用 '/' 来闭合单标签 （比如 <br />）。
		// 这个选项只对完全的 CommonMark 模式兼容。
		breaks: false, // 转换段落里的 '\n' 到 <br>。
		langPrefix: 'hljs language-', // 给围栏代码块的 CSS 语言前缀。对于额外的高亮代码非常有用。
		linkify: false, // 将类似 URL 的文本自动转换为链接。

		// 启用一些语言中立的替换 + 引号美化
		typographer: true,

		// 双 + 单引号替换对，当 typographer 启用时。
		// 或者智能引号等，可以是 String 或 Array。
		//
		// 比方说，你可以支持 '«»„“' 给俄罗斯人使用， '„“‚‘'  给德国人使用。
		// 还有 ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] 给法国人使用（包括 nbsp）。
		quotes: '“”‘’',

		// 高亮函数，会返回转义的HTML。
		// 或 '' 如果源字符串未更改，则应在外部进行转义。
		// 如果结果以 <pre ... 开头，内部包装器则会跳过。
		highlight: function (code) {
			return hljs.highlightAuto(code).value;
		},
	});

	let emoji = require('markdown-it-emoji');
	let underLine = require('markdown-it-underline');
	md.use(emoji).use(underLine);

	return md;
}

let md = initMarked();

function renderHtml(markdownStr: string) {
	let html = md.render(markdownStr);
	let _html = DOMPurify.sanitize(html);
	return _html;
}

function App() {
	function getMarkdown() {
		console.log(getMDVal());
	}
	function getHTML() {
		console.log(getHTMLVal());
	}
	function unuseBold() {
		unuse(BTNTYPE.BOLD);
	}
	function useBold() {
		use(BTNTYPE.BOLD);
	}
	return (
		<div className='w-screen h-screen flex flex-col justify-center'>
			<div className='h-16 flex justify-center items-center'>
				<h1 className='font-bold text-6xl'>Editor</h1>
			</div>
			<div className='w-full flex justify-center'>
				<button className='mr-[5px]' onClick={getMarkdown}>
					getMarkdown
				</button>
				<button className='mr-[5px]' onClick={getHTML}>
					getHTML
				</button>
				<button className='mr-[5px]' onClick={useBold}>
					useBold
				</button>
				<button className='mr-[5px]' onClick={unuseBold}>
					unuseBold
				</button>
			</div>
			<div className='w-full flex-1 box-border'>
				<Editor
					editorProps={getEditorConfig()}
					onChange={(a: string, b: string) => {
						console.log(a, b);
					}}
					markdownToHTML={renderHtml}
					onImageUploaded={(a: string, b: string) => {
						console.log(a, b);
					}}
				/>
			</div>
		</div>
	);
}

ReactDOM.createRoot(document.querySelector('#root')).render(<App />);
