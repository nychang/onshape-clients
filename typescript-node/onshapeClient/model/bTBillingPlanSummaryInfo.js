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
var BTBillingPlanSummaryInfo = /** @class */ (function () {
    function BTBillingPlanSummaryInfo() {
    }
    BTBillingPlanSummaryInfo.getAttributeTypeMap = function () {
        return BTBillingPlanSummaryInfo.attributeTypeMap;
    };
    BTBillingPlanSummaryInfo.discriminator = undefined;
    BTBillingPlanSummaryInfo.attributeTypeMap = [
        {
            "name": "hidden",
            "baseName": "hidden",
            "type": "boolean"
        },
        {
            "name": "onshapePlan",
            "baseName": "onshapePlan",
            "type": "boolean"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "deprecated",
            "baseName": "deprecated",
            "type": "boolean"
        },
        {
            "name": "planType",
            "baseName": "planType",
            "type": "number"
        },
        {
            "name": "consumableQuantity",
            "baseName": "consumableQuantity",
            "type": "number"
        },
        {
            "name": "amountCents",
            "baseName": "amountCents",
            "type": "number"
        },
        {
            "name": "interval",
            "baseName": "interval",
            "type": "string"
        },
        {
            "name": "applicationId",
            "baseName": "applicationId",
            "type": "string"
        },
        {
            "name": "companyPlan",
            "baseName": "companyPlan",
            "type": "boolean"
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
    return BTBillingPlanSummaryInfo;
}());
exports.BTBillingPlanSummaryInfo = BTBillingPlanSummaryInfo;
