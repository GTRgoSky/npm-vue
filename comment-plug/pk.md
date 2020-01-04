{
	"name": "my-banner",
	"version": "0.1.0",
	"private": true,
	"scripts": {
		"start": "yarn serve",
		"serve": "vue-cli-service serve",
		"build": "vue-cli-service build",
		"lint": "vue-cli-service lint",
		"package": "vue-cli-service build --target lib --name comment-plug ./src/components/commentPlug/index.js"
	},
	"dependencies": {
		"core-js": "^3.4.3",
		"less": "^3.10.3",
		"less-loader": "^5.0.0",
		"qui": "^0.0.2",
		"quill-image-drop-module": "^1.0.3",
		"quill-image-resize-module": "^3.0.0",
		"style-loader": "^1.1.2",
		"textarea-caret": "^3.1.0",
		"vue": "^2.6.10",
		"vue-at": "2.x",
		"vue-loader": "^15.8.3",
		"vue-quill-editor": "^3.0.6",
		"vue-template-compiler": "^2.6.11"
	},
	"devDependencies": {
		"@vue/cli-plugin-babel": "^4.1.0",
		"@vue/cli-plugin-eslint": "^4.1.0",
		"@vue/cli-service": "^4.1.0",
		"babel-eslint": "^10.0.3",
		"eslint": "^5.16.0",
		"eslint-plugin-vue": "^5.0.0",
		"node-sass": "^4.13.0",
		"sass-loader": "^8.0.0"
	},
	"eslintConfig": {
		"root": true,
		"env": {
			"node": true
		},
		"extends": [
			"plugin:vue/essential",
			"eslint:recommended"
		],
		"rules": {
			"no-console": "off",
			"no-unused-vars": [
				2,
				{
					"vars": "local",
					"args": "none"
				}
			]
		},
		"parserOptions": {
			"parser": "babel-eslint"
		}
	},
	"browserslist": [
		"> 1%",
		"last 2 versions"
	],
	"main": "./dist/comment-plug.common.js",
	"files": [
		"dist/*",
		"src/*",
		"public/*",
		"*.json",
		"*.js"
	]
}
