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
		babelHelpers: 'bundled',
		presets: ['@babel/preset-env']
	})
];

export default [{
// env
	input: './src/env.mjs',
	output: [{
		// umd
		format: 'umd',
		file: './dist/env.js',
		name: 'env',
		strict: strict,
		banner: banner,
	}, {
		format: 'umd',
		file: './dist/env.min.js',
		name: 'env',
		strict: strict,
		banner: banner,
		plugins: [terser()]
	}, {
		// es
		format: 'es',
		file: './dist/env.es.js',
		strict: strict,
		banner: banner,
	}, {
		format: 'es',
		file: './dist/env.es.min.js',
		strict: strict,
		banner: banner,
		plugins: [terser()]
	}],
	plugins: plugins
}, {
	// envGlobal
	input: './src/envGlobal.mjs',
	output: [{
		// umd
		format: 'umd',
		name: 'envGlobal',
		file: './dist/envGlobal.js',
		strict: false,
		banner: banner,
	}, {
		format: 'umd',
		name: 'envGlobal',
		file: './dist/envGlobal.min.js',
		strict: false,
		banner: banner,
		plugins: [terser()]
	}, {
		// es
		format: 'es',
		file: './dist/envGlobal.es.js',
		strict: false,
		banner: banner
	}, {
		format: 'es',
		file: './dist/envGlobal.es.min.js',
		strict: false,
		banner: banner,
		plugins: [terser()]
	}]
},{
	// envBrowser
	input: './src/envBrowser.mjs',
	output: [{
		// umd
		format: 'umd',
		name: 'envBrowser',
		file: './dist/envBrowser.js',
		banner: banner,
		strict: strict
	}, {
		format: 'umd',
		name: 'envBrowser',
		file: './dist/envBrowser.min.js',
		strict: strict,
		banner: banner,
		plugins: [terser()]
	}, {
		// es
		format: 'es',
		file: './dist/envBrowser.es.js',
		strict: strict,
		banner: banner
	}, {
		format: 'es',
		file: './dist/envBrowser.es.min.js',
		strict: strict,
		banner: banner,
		plugins: [terser()]
	}],
	plugins: plugins
}];
