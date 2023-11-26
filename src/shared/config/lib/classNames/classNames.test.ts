import { classNames } from './classNames';

describe('classnames', () => {
    test('with only first param', () => {
        expect(classNames('someCls')).toBe('someCls');
    });
});

describe('classnames', () => {
    test('with additional class', () => {
        const expected = 'someCls class1 class2';
        expect(classNames('someCls', {}, ['class1', 'class2'])).toBe(expected);
    });
});

describe('classnames', () => {
    test('with mods class', () => {
        const expected = 'someCls class1 class2 hovered scrollable';
        expect(classNames(
            'someCls',
            { hovered: true, scrollable: true },
            ['class1', 'class2'],
        ))
            .toBe(expected);
    });
});

describe('classnames', () => {
    test('with mods class and false', () => {
        const expected = 'someCls class1 class2 hovered';
        expect(classNames(
            'someCls',
            { hovered: true, scrollable: false },
            ['class1', 'class2'],
        ))
            .toBe(expected);
    });
});

describe('classnames', () => {
    test('with mods class and undefined', () => {
        const expected = 'someCls class1 class2 hovered';
        expect(classNames(
            'someCls',
            { hovered: true, scrollable: undefined },
            ['class1', 'class2'],
        ))
            .toBe(expected);
    });
});
