import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import buble from '@rollup/plugin-buble';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import config from './package.json' with { type: 'json' }

const year = new Date().getFullYear();
const banner = `
	/*!
	* ${config.name} - Basic environment detector
	* Version ${config.version}
	* https://github.com/${config.author}/env
	* MIT License - ${year}
	*/
`
const strict = false;
const plugins = [
	resolve(),
	commonjs(),
	buble(),
	babel({
		babelHelpers: 'bundled'
	})
];

export default [{
// env
	input: './src/env.mjs',
	output: [{
		// es
		format: 'es',
		file: './dist/env.js',
		strict: strict,
		banner: banner,
	}, {
		format: 'es',
		file: './dist/env.min.js',
		strict: strict,
		banner: banner,
		plugins: [terser()]
	}, {
		// cjs
		format: 'cjs',
		file: './dist/env.cjs',
		strict: strict,
		banner: banner,
	}, {
		format: 'cjs',
		file: './dist/env.min.cjs',
		strict: strict,
		banner: banner,
		plugins: [terser()]
	}, {
		// iife
		format: 'iife',
		file: './dist/env.iife.js',
		name: 'env',
		strict: strict,
		banner: banner,
	}, {
		format: 'iife',
		file: './dist/env.iife.min.js',
		name: 'env',
		strict: strict,
		banner: banner,
		plugins: [terser()]
	}, {
		// system
		format: 'system',
		file: './dist/env.system.js',
		strict: strict,
		banner: banner,
	}, {
		format: 'system',
		file: './dist/env.system.min.js',
		strict: strict,
		banner: banner,
		plugins: [terser()]
	}],
	plugins: plugins
}, {
	// envBrowser
	input: './src/envBrowser.mjs',
	output: [{
		// es
		format: 'es',
		file: './dist/extend/envBrowser.js',
		strict: strict,
		banner: banner
	}, {
		format: 'es',
		file: './dist/extend/envBrowser.min.js',
		strict: strict,
		banner: banner,
		plugins: [terser()]
	}, {
		// iife
		format: 'iife',
		name: 'envBrowser',
		file: './dist/extend/envBrowser.iife.js',
		banner: banner,
		strict: strict
	}, {
		format: 'iife',
		name: 'envBrowser',
		file: './dist/extend/envBrowser.iife.min.js',
		strict: strict,
		banner: banner,
		plugins: [terser()]
	}, {
		// system
		format: 'system',
		file: './dist/extend/envBrowser.system.js',
		banner: banner,
		strict: strict
	}, {
		format: 'system',
		file: './dist/extend/envBrowser.system.min.js',
		strict: strict,
		banner: banner,
		plugins: [terser()]
	}],
	plugins: plugins
}];
