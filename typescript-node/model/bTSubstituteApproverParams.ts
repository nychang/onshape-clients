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

import { BTIdentityParams } from './bTIdentityParams';

export class BTSubstituteApproverParams {
    'identity'?: BTIdentityParams;
    'enabled'?: boolean;
    'companyId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "identity",
            "baseName": "identity",
            "type": "BTIdentityParams"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "companyId",
            "baseName": "companyId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BTSubstituteApproverParams.attributeTypeMap;
    }
}

