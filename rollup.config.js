import resolve from '@rollup/plugin-node-resolve';
import buble from '@rollup/plugin-buble';

const dir = {
	in: './src',
	out: './dist'
};
const src = [
	dir.in+'/env.js',
	dir.in+'/envGlobal.js'
];

export default [{
	input: src,
	output: {
		dir: dir.out+'/cjs',
		format: 'cjs',
		strict: false,
		preserveModules: true,
		preserveModulesRoot: dir.in,
		entryFileNames: '[name].cjs'
	},
	plugins: [ resolve() ]
}, {
	input: src,
	output: {
		dir: dir.out+'/mjs',
		format: 'es',
		strict: false,
		preserveModules: true,
		preserveModulesRoot: dir.in,
		entryFileNames: '[name].mjs'
	},
	plugins: [ resolve() ]
}, {
	input: src,
	output: {
		dir: dir.out+'/system',
		format: 'system',
		strict: false,
		preserveModules: true,
		preserveModulesRoot: dir.in,
	},
	plugins: [
		resolve(),
		buble()
	]
}];