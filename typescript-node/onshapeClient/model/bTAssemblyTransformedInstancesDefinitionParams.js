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
var BTAssemblyTransformedInstancesDefinitionParams = /** @class */ (function () {
    function BTAssemblyTransformedInstancesDefinitionParams() {
    }
    BTAssemblyTransformedInstancesDefinitionParams.getAttributeTypeMap = function () {
        return BTAssemblyTransformedInstancesDefinitionParams.attributeTypeMap;
    };
    BTAssemblyTransformedInstancesDefinitionParams.discriminator = undefined;
    BTAssemblyTransformedInstancesDefinitionParams.attributeTypeMap = [
        {
            "name": "transformGroups",
            "baseName": "transformGroups",
            "type": "Array<TransformGroup>"
        }
    ];
    return BTAssemblyTransformedInstancesDefinitionParams;
}());
exports.BTAssemblyTransformedInstancesDefinitionParams = BTAssemblyTransformedInstancesDefinitionParams;
