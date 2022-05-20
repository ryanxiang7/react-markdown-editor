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

export const InlineBtn: any = {
	[BTNTYPE.H1]: ['# ', ''],
	[BTNTYPE.H2]: ['## ', ''],
	[BTNTYPE.H3]: ['### ', ''],
	[BTNTYPE.BOLD]: ['**', '**'],
	[BTNTYPE.ITALIC]: ['*', '*'],
	[BTNTYPE.DELETE]: ['~~', '~~'],
	[BTNTYPE.UNDERLINE]: [' _', '_ '],
	[BTNTYPE.INLINECODE]: ['`', '`'],
	[BTNTYPE.CODEBLOCK]: ['```\n', '\n```'],
	[BTNTYPE.LINK]: ['[', ']()'],
	[BTNTYPE.NEWLINE]: ['\n\n', '---\n\n'],
};

export let left: BTNTYPE[] = [
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
];
export let right: BTNTYPE[] = [BTNTYPE.SYNC_MODE, BTNTYPE.MAXIMAZE];

/**
 * use 接口
 * @param type BTNTYPE | BTNTYPE[]
 */
export function use(type: BTNTYPE | BTNTYPE[]) {
	if (Array.isArray(type)) {
		left = [...type];
	} else {
		left.push(type);
	}
}

/**
 * unuse 接口
 * @param type BTNTYPE | BTNTYPE[]
 */
export function unuse(type: BTNTYPE | BTNTYPE[]) {
	if (Array.isArray(type)) {
		left = left.filter((item) => {
			return type.indexOf(item) !== -1;
		});
	} else {
		left = left.filter((item) => {
			return item !== type;
		});
	}
}
