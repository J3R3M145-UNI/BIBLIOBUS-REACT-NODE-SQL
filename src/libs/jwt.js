import jwt from "jsonwebtoken"
import { TOKEN_SECRET } from "../config.js"

export function createAccessToken(payload) {

    return new Promise((resolve, reject) => {
        jwt.sign( //Se crea el token con los datos del usuario
            payload,
            TOKEN_SECRET, {
            expiresIn: 60 * 60 * 24 //Expira en 24 horas
        }, (err, token) => {
            if (err) reject(err) //Si hay error, se rechaza la promesa
            resolve(token) //Si no hay error, se resuelve la promesa con el token   
        }
        );
    })
}