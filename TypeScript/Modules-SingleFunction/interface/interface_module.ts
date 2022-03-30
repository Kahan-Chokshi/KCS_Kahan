interface IValidator {
    isValid(s: string, regex:RegExp, minlength: number, maxlength?: number): boolean
}

export { IValidator };