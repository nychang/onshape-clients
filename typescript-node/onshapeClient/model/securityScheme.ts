/**
 * Onshape REST API
 * The Onshape REST API consumed by all clients.
 *
 * OpenAPI spec version: 1.96
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { OAuthFlows } from './oAuthFlows';

export class SecurityScheme {
    'type'?: SecurityScheme.TypeEnum;
    'description'?: string;
    'name'?: string;
    'get$ref'?: string;
    '_in'?: SecurityScheme.InEnum;
    'scheme'?: string;
    'bearerFormat'?: string;
    'flows'?: OAuthFlows;
    'openIdConnectUrl'?: string;
    'extensions'?: { [key: string]: any; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "SecurityScheme.TypeEnum"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "get$ref",
            "baseName": "get$ref",
            "type": "string"
        },
        {
            "name": "_in",
            "baseName": "in",
            "type": "SecurityScheme.InEnum"
        },
        {
            "name": "scheme",
            "baseName": "scheme",
            "type": "string"
        },
        {
            "name": "bearerFormat",
            "baseName": "bearerFormat",
            "type": "string"
        },
        {
            "name": "flows",
            "baseName": "flows",
            "type": "OAuthFlows"
        },
        {
            "name": "openIdConnectUrl",
            "baseName": "openIdConnectUrl",
            "type": "string"
        },
        {
            "name": "extensions",
            "baseName": "extensions",
            "type": "{ [key: string]: any; }"
        }    ];

    static getAttributeTypeMap() {
        return SecurityScheme.attributeTypeMap;
    }
}

export namespace SecurityScheme {
    export enum TypeEnum {
        ApiKey = <any> 'apiKey',
        Http = <any> 'http',
        Oauth2 = <any> 'oauth2',
        OpenIdConnect = <any> 'openIdConnect'
    }
    export enum InEnum {
        Cookie = <any> 'cookie',
        Header = <any> 'header',
        Query = <any> 'query'
    }
}