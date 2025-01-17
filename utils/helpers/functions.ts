import Cookies from 'js-cookie';
import { AUTHTOKEN } from '../constants';
import { TokenModel } from '@/models/TokenModel';
import jwt from 'jsonwebtoken';

export const getToken = () => {
    return Cookies.get(`${AUTHTOKEN}`);
}

export const decodeAndVerifyToken = (token: string | undefined): TokenModel | null => {
  if (!token) return null;
  const decoded = jwt.decode(token) as TokenModel | null;
  if (decoded?.exp && decoded.exp > Math.floor(Date.now() / 1000)) {
    return decoded;
  }
  return null;
}

export function isErrorPayload(payload: any): payload is { error: any } {
    return payload && typeof payload.error !== "undefined";
}