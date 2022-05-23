"use strict";
exports.__esModule = true;
exports.getHTMLVal = exports.getMDVal = exports.unuse = exports.use = exports.BTNTYPE = exports.getEditorConfig = void 0;
var editor_1 = require("./editor");
exports.getMDVal = editor_1.getMDVal;
exports.getHTMLVal = editor_1.getHTMLVal;
exports.use = editor_1.use;
exports.unuse = editor_1.unuse;
var var_1 = require("./utils/var");
exports.BTNTYPE = var_1.BTNTYPE;
require("./style/main.css");
function getEditorConfig() {
    return {
        editorStyle: {
            width: '1200px',
            height: '600px'
        },
        leftButtons: [
            var_1.BTNTYPE.QUOTE,
            var_1.BTNTYPE.H1,
            var_1.BTNTYPE.H2,
            var_1.BTNTYPE.H3,
            var_1.BTNTYPE.BOLD,
            var_1.BTNTYPE.ITALIC,
            var_1.BTNTYPE.DELETE,
            var_1.BTNTYPE.UNDERLINE,
            var_1.BTNTYPE.LINK,
            var_1.BTNTYPE.INLINECODE,
            var_1.BTNTYPE.CODEBLOCK,
            var_1.BTNTYPE.NEWLINE,
            var_1.BTNTYPE.ORDEREDLIST,
            var_1.BTNTYPE.UNORDERLIST,
            var_1.BTNTYPE.IMAGE,
            var_1.BTNTYPE.TABLE,
        ],
        editorMode: 'sync',
        markdownClass: 'prose prose-a:text-blue-400 hover:prose-a:opacity-60',
        previewClass: 'prose prose-a:text-blue-400 hover:prose-a:opacity-60',
        contentMD: '',
        contentHTML: '',
        tableRow: 4,
        tableCol: 6
    };
}
exports.getEditorConfig = getEditorConfig;
exports["default"] = editor_1["default"];
