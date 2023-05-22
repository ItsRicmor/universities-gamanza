import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import HttpErrorResponseModel from '../models/HttpErrorResponseModel';

export enum RequestMethod {
    Get = 'GET',
    Post = 'POST',
    Put = 'PUT',
    Delete = 'DELETE',
    Options = 'OPTIONS',
    Head = 'HEAD',
    Patch = 'PATCH',
}

export const get = async (endpoint: string, params?: any, requestConfig?: AxiosRequestConfig): Promise<AxiosResponse | HttpErrorResponseModel> => {
    const paramsConfig: AxiosRequestConfig | undefined = params ? { params } : undefined;

    return _request(
        {
            url: endpoint,
            method: RequestMethod.Get,
        },
        {
            ...paramsConfig,
            ...requestConfig,
        }
    );
};

export const post = async (endpoint: string, data?: any): Promise<AxiosResponse | HttpErrorResponseModel> => {
    const config: AxiosRequestConfig | undefined = data ? { data } : undefined;

    return _request(
        {
            url: endpoint,
            method: RequestMethod.Post,
        },
        config
    );
};

export const put = async (endpoint: string, data?: any): Promise<AxiosResponse | HttpErrorResponseModel> => {
    const config: AxiosRequestConfig | undefined = data ? { data } : undefined;

    return _request(
        {
            url: endpoint,
            method: RequestMethod.Put,
        },
        config
    );
};

export const del = async (endpoint: string): Promise<AxiosResponse | HttpErrorResponseModel> => {
    return _request({
        url: endpoint,
        method: RequestMethod.Delete,
    });
};

export const _request = async (restRequest: Partial<Request>, config?: AxiosRequestConfig): Promise<AxiosResponse | HttpErrorResponseModel> => {
    if (!Boolean(restRequest.url)) {
        console.error(`Received ${restRequest.url} which is invalid for a endpoint url`);
    }

    try {
        const axiosRequestConfig: AxiosRequestConfig = {
            ...config,
            method: restRequest.method as Method,
            url: restRequest.url,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                ...config?.headers,
            },
        };
        const [axiosResponse] = await Promise.all([axios(axiosRequestConfig), _delay()]);

        const { data } = axiosResponse;

        if (data.success === false) {
            return _fillInErrorWithDefaults(
                {
                    message: data.errors.join(' - '),
                }
            );
        }

        return {
            ...axiosResponse,
        };
    } catch (error: any) {
        if (error.response) {
            // The request was made and the server responded with a status code that falls out of the range of 2xx
            const { statusText, data } = error.response;
            const errors: string[] = data.hasOwnProperty('errors') ? [statusText, ...data.errors] : [statusText];

            return _fillInErrorWithDefaults(
                {
                    message: errors.filter(Boolean).join(' - '),
                }
            );
        } else if (error.request) {
            // The request was made but no response was received `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js
            const { statusText } = error.request;

            return _fillInErrorWithDefaults(
                {
                    message: statusText,
                }
            );
        }

        // Something happened in setting up the request that triggered an Error
        return _fillInErrorWithDefaults(
            {
                message: error.message,
            }
        );
    }
};

const _fillInErrorWithDefaults = (error: Partial<HttpErrorResponseModel>): HttpErrorResponseModel => {
    const model = new HttpErrorResponseModel();

    model.message = error.message || 'Error requesting data';

    return model;
};

/**
 * We want to show the loading indicator to the user but sometimes the api
 * request finished too quickly. This makes sure there the loading indicator is
 * visual for at least a given time.
 *
 * @param duration
 * @returns {Promise<void>}
 * @private
 */
const _delay = (duration: number = 250): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, duration));
};