/**
 * @license Copyright (c) 2014-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices.js';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import Markdown from '@ckeditor/ckeditor5-markdown-gfm/src/markdown.js';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js';
import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting.js';
import Table from '@ckeditor/ckeditor5-table/src/table.js';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';
import GeneralHtmlSupport from '@ckeditor/ckeditor5-html-support/src/generalhtmlsupport';
import {Plugin} from "@ckeditor/ckeditor5-core";

class allowHTML extends Plugin {
	init() {
		const editor = this.editor;
		editor.data.processor.keepHtml('figure')
		editor.data.processor.keepHtml('iframe')
	}
}

export default class ClassicEditor extends ClassicEditorBase {}


// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Autoformat,
	BlockQuote,
	Bold,
	CloudServices,
	CodeBlock,
	Essentials,
	Heading,
	Indent,
	Italic,
	Link,
	List,
	Markdown,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	SourceEditing,
	Table,
	TableToolbar,
	TextTransformation,
	allowHTML,
	GeneralHtmlSupport
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'link',
			'bulletedList',
			'numberedList',
			'|',
			'outdent',
			'indent',
			'|',
			'codeBlock',
			'blockQuote',
			'insertTable',
			'mediaEmbed',
			'|',
			'undo',
			'redo',
			'|',
			'sourceEditing'
		]
	},
	language: 'nb',
	image: {
		toolbar: [
			'imageTextAlternative',
			'imageStyle:inline',
			'imageStyle:block',
			'imageStyle:side'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	htmlSupport: {
		allow: [
			{
				name: /^(figure|iframe|a)$/,
				attributes: true,
				classes: true,
				styles: true
			}
		]
	},
	mediaEmbed: {
		previewsInData: true,
		providers: [
			{
				name: 'youtube',
				// Match all URLs or just the ones you need:
				url: /.+(youtube).+/,

				html: match => {
					const url = match[ 0 ];
					var iframeUrl = url.replace('watch?v=', 'embed/')

					return (
						// If you need, set maxwidth and other styles for 'iframely-embed' class - it's yours to customize
						`<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;">
            			<iframe src="${iframeUrl}" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="">test</iframe>
        				</div>`
					);
				}
			}
		]
	}
};
