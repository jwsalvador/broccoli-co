export const required = value => !value && 'Required';

export const email = value =>
    value && !value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i) && 'Invalid email';

export const minLength = min => value =>
    value && value.length < min && `Must have at least ${min} characters or more`;

export const minLength3 = minLength(3);

// export const minLength = (value) =>
