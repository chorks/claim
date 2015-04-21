'use strict';

var test = require('ava');
var claim = require('./');

test('should be true', function (t) {
	claim.true(true);
	t.end();
});

test('should be false', function (t) {
	claim.false(false);
	t.end();
});

test('should be equal', function (t) {
	claim.is('foo', 'foo');
	t.end();
});

test('should not be equal', function (t) {
	claim.not('foo', 'bar');
	t.end();
});

test('should be same', function (t) {
	claim.same({a: 'a'}, {a: 'a'});
	claim.same(['a', 'b'], ['a', 'b']);
	t.end();
});

test('should not be same', function (t) {
	claim.notSame({a: 'a'}, {a: 'b'});
	claim.notSame(['a', 'b'], ['c', 'd']);
	t.end();
});

test('should not be an error', function (t) {
	claim.error(false);
	t.end();
});

test('should be an error', function (t) {
	try {
		claim.error(new Error());
	} catch (err) {
		t.assert(err);
	}

	t.end();
});