const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const buble = require('@rollup/plugin-buble');
const plugins = [
	resolve(),
	commonjs(),
	buble()
]

module.exports = [{
	// IIFE
	input: './src/env.js',
	output: {
		file: './dist/env.js',
		format: 'iife',
		name: 'env',
		strict: false
	},
	plugins: plugins
}, {
	input: './src/envGlobal.js',
	output: {
		file: './dist/envGlobal.js',
		format: 'iife',
		name: 'envGlobal',
		strict: false
	},
	plugins: plugins
}, {
	// cjs
	input: './src/env.js',
	output: {
		file: './dist/env.cjs',
		format: 'cjs',
		strict: false
	},
	plugins: plugins
}, {
	input: './src/envGlobal.js',
	output: {
		file: './dist/envGlobal.cjs',
		format: 'cjs',
		strict: false
	},
	plugins: plugins
}, {
	// system
	input: './src/env.js',
	output: {
		file: './dist/system/env.js',
		format: 'system',
		strict: false
	},
	plugins: plugins
}, {
	input: './src/envGlobal.js',
	output: {
		file: './dist/system/envGlobal.js',
		format: 'system',
		strict: false
	},
	plugins: plugins
}];