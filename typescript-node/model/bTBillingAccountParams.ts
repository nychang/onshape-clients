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

import { BTAddressInfo } from './bTAddressInfo';

export class BTBillingAccountParams {
    'address'?: BTAddressInfo;
    'forceCreate'?: boolean;
    'password'?: string;
    'trialPeriodDays'?: number;
    'userId'?: string;
    'token'?: string;
    'planId'?: string;
    'companyId'?: string;
    'seats'?: number;
    'domainPrefix'?: string;
    'companyPlan'?: boolean;
    'promonthlyEnabled'?: boolean;
    'companyName'?: string;
    'paymentType'?: number;
    'resellerName'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "BTAddressInfo"
        },
        {
            "name": "forceCreate",
            "baseName": "forceCreate",
            "type": "boolean"
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string"
        },
        {
            "name": "trialPeriodDays",
            "baseName": "trialPeriodDays",
            "type": "number"
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "string"
        },
        {
            "name": "token",
            "baseName": "token",
            "type": "string"
        },
        {
            "name": "planId",
            "baseName": "planId",
            "type": "string"
        },
        {
            "name": "companyId",
            "baseName": "companyId",
            "type": "string"
        },
        {
            "name": "seats",
            "baseName": "seats",
            "type": "number"
        },
        {
            "name": "domainPrefix",
            "baseName": "domainPrefix",
            "type": "string"
        },
        {
            "name": "companyPlan",
            "baseName": "companyPlan",
            "type": "boolean"
        },
        {
            "name": "promonthlyEnabled",
            "baseName": "promonthlyEnabled",
            "type": "boolean"
        },
        {
            "name": "companyName",
            "baseName": "companyName",
            "type": "string"
        },
        {
            "name": "paymentType",
            "baseName": "paymentType",
            "type": "number"
        },
        {
            "name": "resellerName",
            "baseName": "resellerName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BTBillingAccountParams.attributeTypeMap;
    }
}

