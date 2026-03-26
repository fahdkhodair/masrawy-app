import jwt from 'jsonwebtoken';


const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || '123' ;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || '333';

export const generateToken = (payload, type = 'access') => {
    let secret;
    let expiresIn;

    if (type === 'access') {
        secret = ACCESS_TOKEN_SECRET;
        expiresIn = '1h';
    } else if (type === 'refresh') {
        secret = REFRESH_TOKEN_SECRET;
        expiresIn = '7d';
    } else {
        throw new Error('Invalid token type');
    }

    return jwt.sign(payload, secret, { expiresIn });
}

export const verifyToken = (token, type = 'access') => {
    const secret = type === 'access' ? ACCESS_TOKEN_SECRET : REFRESH_TOKEN_SECRET;
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        return null;
    }
}

