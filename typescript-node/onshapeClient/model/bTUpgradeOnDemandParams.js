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
var BTUpgradeOnDemandParams = /** @class */ (function () {
    function BTUpgradeOnDemandParams() {
    }
    BTUpgradeOnDemandParams.getAttributeTypeMap = function () {
        return BTUpgradeOnDemandParams.attributeTypeMap;
    };
    BTUpgradeOnDemandParams.discriminator = undefined;
    BTUpgradeOnDemandParams.attributeTypeMap = [
        {
            "name": "notificationId",
            "baseName": "notificationId",
            "type": "string"
        },
        {
            "name": "targetVersion",
            "baseName": "targetVersion",
            "type": "number"
        },
        {
            "name": "connectionId",
            "baseName": "connectionId",
            "type": "string"
        }
    ];
    return BTUpgradeOnDemandParams;
}());
exports.BTUpgradeOnDemandParams = BTUpgradeOnDemandParams;
