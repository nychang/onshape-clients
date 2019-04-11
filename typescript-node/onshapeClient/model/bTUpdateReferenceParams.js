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
var BTUpdateReferenceParams = /** @class */ (function () {
    function BTUpdateReferenceParams() {
    }
    BTUpdateReferenceParams.getAttributeTypeMap = function () {
        return BTUpdateReferenceParams.attributeTypeMap;
    };
    BTUpdateReferenceParams.discriminator = undefined;
    BTUpdateReferenceParams.attributeTypeMap = [
        {
            "name": "referenceUpdates",
            "baseName": "referenceUpdates",
            "type": "Array<UpdateParams>"
        }
    ];
    return BTUpdateReferenceParams;
}());
exports.BTUpdateReferenceParams = BTUpdateReferenceParams;
