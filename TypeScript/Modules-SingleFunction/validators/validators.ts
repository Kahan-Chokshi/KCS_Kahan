import { IValidator } from '../interface/interface_module'

export class ValidatorCLS implements IValidator {
    isValid(s: string, regex:RegExp, minlength: number, maxlength?: number): boolean {
        return maxlength? ( s.length >= minlength && maxlength >= s.length && regex.test(s)) : (minlength === s.length && regex.test(s));
    }
} 