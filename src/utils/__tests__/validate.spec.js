import { required, minLength3 } from '../validate';

describe('utils/validate', () => {
    it('required()', () => {
        test('should return true if no value was passed', () => {
            expect(required('')).toBe('Required');
        });
        test('should return nothing if value was passed', () => {
            expect(required('superman')).toBeFalsy();
        });
    });
    it('minLength3()', () => {
        test('should return error if min length is less than 3', () => {
            expect(minLength3('ba')).toBe('Must have at least 3 characters or more');
        });
        test('should return nothing if value has 3 or more characters', () => {
            expect(required('batman')).toBeFalsy();
        });
    });
});
