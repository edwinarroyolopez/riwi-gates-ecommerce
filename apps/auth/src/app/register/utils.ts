export function isValidPassword(password:string) {
    const pattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{12,}$/;
    return pattern.test(password);
}