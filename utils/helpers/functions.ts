import Cookies from 'js-cookie';
import { AUTHTOKEN } from '../constants';
import { TokenModel } from '@/models/TokenModel';
import jwt from 'jsonwebtoken';
import { ShopProductModel } from '@/models/ShopProductModel';

export const GetToken = () => {
    return Cookies.get(`${AUTHTOKEN}`);
}

export const DecodeAndVerifyToken = (token: string | undefined): TokenModel | null => {
  if (!token) return null;
  const decoded = jwt.decode(token) as TokenModel | null;
  if (decoded?.exp && decoded.exp > Math.floor(Date.now() / 1000)) {
    return decoded;
  }
  return null;
}

export function IsErrorPayload(payload: any): payload is { error: any } {
    return payload && typeof payload.error !== "undefined";
}

export const GetUniqueValues = (products: ShopProductModel[], field: keyof ShopProductModel): any[] => {
  const allValues = products?.flatMap(product => product[field] || []);
  const uniqueValues = Array.from(new Set(allValues));
  return uniqueValues;
};