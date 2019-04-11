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
var BTAPIDeveloperParams = /** @class */ (function () {
    function BTAPIDeveloperParams() {
    }
    BTAPIDeveloperParams.getAttributeTypeMap = function () {
        return BTAPIDeveloperParams.attributeTypeMap;
    };
    BTAPIDeveloperParams.discriminator = undefined;
    BTAPIDeveloperParams.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "website",
            "baseName": "website",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
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
        }
    ];
    return BTAPIDeveloperParams;
}());
exports.BTAPIDeveloperParams = BTAPIDeveloperParams;
