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

import { ApiResponse } from './apiResponse';
import { Callback } from './callback';
import { Example } from './example';
import { Header } from './header';
import { Link } from './link';
import { Parameter } from './parameter';
import { RequestBody } from './requestBody';
import { Schema } from './schema';
import { SecurityScheme } from './securityScheme';

export class Components {
    'schemas'?: { [key: string]: Schema; };
    'responses'?: { [key: string]: ApiResponse; };
    'parameters'?: { [key: string]: Parameter; };
    'examples'?: { [key: string]: Example; };
    'requestBodies'?: { [key: string]: RequestBody; };
    'headers'?: { [key: string]: Header; };
    'securitySchemes'?: { [key: string]: SecurityScheme; };
    'links'?: { [key: string]: Link; };
    'callbacks'?: { [key: string]: Callback; };
    'extensions'?: { [key: string]: any; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "schemas",
            "baseName": "schemas",
            "type": "{ [key: string]: Schema; }"
        },
        {
            "name": "responses",
            "baseName": "responses",
            "type": "{ [key: string]: ApiResponse; }"
        },
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "{ [key: string]: Parameter; }"
        },
        {
            "name": "examples",
            "baseName": "examples",
            "type": "{ [key: string]: Example; }"
        },
        {
            "name": "requestBodies",
            "baseName": "requestBodies",
            "type": "{ [key: string]: RequestBody; }"
        },
        {
            "name": "headers",
            "baseName": "headers",
            "type": "{ [key: string]: Header; }"
        },
        {
            "name": "securitySchemes",
            "baseName": "securitySchemes",
            "type": "{ [key: string]: SecurityScheme; }"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "{ [key: string]: Link; }"
        },
        {
            "name": "callbacks",
            "baseName": "callbacks",
            "type": "{ [key: string]: Callback; }"
        },
        {
            "name": "extensions",
            "baseName": "extensions",
            "type": "{ [key: string]: any; }"
        }    ];

    static getAttributeTypeMap() {
        return Components.attributeTypeMap;
    }
}

