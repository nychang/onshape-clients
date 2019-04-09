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

import { BTWebClientCapabilitiesParams } from './bTWebClientCapabilitiesParams';
import { BTWebRendererPerformanceMeasurementParams } from './bTWebRendererPerformanceMeasurementParams';

export class BTLoginParams {
    'email'?: string;
    'password'?: string;
    'deviceId'?: string;
    'randomToken'?: string;
    'totp'?: string;
    'rememberTotp'?: boolean;
    'webClientCapabilities'?: BTWebClientCapabilitiesParams;
    'enableTotp'?: boolean;
    'rendererPerformanceMeasurement'?: BTWebRendererPerformanceMeasurementParams;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string"
        },
        {
            "name": "deviceId",
            "baseName": "deviceId",
            "type": "string"
        },
        {
            "name": "randomToken",
            "baseName": "randomToken",
            "type": "string"
        },
        {
            "name": "totp",
            "baseName": "totp",
            "type": "string"
        },
        {
            "name": "rememberTotp",
            "baseName": "rememberTotp",
            "type": "boolean"
        },
        {
            "name": "webClientCapabilities",
            "baseName": "webClientCapabilities",
            "type": "BTWebClientCapabilitiesParams"
        },
        {
            "name": "enableTotp",
            "baseName": "enableTotp",
            "type": "boolean"
        },
        {
            "name": "rendererPerformanceMeasurement",
            "baseName": "rendererPerformanceMeasurement",
            "type": "BTWebRendererPerformanceMeasurementParams"
        }    ];

    static getAttributeTypeMap() {
        return BTLoginParams.attributeTypeMap;
    }
}

