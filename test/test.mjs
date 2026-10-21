import env from '../src/env.mjs';
import '../src/module/global.mjs';

let fail = 0;

console.log(`\nTEST\n`);
console.group('# env\n');
  console.log([
    "typeof env === 'object'",
    (typeof env === 'object' || fail++)
  ]);
  console.log([
    'env.browser === false',
    (env.browser === false || fail++)
  ]);
  console.log([
    'env.worker === false',
    (env.worker === false || fail++)
  ]);
  console.log([
    'env.cli === true',
    (env.cli === true || fail++)
  ]);
console.groupEnd();

console.log('');

console.group('# env.global\n');
  console.log([
    "typeof env.global === 'object'",
    (typeof env.global === 'object' || fail++)
  ]);
  console.log([
    "env.global === globalThis",
    (env.global === globalThis || fail++)
  ]);
  console.log([
    "env.global === global",
    (env.global === global || fail++)
  ]);
console.groupEnd();

console.log('\nRESULT\n');
console.log('> fail: ', fail)