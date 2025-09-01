import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import buble from '@rollup/plugin-buble';

const plugins = [
	resolve(),
	commonjs(),
	buble()
];

export default [{
	input: './src/env.mjs',
	output: {
		file: './dist/env.js',
		format: 'es',
		strict: false
	},
	plugins: plugins
}, {
	input: './src/env.mjs',
	output: {
		file: './dist/env.iife.js',
		format: 'iife',
		name: 'env',
		strict: false
	},
	plugins: plugins
}, {
	input: './src/env.mjs',
	output: {
		file: './dist/env.cjs',
		format: 'cjs',
		strict: false
	},
	plugins: plugins
}, {
	input: './src/env.mjs',
	output: {
		file: './dist/env.system.js',
		format: 'system',
		strict: false
	},
	plugins: plugins
},];