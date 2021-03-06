/* tslint:disable */
/* eslint-disable */
/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface ChangePasswordRequest
 */
export interface ChangePasswordRequest {
    /**
     * new password, that will be used for logging
     * @type {string}
     * @memberof ChangePasswordRequest
     */
    newPassword: string;
}
/**
 * 
 * @export
 * @interface ConnectRequest
 */
export interface ConnectRequest {
    /**
     * WiFi network name
     * @type {string}
     * @memberof ConnectRequest
     */
    ssid: string;
    /**
     * Network password
     * @type {string}
     * @memberof ConnectRequest
     */
    password: string;
}
/**
 * 
 * @export
 * @interface HTTPValidationError
 */
export interface HTTPValidationError {
    /**
     * 
     * @type {Array<ValidationError>}
     * @memberof HTTPValidationError
     */
    detail?: Array<ValidationError>;
}
/**
 * 
 * @export
 * @interface HotSpotRequest
 */
export interface HotSpotRequest {
    /**
     * WiFi hotspot name
     * @type {string}
     * @memberof HotSpotRequest
     */
    ssid: string;
    /**
     * Hotspot password
     * @type {string}
     * @memberof HotSpotRequest
     */
    password: string;
}
/**
 * 
 * @export
 * @interface LoginResponse
 */
export interface LoginResponse {
    /**
     * True if provided password is valid, else - false.
     * @type {boolean}
     * @memberof LoginResponse
     */
    valid: boolean;
}
/**
 * 
 * @export
 * @interface NetworksResponse
 */
export interface NetworksResponse {
    /**
     * Scanned data
     * @type {object}
     * @memberof NetworksResponse
     */
    scan: object;
    /**
     * UTC seconds scan timestamp.
     * @type {number}
     * @memberof NetworksResponse
     */
    time: number;
}
/**
 * 
 * @export
 * @interface ValidationError
 */
export interface ValidationError {
    /**
     * 
     * @type {Array<string>}
     * @memberof ValidationError
     */
    loc: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ValidationError
     */
    msg: string;
    /**
     * 
     * @type {string}
     * @memberof ValidationError
     */
    type: string;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Check if service is alive or not.
         * @summary Alive
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1Alive: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/scribe_connect/api/v1/alive`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Change password
         * @summary Change Password
         * @param {ChangePasswordRequest} changePasswordRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1ChangePassword: async (changePasswordRequest: ChangePasswordRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'changePasswordRequest' is not null or undefined
            if (changePasswordRequest === null || changePasswordRequest === undefined) {
                throw new RequiredError('changePasswordRequest','Required parameter changePasswordRequest was null or undefined when calling apiV1ChangePassword.');
            }
            const localVarPath = `/scribe_connect/api/v1/changePassword`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication HTTPBasic required
            // http basic authentication required
            if (configuration && (configuration.username || configuration.password)) {
                localVarRequestOptions["auth"] = { username: configuration.username, password: configuration.password };
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof changePasswordRequest !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(changePasswordRequest !== undefined ? changePasswordRequest : {}) : (changePasswordRequest || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Connect device to the WiFi network.
         * @summary Connect
         * @param {ConnectRequest} connectRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1Connect: async (connectRequest: ConnectRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'connectRequest' is not null or undefined
            if (connectRequest === null || connectRequest === undefined) {
                throw new RequiredError('connectRequest','Required parameter connectRequest was null or undefined when calling apiV1Connect.');
            }
            const localVarPath = `/scribe_connect/api/v1/connect`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication HTTPBasic required
            // http basic authentication required
            if (configuration && (configuration.username || configuration.password)) {
                localVarRequestOptions["auth"] = { username: configuration.username, password: configuration.password };
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof connectRequest !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(connectRequest !== undefined ? connectRequest : {}) : (connectRequest || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Get list of previously scanned networks. If networks wasnt scanned - it will response with error.
         * @summary Get Networks
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1GetNetworks: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/scribe_connect/api/v1/networks`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication HTTPBasic required
            // http basic authentication required
            if (configuration && (configuration.username || configuration.password)) {
                localVarRequestOptions["auth"] = { username: configuration.username, password: configuration.password };
            }


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Create hotspot. If device was connected to wifi network, it will be disconnected.
         * @summary Hotspot
         * @param {HotSpotRequest} hotSpotRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1Hotspot: async (hotSpotRequest: HotSpotRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'hotSpotRequest' is not null or undefined
            if (hotSpotRequest === null || hotSpotRequest === undefined) {
                throw new RequiredError('hotSpotRequest','Required parameter hotSpotRequest was null or undefined when calling apiV1Hotspot.');
            }
            const localVarPath = `/scribe_connect/api/v1/hotspot`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication HTTPBasic required
            // http basic authentication required
            if (configuration && (configuration.username || configuration.password)) {
                localVarRequestOptions["auth"] = { username: configuration.username, password: configuration.password };
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof hotSpotRequest !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(hotSpotRequest !== undefined ? hotSpotRequest : {}) : (hotSpotRequest || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Get information about cuurent state of the device.
         * @summary Info
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1Info: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/scribe_connect/api/v1/info`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication HTTPBasic required
            // http basic authentication required
            if (configuration && (configuration.username || configuration.password)) {
                localVarRequestOptions["auth"] = { username: configuration.username, password: configuration.password };
            }


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Verifies provided password. Responses with alive=True if password is correct.
         * @summary Login
         * @param {string} password 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1Login: async (password: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'password' is not null or undefined
            if (password === null || password === undefined) {
                throw new RequiredError('password','Required parameter password was null or undefined when calling apiV1Login.');
            }
            const localVarPath = `/scribe_connect/api/v1/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (password !== undefined) {
                localVarQueryParameter['password'] = password;
            }


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Scan for nearby wifi networks. If device currenctly in hotspot mode - hotspot will be suspended.
         * @summary Scan
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1Scan: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/scribe_connect/api/v1/scan`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication HTTPBasic required
            // http basic authentication required
            if (configuration && (configuration.username || configuration.password)) {
                localVarRequestOptions["auth"] = { username: configuration.username, password: configuration.password };
            }


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Check if service is alive or not.
         * @summary Alive
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1Alive(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).apiV1Alive(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Change password
         * @summary Change Password
         * @param {ChangePasswordRequest} changePasswordRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1ChangePassword(changePasswordRequest: ChangePasswordRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).apiV1ChangePassword(changePasswordRequest, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Connect device to the WiFi network.
         * @summary Connect
         * @param {ConnectRequest} connectRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1Connect(connectRequest: ConnectRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).apiV1Connect(connectRequest, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get list of previously scanned networks. If networks wasnt scanned - it will response with error.
         * @summary Get Networks
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1GetNetworks(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NetworksResponse>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).apiV1GetNetworks(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Create hotspot. If device was connected to wifi network, it will be disconnected.
         * @summary Hotspot
         * @param {HotSpotRequest} hotSpotRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1Hotspot(hotSpotRequest: HotSpotRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).apiV1Hotspot(hotSpotRequest, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get information about cuurent state of the device.
         * @summary Info
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1Info(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).apiV1Info(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Verifies provided password. Responses with alive=True if password is correct.
         * @summary Login
         * @param {string} password 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1Login(password: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoginResponse>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).apiV1Login(password, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Scan for nearby wifi networks. If device currenctly in hotspot mode - hotspot will be suspended.
         * @summary Scan
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1Scan(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).apiV1Scan(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Check if service is alive or not.
         * @summary Alive
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1Alive(options?: any): AxiosPromise<object> {
            return DefaultApiFp(configuration).apiV1Alive(options).then((request) => request(axios, basePath));
        },
        /**
         * Change password
         * @summary Change Password
         * @param {ChangePasswordRequest} changePasswordRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1ChangePassword(changePasswordRequest: ChangePasswordRequest, options?: any): AxiosPromise<object> {
            return DefaultApiFp(configuration).apiV1ChangePassword(changePasswordRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Connect device to the WiFi network.
         * @summary Connect
         * @param {ConnectRequest} connectRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1Connect(connectRequest: ConnectRequest, options?: any): AxiosPromise<object> {
            return DefaultApiFp(configuration).apiV1Connect(connectRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Get list of previously scanned networks. If networks wasnt scanned - it will response with error.
         * @summary Get Networks
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1GetNetworks(options?: any): AxiosPromise<NetworksResponse> {
            return DefaultApiFp(configuration).apiV1GetNetworks(options).then((request) => request(axios, basePath));
        },
        /**
         * Create hotspot. If device was connected to wifi network, it will be disconnected.
         * @summary Hotspot
         * @param {HotSpotRequest} hotSpotRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1Hotspot(hotSpotRequest: HotSpotRequest, options?: any): AxiosPromise<object> {
            return DefaultApiFp(configuration).apiV1Hotspot(hotSpotRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Get information about cuurent state of the device.
         * @summary Info
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1Info(options?: any): AxiosPromise<any> {
            return DefaultApiFp(configuration).apiV1Info(options).then((request) => request(axios, basePath));
        },
        /**
         * Verifies provided password. Responses with alive=True if password is correct.
         * @summary Login
         * @param {string} password 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1Login(password: string, options?: any): AxiosPromise<LoginResponse> {
            return DefaultApiFp(configuration).apiV1Login(password, options).then((request) => request(axios, basePath));
        },
        /**
         * Scan for nearby wifi networks. If device currenctly in hotspot mode - hotspot will be suspended.
         * @summary Scan
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1Scan(options?: any): AxiosPromise<object> {
            return DefaultApiFp(configuration).apiV1Scan(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * Check if service is alive or not.
     * @summary Alive
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public apiV1Alive(options?: any) {
        return DefaultApiFp(this.configuration).apiV1Alive(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Change password
     * @summary Change Password
     * @param {ChangePasswordRequest} changePasswordRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public apiV1ChangePassword(changePasswordRequest: ChangePasswordRequest, options?: any) {
        return DefaultApiFp(this.configuration).apiV1ChangePassword(changePasswordRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Connect device to the WiFi network.
     * @summary Connect
     * @param {ConnectRequest} connectRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public apiV1Connect(connectRequest: ConnectRequest, options?: any) {
        return DefaultApiFp(this.configuration).apiV1Connect(connectRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get list of previously scanned networks. If networks wasnt scanned - it will response with error.
     * @summary Get Networks
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public apiV1GetNetworks(options?: any) {
        return DefaultApiFp(this.configuration).apiV1GetNetworks(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create hotspot. If device was connected to wifi network, it will be disconnected.
     * @summary Hotspot
     * @param {HotSpotRequest} hotSpotRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public apiV1Hotspot(hotSpotRequest: HotSpotRequest, options?: any) {
        return DefaultApiFp(this.configuration).apiV1Hotspot(hotSpotRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get information about cuurent state of the device.
     * @summary Info
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public apiV1Info(options?: any) {
        return DefaultApiFp(this.configuration).apiV1Info(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Verifies provided password. Responses with alive=True if password is correct.
     * @summary Login
     * @param {string} password 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public apiV1Login(password: string, options?: any) {
        return DefaultApiFp(this.configuration).apiV1Login(password, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Scan for nearby wifi networks. If device currenctly in hotspot mode - hotspot will be suspended.
     * @summary Scan
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public apiV1Scan(options?: any) {
        return DefaultApiFp(this.configuration).apiV1Scan(options).then((request) => request(this.axios, this.basePath));
    }
}


