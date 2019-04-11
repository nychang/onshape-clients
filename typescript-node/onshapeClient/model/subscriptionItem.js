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
var SubscriptionItem = /** @class */ (function () {
    function SubscriptionItem() {
    }
    SubscriptionItem.getAttributeTypeMap = function () {
        return SubscriptionItem.attributeTypeMap;
    };
    SubscriptionItem.discriminator = undefined;
    SubscriptionItem.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "string"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "number"
        },
        {
            "name": "plan",
            "baseName": "plan",
            "type": "Plan"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        }
    ];
    return SubscriptionItem;
}());
exports.SubscriptionItem = SubscriptionItem;
