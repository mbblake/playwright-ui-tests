export const USER_DATA = {
    standardUser: {
        username: process.env.STANDARD_USER_USERNAME!,
        password: process.env.STANDARD_USER_PASSWORD!,
    },
    lockedOutUser: {
        username: process.env.LOCKED_OUT_USER_USERNAME!,
        password: process.env.LOCKED_OUT_USER_PASSWORD!,
    },
};
