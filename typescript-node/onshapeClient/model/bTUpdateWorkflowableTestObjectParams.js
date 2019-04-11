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
var BTUpdateWorkflowableTestObjectParams = /** @class */ (function () {
    function BTUpdateWorkflowableTestObjectParams() {
    }
    BTUpdateWorkflowableTestObjectParams.getAttributeTypeMap = function () {
        return BTUpdateWorkflowableTestObjectParams.attributeTypeMap;
    };
    BTUpdateWorkflowableTestObjectParams.discriminator = undefined;
    BTUpdateWorkflowableTestObjectParams.attributeTypeMap = [
        {
            "name": "properties",
            "baseName": "properties",
            "type": "Array<BTPropertyValueParam>"
        }
    ];
    return BTUpdateWorkflowableTestObjectParams;
}());
exports.BTUpdateWorkflowableTestObjectParams = BTUpdateWorkflowableTestObjectParams;
