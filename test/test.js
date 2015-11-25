/* eslint-env node, mocha */

(function executeTest() {
  'use strict';

  let assert = require('power-assert');
  let Checker = require('jscs');

  let jscsConfig = require('..');

  function isObject(target) {
    return typeof target === 'object' && target !== null &&
      Object.prototype.toString.call(target).slice(8, -1) === 'Object';
  }

  function trimIndent(str) {
    let indentLength = /^ +/.exec(str.split(/\r?\n/)[1])[0].length;

    return str.replace(new RegExp(`^ {${indentLength}}`, 'gm'), '').trim();
  }

  describe('basic', () => {
    it('Check jscsConfig object', () => {
      assert(isObject(jscsConfig));
      assert(Boolean(Object.keys(jscsConfig).length));
    });
  });

  let checker = new Checker();

  checker.registerDefaultRules();
  checker.configure(jscsConfig);

  describe('applied', () => {
    it('Validate jscsConfig', () => {
      let code = trimIndent(`
        (function executeBasic() {
          'use strict';

          let num = 0;

          return num;
        }());
      `);

      assert(checker.checkString(`${code}\n`).getErrorList().length === 0);

      let res = checker.checkString(code).getErrorList();

      assert(res.length === 1);
      assert(res[0].rule === 'requireLineFeedAtFileEnd');
    });
  });
}());
