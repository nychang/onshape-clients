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


export class BTUserAgentVersion {
    'patchVersion'?: number;
    'majorVersion'?: number;
    'minorVersion'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "patchVersion",
            "baseName": "patchVersion",
            "type": "number"
        },
        {
            "name": "majorVersion",
            "baseName": "majorVersion",
            "type": "number"
        },
        {
            "name": "minorVersion",
            "baseName": "minorVersion",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return BTUserAgentVersion.attributeTypeMap;
    }
}

