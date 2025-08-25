import resolve from '@rollup/plugin-node-resolve';
import buble from '@rollup/plugin-buble';

export default {
	input: [
		'./src/envContext.js',
		'./src/envGlobal.js'
	],
	output: [{
		dir: './dist/system',
		format: 'system',
		strict: false,
		preserveModules: true,
		preserveModulesRoot: './src'
	}, {
		dir: './dist/cjs',
		format: 'cjs',
		strict: false,
		preserveModules: true,
		preserveModulesRoot: './src'
	}],
	plugins: [
		resolve(),
		buble()
	]
};