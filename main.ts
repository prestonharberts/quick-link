import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting, editorEditorField } from 'obsidian';

export default class QuickLink extends Plugin {
	async onload() {
		console.log('loading Quick Link plugin')
		// this adds an editor command that can perform some operation on the current editor instance
		this.addCommand({
			id: 'quick-link',
			name: 'Quick Link',
			editorCallback: (editor: Editor, view: MarkdownView) => {
				console.log(editor.getSelection());
				this.openPrompt(editor)
			}
                });
        }

	openPrompt(editor: Editor) {
		const modal = new LinkModal(this.app, editor);
		modal.open();
	}
}

class LinkModal extends Modal {
	editor: Editor
	onSubmit: (result: string) => void;
	constructor(app: App, editor: Editor) {
		super(app);
		this.editor = editor
	}

	onOpen() {
		const { contentEl } = this;

		contentEl.createEl('h5', { text: 'Enter alias' });
		contentEl.style.marginTop = '-16px';

		const inputEl = contentEl.createEl('input');
		inputEl.type = 'text';
		inputEl.placeholder = 'Example: Alias → [[alias|Alias]]';
		inputEl.style.textAlign = 'center';
		inputEl.style.width = '100%';
		inputEl.style.margin = 'auto';

		inputEl.addEventListener('keydown', async (event) => {
			if (event.ctrlKey && event.key === 'Enter') {
				event.preventDefault(); // Prevent the default behavior
				const alias = inputEl.value;
				await this.insertLink(alias, 'plural');
				this.close();
			}
			else if (!event.ctrlKey && event.key === 'Enter') {
				event.preventDefault(); // Prevent the default behavior
				const alias = inputEl.value;
				await this.insertLink(alias, 'singular');
				this.close();
			}
		});

	}

	async insertLink(alias: string, ending: string) {
		console.log('inserting link');
  		let filename: string = alias;
  		filename = filename.toLowerCase();
  		filename = filename.replace(/ /g, '-');
  		filename = filename.replace(/'/g, '');
  		filename = filename.replace(/:/g, '');
		let link = '';
		if (ending === 'singular')
			link = `[[${filename}|${alias}]]`;
		else if (ending === 'plural')
			link = `[[${filename}s|${alias}]]`;

		this.editor.replaceSelection(link);
	}

	onClose() {
		const { contentEl } = this;
		// let { contentEl } = this;
		contentEl.empty();
	}
}
