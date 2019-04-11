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

import { BTBillingPlanSummaryInfo } from './bTBillingPlanSummaryInfo';

export class BTBillingAllowedPlansInfo {
    'upgrades'?: Array<BTBillingPlanSummaryInfo>;
    'downgrades'?: Array<BTBillingPlanSummaryInfo>;
    'currentPlan'?: BTBillingPlanSummaryInfo;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "upgrades",
            "baseName": "upgrades",
            "type": "Array<BTBillingPlanSummaryInfo>"
        },
        {
            "name": "downgrades",
            "baseName": "downgrades",
            "type": "Array<BTBillingPlanSummaryInfo>"
        },
        {
            "name": "currentPlan",
            "baseName": "currentPlan",
            "type": "BTBillingPlanSummaryInfo"
        }    ];

    static getAttributeTypeMap() {
        return BTBillingAllowedPlansInfo.attributeTypeMap;
    }
}
