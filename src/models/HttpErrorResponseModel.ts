import { v4 as uuidv4 } from 'uuid';
import IError from './IError';

export default class HttpErrorResponseModel implements IError {
    id: string = uuidv4();
    message: string = '';
}