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


export class BTBulkDocumentUpdateParams {
    'documentIds'?: string;
    'updateProperty'?: string;
    'skipUpgradeVersion'?: number;
    'skipUpgrade'?: boolean;
    'upgradeMode'?: string;
    'upgradeVersion'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "documentIds",
            "baseName": "documentIds",
            "type": "string"
        },
        {
            "name": "updateProperty",
            "baseName": "updateProperty",
            "type": "string"
        },
        {
            "name": "skipUpgradeVersion",
            "baseName": "skipUpgradeVersion",
            "type": "number"
        },
        {
            "name": "skipUpgrade",
            "baseName": "skipUpgrade",
            "type": "boolean"
        },
        {
            "name": "upgradeMode",
            "baseName": "upgradeMode",
            "type": "string"
        },
        {
            "name": "upgradeVersion",
            "baseName": "upgradeVersion",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return BTBulkDocumentUpdateParams.attributeTypeMap;
    }
}

