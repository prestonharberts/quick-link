# Quick Verse Link

This is a sample plugin for [Obsidian](https://obsidian.md) that inserts verse links quickly into Obsidian by allowing you to enter a verse reference into a modal form. Quick Verse Link is designed to be used with my other project [Bible Gateway to Obsidian](https://github.com/prestonharberts/biblegateway-to-obsidian) that downloads the Bible from BibleGateway.com into Markdown files to be imported into Obsidian. This plugin uses the same file-naming scheme that Bible Gateway to Obsidian uses.

## How to use

Bind the hotkey to any command you would like (preferably one that is quick to access; I use Ctrl+H). When you press the hotkey, a menu will appear allowing you to enter a verse reference. Below are some examples and what they would transform into:

```
phil 4:13       // [[phil4#13|Philippians 4:13]]
john 3:16-18    // [[john3#16|John 3:16-18]]
v phil 4:13     // [[phil4#13|verse 13]]
V phil 4:13     // [[phil4#13|Verse 13]]
v john 3:16-18  // [[john3#16|verses 16-18]]
V john 3:16-18  // [[john3#16|Verses 16-18]]
rev 22          // [[rev22|Revelation 22]]
```

The following shows some different syntax that also works:

```
// only spaces
phil 4 13
john 3 16 18
v phil 4 13
V phil 4 13
v john 3 16 18
V john 3 16 18
rev 22

// less spaces
phil4 13
john3 16 18
vphil4 13
Vphil4 13
vjohn3 16 18
Vjohn3 16 18
rev22

// semicolons
phil4;13
john3;16;18
vphil4;13
Vphil4;13
vjohn3;16;18
Vjohn3;16;18
rev;22

// mix-and-match
:phil-4;13
john3-16;18;
v:-phil-;4;:--:13
-V;phil4-13
;;:vjohn3:16:18
-V-john3-16-18-
;rev-:;:22-
```

## How to install

### Manually installing the plugin

- Clone this repo.
- Make sure your NodeJS is at least v16 (`node --version`).
- `npm i` or `yarn` to install dependencies.
- `npm run dev` to start compilation in watch mode.
- Copy over `main.js`, `styles.css`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/your-plugin-id/`.

## API documentation

See https://github.com/obsidianmd/obsidian-api
