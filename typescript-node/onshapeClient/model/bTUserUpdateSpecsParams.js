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
var BTUserUpdateSpecsParams = /** @class */ (function () {
    function BTUserUpdateSpecsParams() {
    }
    BTUserUpdateSpecsParams.getAttributeTypeMap = function () {
        return BTUserUpdateSpecsParams.attributeTypeMap;
    };
    BTUserUpdateSpecsParams.discriminator = undefined;
    BTUserUpdateSpecsParams.attributeTypeMap = [
        {
            "name": "specSignatureToVersion",
            "baseName": "specSignatureToVersion",
            "type": "{ [key: string]: string; }"
        }
    ];
    return BTUserUpdateSpecsParams;
}());
exports.BTUserUpdateSpecsParams = BTUserUpdateSpecsParams;