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


export class BTBetaCapabilitySummaryInfo {
    'userState'?: number;
    'description'?: string;
    'upgradable'?: boolean;
    'userBased'?: boolean;
    'selfServiceDisabled'?: boolean;
    'name'?: string;
    'id'?: string;
    'href'?: string;
    'viewRef'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "userState",
            "baseName": "userState",
            "type": "number"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "upgradable",
            "baseName": "upgradable",
            "type": "boolean"
        },
        {
            "name": "userBased",
            "baseName": "userBased",
            "type": "boolean"
        },
        {
            "name": "selfServiceDisabled",
            "baseName": "selfServiceDisabled",
            "type": "boolean"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        },
        {
            "name": "viewRef",
            "baseName": "viewRef",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BTBetaCapabilitySummaryInfo.attributeTypeMap;
    }
}

