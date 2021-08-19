const assert = require('assert');
const sinon = require('sinon');

const exercise1 = require('./index');

const VISUAL = 'Visual';
const NUTS = 'Nuts';
const VISUALNUTS = `${VISUAL} ${NUTS}`;

describe('Exercise1 Tests', () => {

    describe('Validate Rules', () => {

        it('Must return word Visual when the number is divisible by 3', () => {
            assert.equal(exercise1.rules(3), VISUAL);
            assert.equal(exercise1.rules(6), VISUAL);
            assert.equal(exercise1.rules(9), VISUAL);
        });

        it('Must return word Nuts when the number is divisible by 5', () => {
            assert.equal(exercise1.rules(5), NUTS);
            assert.equal(exercise1.rules(25), NUTS);
            assert.equal(exercise1.rules(35), NUTS);
        });

        it('Must return phrase Visual Nuts when the number is divisible by 3 and 5', () => {
            assert.equal(exercise1.rules(15), VISUALNUTS);
            assert.equal(exercise1.rules(45), VISUALNUTS);
            assert.equal(exercise1.rules(90), VISUALNUTS);
        });

        it('Must return number when the number is not divisible by 3 and 5', () => {
            assert.equal(exercise1.rules(8), 8);
            assert.equal(exercise1.rules(16), 16);
            assert.equal(exercise1.rules(52), 52);
        });

    });

    describe('Validate Calls', () => {
        it('Must count call for rules method as expected', () => {
            var spy = sinon.spy(exercise1,'rules');
            exercise1.print(1,2, false);
            sinon.assert.calledTwice(spy);
        });
    });
});