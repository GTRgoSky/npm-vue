// eslint-disable-next-line no-console
console.log(process.env.NODE_ENV);
let webpack = require('webpack');
module.exports = {
	runtimeCompiler: true,
	configureWebpack: {
		module: {
			
		},
		plugins: [
			new webpack.ProvidePlugin({
				'window.Quill': 'quill/dist/quill.js',
				'Quill': 'quill/dist/quill.js'
			}),
		]
	}
};
 