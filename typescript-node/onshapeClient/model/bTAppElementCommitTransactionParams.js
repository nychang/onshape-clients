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
var BTAppElementCommitTransactionParams = /** @class */ (function () {
    function BTAppElementCommitTransactionParams() {
    }
    BTAppElementCommitTransactionParams.getAttributeTypeMap = function () {
        return BTAppElementCommitTransactionParams.attributeTypeMap;
    };
    BTAppElementCommitTransactionParams.discriminator = undefined;
    BTAppElementCommitTransactionParams.attributeTypeMap = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "returnError",
            "baseName": "returnError",
            "type": "boolean"
        },
        {
            "name": "transactionId",
            "baseName": "transactionId",
            "type": "string"
        }
    ];
    return BTAppElementCommitTransactionParams;
}());
exports.BTAppElementCommitTransactionParams = BTAppElementCommitTransactionParams;
