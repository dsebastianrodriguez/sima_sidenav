import * as CryptoJS from "crypto-js";
import { environment } from "src/environments/environment";

const secretKey = CryptoJS.enc.Utf8.parse(environment.keyEncrypt.padEnd(32, ' ')); // Asegura que la clave tenga 32 caracteres

export const encrypt = (data: string): string => {
    return CryptoJS.AES.encrypt(data, secretKey, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    }).toString();
}

export const decrypt = <T>(valueEncrypt: string): T | null => {
    const valueDecrypt = CryptoJS.AES.decrypt(valueEncrypt, secretKey, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    }).toString(CryptoJS.enc.Utf8);
    if (!valueDecrypt) {
        return null;
    }
    return JSON.parse(valueDecrypt) as T;
}