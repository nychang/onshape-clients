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
var BTStandardContentFindUsageParams = /** @class */ (function () {
    function BTStandardContentFindUsageParams() {
    }
    BTStandardContentFindUsageParams.getAttributeTypeMap = function () {
        return BTStandardContentFindUsageParams.attributeTypeMap;
    };
    BTStandardContentFindUsageParams.discriminator = undefined;
    BTStandardContentFindUsageParams.attributeTypeMap = [
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "Array<BTStandardContentParameterDefinition>"
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "string"
        },
        {
            "name": "companyId",
            "baseName": "companyId",
            "type": "string"
        },
        {
            "name": "componentDocumentId",
            "baseName": "componentDocumentId",
            "type": "string"
        },
        {
            "name": "usedFromInDays",
            "baseName": "usedFromInDays",
            "type": "string"
        }
    ];
    return BTStandardContentFindUsageParams;
}());
exports.BTStandardContentFindUsageParams = BTStandardContentFindUsageParams;
