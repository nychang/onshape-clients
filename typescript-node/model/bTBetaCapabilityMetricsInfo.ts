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


export class BTBetaCapabilityMetricsInfo {
    'statePreApproved'?: number;
    'stateRequested'?: number;
    'stateApproved'?: number;
    'stateRemoved'?: number;
    'approvedPreApproved'?: number;
    'approvedRequested'?: number;
    'approvedPaid'?: number;
    'approvedOnshape'?: number;
    'name'?: string;
    'id'?: string;
    'href'?: string;
    'viewRef'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "statePreApproved",
            "baseName": "statePreApproved",
            "type": "number"
        },
        {
            "name": "stateRequested",
            "baseName": "stateRequested",
            "type": "number"
        },
        {
            "name": "stateApproved",
            "baseName": "stateApproved",
            "type": "number"
        },
        {
            "name": "stateRemoved",
            "baseName": "stateRemoved",
            "type": "number"
        },
        {
            "name": "approvedPreApproved",
            "baseName": "approvedPreApproved",
            "type": "number"
        },
        {
            "name": "approvedRequested",
            "baseName": "approvedRequested",
            "type": "number"
        },
        {
            "name": "approvedPaid",
            "baseName": "approvedPaid",
            "type": "number"
        },
        {
            "name": "approvedOnshape",
            "baseName": "approvedOnshape",
            "type": "number"
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
        return BTBetaCapabilityMetricsInfo.attributeTypeMap;
    }
}

