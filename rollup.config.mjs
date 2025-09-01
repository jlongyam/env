import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import buble from '@rollup/plugin-buble';

const plugins = [
	resolve(),
	commonjs(),
	buble()
];

export default [ {
	// default: es
	input: './src/env.mjs',
	output: {
		file: './dist/env.js',
		format: 'es',
		strict: false
	},
	plugins: plugins
}, {
	input: './src/envGlobal.mjs',
	output: {
		file: './dist/envGlobal.js',
		format: 'es',
		strict: false
	},
	plugins: plugins
}, {
	// legacy: iife
	input: './src/env.mjs',
	output: {
		file: './dist/iife/env.js',
		format: 'iife',
		name: 'env',
		strict: false
	},
	plugins: plugins
}, {
	input: './src/envGlobal.mjs',
	output: {
		file: './dist/iife/envGlobal.js',
		format: 'iife',
		name: 'envGlobal',
		strict: false
	},
	plugins: plugins
}, {
	// legacy: cjs
	input: './src/env.mjs',
	output: {
		file: './dist/cjs/env.js',
		format: 'cjs',
		strict: false
	},
	plugins: plugins
}, {
	input: './src/envGlobal.mjs',
	output: {
		file: './dist/cjs/envGlobal.js',
		format: 'cjs',
		strict: false
	},
	plugins: plugins
}, {
	// system
	input: './src/env.mjs',
	output: {
		file: './dist/system/env.js',
		format: 'system',
		strict: false
	},
	plugins: plugins
}, {
	input: './src/envGlobal.mjs',
	output: {
		file: './dist/system/envGlobal.js',
		format: 'system',
		strict: false
	},
	plugins: plugins
}];