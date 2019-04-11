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


export class BTMetricParams {
    'systemId'?: string;
    'propertyMap'?: { [key: string]: any; };
    'eventName'?: string;
    'eventNamespace'?: string;
    'eventTime'?: Date;
    'elementId'?: string;
    'eventType'?: number;
    'documentId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "systemId",
            "baseName": "systemId",
            "type": "string"
        },
        {
            "name": "propertyMap",
            "baseName": "propertyMap",
            "type": "{ [key: string]: any; }"
        },
        {
            "name": "eventName",
            "baseName": "eventName",
            "type": "string"
        },
        {
            "name": "eventNamespace",
            "baseName": "eventNamespace",
            "type": "string"
        },
        {
            "name": "eventTime",
            "baseName": "eventTime",
            "type": "Date"
        },
        {
            "name": "elementId",
            "baseName": "elementId",
            "type": "string"
        },
        {
            "name": "eventType",
            "baseName": "eventType",
            "type": "number"
        },
        {
            "name": "documentId",
            "baseName": "documentId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BTMetricParams.attributeTypeMap;
    }
}
