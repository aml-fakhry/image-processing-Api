import { Response } from 'express';
import { AppError, AppErrorCode } from '../model';
import { AppHttpResponse } from './../model/app-http-response.model';

/**
 * Returns a succeeded response with 200 status code.
 * @param res The http-response to be modified.
 * @param body An optional body that will be sent within the response' body.
 */
export function OK(res: Response, body: AppHttpResponse): Response {
  return body ? res.status(200).send(body) : res.send();
}

/**
 * Returns a bad-request response with 200 status code.
 * @param res The http-response to be modified.
 * @param body An optional body that will be sent within the response' body.
 */
export function BadRequest(res: Response, body: AppHttpResponse): Response {
  return body ? res.status(400).send(body) : res.send();
}

/**
 * Returns an internal server error response with 500 status code.
 * @param res The http-response to be modified.
 * @param err The error or error-message to be sent within the response' body.
 */
export function InternalServerError(res: Response, err: string | Error): Response {
  const body: AppHttpResponse = {
    errors: [
      {
        code: AppErrorCode.InternalServerError,
        title: AppError.InternalServerError,
        detail: typeof err === 'string' ? err : err.message,
      },
    ],
  };
  return res.status(500).send(body);
}
