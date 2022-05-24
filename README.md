# react-markdown-editor

A markdown editor based on React18.

# Start

Use npm as package manager:

```
npm install --save @ryanxiang/react-markdown-editor
```

Use pnpm as package manager:

```
pnpm add --save @ryanxiang/react-markdown-editor
```

Use yarn as package manager:

```
yarn add --save @ryanxiang/react-markdown-editor
```

In your `tsx` file:

```tsx
import Editor, {getEditorConfig, BTNTYPE } from '@ryanxiang/react-markdown-editor';
import '@ryanxiang/react-markdown-editor/dist/style.css';

...
  <Editor editorProps={getEditorConfig()} />
...

```

# Props

**Editor Props**

| Props           | Description                                                                                                                                                           | Type         | Accepted Values | Default     |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------- | ----------- |
| onImageUploaded | Callback when Image has been uploaded ,`fileName` and `path` will be passed in. Your upload interface was expected to return data like {fileName:string,path:string}. | Function     | --              | ()=>{}      |
| onChange        | Callback when Editor content changes,`markdownStr` and `htmlStr` will be passed in.                                                                                   | Function     | --              | ()=>{}      |
| markdownToHTML  | Convert markdown to html,you can use markdown-it、marked etc                                                                                                          | Function     | --              | markdown-it |
| editorProps     | style、toolbar buttons、table... see more                                                                                                                             | IEditorProps | --              | --          |

**editorProps**

| Props         | Description                                | Type         | Accepted Values               | Default                                                |
| ------------- | ------------------------------------------ | ------------ | ----------------------------- | ------------------------------------------------------ |
| editorStyle   | Configuration editor style                 | IEditorStyle | React.CSSProperties,undefined | undefined                                              |
| markdownClass | Configuration markdown style               | string       | ---                           | 'prose prose-a:text-blue-400 hover:prose-a:opacity-60' |
| previewClass  | Configuration preview style                | string       | ---                           | 'prose prose-a:text-blue-400 hover:prose-a:opacity-60' |
| leftButtons   | Configuration toolbar use or unuse buttons | BTNTYPE[]    | ---                           | all buttons                                            |
| editorMode    | Configuration editor mode                  | string       | 'sync'、'edit'、'preview'     | 'sync'                                                 |
| tableRow      | Configuration table button default rows    | number       | ---                           | 4                                                      |
| tableCol      | Configuration table button default cols    | number       | ---                           | 6                                                      |
| placeHolder   | Configuration placeHolder                  | string       | ---                           | ---                                                    |
| imageUrl      | Configuration upload url                   | string       | ---                           | ---                                                    |

**BTNTYPE**
| Name                 | Value           |
| -------------------- | --------------- |
| BTNTYPE.QUOTE        | 'quote'         |
| BTNTYPE.H1           | 'h1'            |
| BTNTYPE.H2           | 'h2'            |
| BTNTYPE.H3           | 'h3'            |
| BTNTYPE.BOLD         | 'bold'          |
| BTNTYPE.ITALIC       | 'italic'        |
| BTNTYPE.DELETE       | 'delete'        |
| BTNTYPE.UNDERLINE    | 'underLine'     |
| BTNTYPE.INLINECODE   | 'inlineCode'    |
| BTNTYPE.CODEBLOCK    | 'codeBlock'     |
| BTNTYPE.LINK         | 'link'          |
| BTNTYPE.NEWLINE      | 'newLine'       |
| BTNTYPE.ORDEREDLIST  | 'orderedList'   |
| BTNTYPE.UNORDERDLIST | 'unorderedList' |
| BTNTYPE.IMAGE        | 'image'         |
| BTNTYPE.TABLE        | 'table'         |
| BTNTYPE.PREVIEW_MODE | 'preview'       |
| BTNTYPE.EDIT_MODE    | 'edit'          |
| BTNTYPE.SYNC_MODE    | 'sync'          |
| BTNTYPE.MAXIMAZE     | 'maximize'      |
| BTNTYPE.MINIMAZE     | 'minimize'      |


Github repo : [react-markdwon-editor](https://github.com/ryanxiang7/react-markdown-editor)
