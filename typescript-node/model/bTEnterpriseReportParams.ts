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


export class BTEnterpriseReportParams {
    'name'?: string;
    'id'?: string;
    'description'?: string;
    'ownerId'?: string;
    'reportId'?: string;
    'reportName'?: string;
    'groupName'?: string;
    'publicReport'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "ownerId",
            "baseName": "ownerId",
            "type": "string"
        },
        {
            "name": "reportId",
            "baseName": "reportId",
            "type": "string"
        },
        {
            "name": "reportName",
            "baseName": "reportName",
            "type": "string"
        },
        {
            "name": "groupName",
            "baseName": "groupName",
            "type": "string"
        },
        {
            "name": "publicReport",
            "baseName": "publicReport",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return BTEnterpriseReportParams.attributeTypeMap;
    }
}

