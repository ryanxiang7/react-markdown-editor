"use strict";
var _a;
exports.__esModule = true;
exports.right = exports.left = exports.InlineBtn = exports.BTNTYPE = void 0;
var BTNTYPE;
(function (BTNTYPE) {
    BTNTYPE["QUOTE"] = "quote";
    BTNTYPE["H1"] = "h1";
    BTNTYPE["H2"] = "h2";
    BTNTYPE["H3"] = "h3";
    BTNTYPE["BOLD"] = "bold";
    BTNTYPE["ITALIC"] = "italic";
    BTNTYPE["DELETE"] = "delete";
    BTNTYPE["UNDERLINE"] = "underLine";
    BTNTYPE["INLINECODE"] = "inlineCode";
    BTNTYPE["CODEBLOCK"] = "codeBlock";
    BTNTYPE["LINK"] = "link";
    BTNTYPE["NEWLINE"] = "newLine";
    BTNTYPE["ORDEREDLIST"] = "orderedList";
    BTNTYPE["UNORDERLIST"] = "unorderedList";
    BTNTYPE["IMAGE"] = "image";
    BTNTYPE["TABLE"] = "table";
    BTNTYPE["PREVIEW_MODE"] = "preview";
    BTNTYPE["EDIT_MODE"] = "edit";
    BTNTYPE["SYNC_MODE"] = "sync";
    BTNTYPE["MAXIMAZE"] = "maximize";
    BTNTYPE["MINIMAZE"] = "minimize";
})(BTNTYPE = exports.BTNTYPE || (exports.BTNTYPE = {}));
exports.InlineBtn = (_a = {},
    _a[BTNTYPE.H1] = ['# ', ''],
    _a[BTNTYPE.H2] = ['## ', ''],
    _a[BTNTYPE.H3] = ['### ', ''],
    _a[BTNTYPE.BOLD] = ['**', '**'],
    _a[BTNTYPE.ITALIC] = ['*', '*'],
    _a[BTNTYPE.DELETE] = ['~~', '~~'],
    _a[BTNTYPE.UNDERLINE] = [' _', '_ '],
    _a[BTNTYPE.INLINECODE] = ['`', '`'],
    _a[BTNTYPE.CODEBLOCK] = ['```\n', '\n```'],
    _a[BTNTYPE.LINK] = ['[', ']()'],
    _a[BTNTYPE.NEWLINE] = ['\n\n', '---\n\n'],
    _a);
exports.left = [
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
exports.right = [BTNTYPE.SYNC_MODE, BTNTYPE.MAXIMAZE];
