"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var BTUserBasicSummaryInfo = /** @class */ (function () {
    function BTUserBasicSummaryInfo() {
    }
    BTUserBasicSummaryInfo.getAttributeTypeMap = function () {
        return BTUserBasicSummaryInfo.attributeTypeMap;
    };
    BTUserBasicSummaryInfo.discriminator = undefined;
    BTUserBasicSummaryInfo.attributeTypeMap = [
        {
            "name": "state",
            "baseName": "state",
            "type": "number"
        },
        {
            "name": "image",
            "baseName": "image",
            "type": "string"
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
        }
    ];
    return BTUserBasicSummaryInfo;
}());
exports.BTUserBasicSummaryInfo = BTUserBasicSummaryInfo;
