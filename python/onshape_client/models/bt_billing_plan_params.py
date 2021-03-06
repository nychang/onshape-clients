# coding: utf-8

"""
    Onshape REST API

    The Onshape REST API consumed by all clients.  # noqa: E501

    OpenAPI spec version: 1.96
    Contact: api-support@onshape.zendesk.com
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six


class BTBillingPlanParams(object):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    """
    Attributes:
      openapi_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    openapi_types = {
        'name': 'str',
        'group': 'str',
        'description': 'str',
        'plan_type': 'int',
        'trial_period_days': 'int',
        'consumable_quantity': 'int',
        'amount_cents': 'int',
        'hidden': 'bool',
        'plan_id': 'str',
        'client_id': 'str',
        'interval': 'str',
        'application_id': 'str'
    }

    attribute_map = {
        'name': 'name',
        'group': 'group',
        'description': 'description',
        'plan_type': 'planType',
        'trial_period_days': 'trialPeriodDays',
        'consumable_quantity': 'consumableQuantity',
        'amount_cents': 'amountCents',
        'hidden': 'hidden',
        'plan_id': 'planId',
        'client_id': 'clientId',
        'interval': 'interval',
        'application_id': 'applicationId'
    }

    def __init__(self, name=None, group=None, description=None, plan_type=None, trial_period_days=None, consumable_quantity=None, amount_cents=None, hidden=None, plan_id=None, client_id=None, interval=None, application_id=None):  # noqa: E501
        """BTBillingPlanParams - a model defined in OpenAPI"""  # noqa: E501

        self._name = None
        self._group = None
        self._description = None
        self._plan_type = None
        self._trial_period_days = None
        self._consumable_quantity = None
        self._amount_cents = None
        self._hidden = None
        self._plan_id = None
        self._client_id = None
        self._interval = None
        self._application_id = None
        self.discriminator = None

        if name is not None:
            self.name = name
        if group is not None:
            self.group = group
        if description is not None:
            self.description = description
        if plan_type is not None:
            self.plan_type = plan_type
        if trial_period_days is not None:
            self.trial_period_days = trial_period_days
        if consumable_quantity is not None:
            self.consumable_quantity = consumable_quantity
        if amount_cents is not None:
            self.amount_cents = amount_cents
        if hidden is not None:
            self.hidden = hidden
        if plan_id is not None:
            self.plan_id = plan_id
        if client_id is not None:
            self.client_id = client_id
        if interval is not None:
            self.interval = interval
        if application_id is not None:
            self.application_id = application_id

    @property
    def name(self):
        """Gets the name of this BTBillingPlanParams.  # noqa: E501


        :return: The name of this BTBillingPlanParams.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this BTBillingPlanParams.


        :param name: The name of this BTBillingPlanParams.  # noqa: E501
        :type: str
        """

        self._name = name

    @property
    def group(self):
        """Gets the group of this BTBillingPlanParams.  # noqa: E501


        :return: The group of this BTBillingPlanParams.  # noqa: E501
        :rtype: str
        """
        return self._group

    @group.setter
    def group(self, group):
        """Sets the group of this BTBillingPlanParams.


        :param group: The group of this BTBillingPlanParams.  # noqa: E501
        :type: str
        """

        self._group = group

    @property
    def description(self):
        """Gets the description of this BTBillingPlanParams.  # noqa: E501


        :return: The description of this BTBillingPlanParams.  # noqa: E501
        :rtype: str
        """
        return self._description

    @description.setter
    def description(self, description):
        """Sets the description of this BTBillingPlanParams.


        :param description: The description of this BTBillingPlanParams.  # noqa: E501
        :type: str
        """

        self._description = description

    @property
    def plan_type(self):
        """Gets the plan_type of this BTBillingPlanParams.  # noqa: E501


        :return: The plan_type of this BTBillingPlanParams.  # noqa: E501
        :rtype: int
        """
        return self._plan_type

    @plan_type.setter
    def plan_type(self, plan_type):
        """Sets the plan_type of this BTBillingPlanParams.


        :param plan_type: The plan_type of this BTBillingPlanParams.  # noqa: E501
        :type: int
        """

        self._plan_type = plan_type

    @property
    def trial_period_days(self):
        """Gets the trial_period_days of this BTBillingPlanParams.  # noqa: E501


        :return: The trial_period_days of this BTBillingPlanParams.  # noqa: E501
        :rtype: int
        """
        return self._trial_period_days

    @trial_period_days.setter
    def trial_period_days(self, trial_period_days):
        """Sets the trial_period_days of this BTBillingPlanParams.


        :param trial_period_days: The trial_period_days of this BTBillingPlanParams.  # noqa: E501
        :type: int
        """

        self._trial_period_days = trial_period_days

    @property
    def consumable_quantity(self):
        """Gets the consumable_quantity of this BTBillingPlanParams.  # noqa: E501


        :return: The consumable_quantity of this BTBillingPlanParams.  # noqa: E501
        :rtype: int
        """
        return self._consumable_quantity

    @consumable_quantity.setter
    def consumable_quantity(self, consumable_quantity):
        """Sets the consumable_quantity of this BTBillingPlanParams.


        :param consumable_quantity: The consumable_quantity of this BTBillingPlanParams.  # noqa: E501
        :type: int
        """

        self._consumable_quantity = consumable_quantity

    @property
    def amount_cents(self):
        """Gets the amount_cents of this BTBillingPlanParams.  # noqa: E501


        :return: The amount_cents of this BTBillingPlanParams.  # noqa: E501
        :rtype: int
        """
        return self._amount_cents

    @amount_cents.setter
    def amount_cents(self, amount_cents):
        """Sets the amount_cents of this BTBillingPlanParams.


        :param amount_cents: The amount_cents of this BTBillingPlanParams.  # noqa: E501
        :type: int
        """

        self._amount_cents = amount_cents

    @property
    def hidden(self):
        """Gets the hidden of this BTBillingPlanParams.  # noqa: E501


        :return: The hidden of this BTBillingPlanParams.  # noqa: E501
        :rtype: bool
        """
        return self._hidden

    @hidden.setter
    def hidden(self, hidden):
        """Sets the hidden of this BTBillingPlanParams.


        :param hidden: The hidden of this BTBillingPlanParams.  # noqa: E501
        :type: bool
        """

        self._hidden = hidden

    @property
    def plan_id(self):
        """Gets the plan_id of this BTBillingPlanParams.  # noqa: E501


        :return: The plan_id of this BTBillingPlanParams.  # noqa: E501
        :rtype: str
        """
        return self._plan_id

    @plan_id.setter
    def plan_id(self, plan_id):
        """Sets the plan_id of this BTBillingPlanParams.


        :param plan_id: The plan_id of this BTBillingPlanParams.  # noqa: E501
        :type: str
        """

        self._plan_id = plan_id

    @property
    def client_id(self):
        """Gets the client_id of this BTBillingPlanParams.  # noqa: E501


        :return: The client_id of this BTBillingPlanParams.  # noqa: E501
        :rtype: str
        """
        return self._client_id

    @client_id.setter
    def client_id(self, client_id):
        """Sets the client_id of this BTBillingPlanParams.


        :param client_id: The client_id of this BTBillingPlanParams.  # noqa: E501
        :type: str
        """

        self._client_id = client_id

    @property
    def interval(self):
        """Gets the interval of this BTBillingPlanParams.  # noqa: E501


        :return: The interval of this BTBillingPlanParams.  # noqa: E501
        :rtype: str
        """
        return self._interval

    @interval.setter
    def interval(self, interval):
        """Sets the interval of this BTBillingPlanParams.


        :param interval: The interval of this BTBillingPlanParams.  # noqa: E501
        :type: str
        """

        self._interval = interval

    @property
    def application_id(self):
        """Gets the application_id of this BTBillingPlanParams.  # noqa: E501


        :return: The application_id of this BTBillingPlanParams.  # noqa: E501
        :rtype: str
        """
        return self._application_id

    @application_id.setter
    def application_id(self, application_id):
        """Sets the application_id of this BTBillingPlanParams.


        :param application_id: The application_id of this BTBillingPlanParams.  # noqa: E501
        :type: str
        """

        self._application_id = application_id

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.openapi_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, BTBillingPlanParams):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
