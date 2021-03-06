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


class BTIdTranslationResultInfo(object):
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
        'target': 'list[str]',
        'source': 'str',
        'status': 'str'
    }

    attribute_map = {
        'target': 'target',
        'source': 'source',
        'status': 'status'
    }

    def __init__(self, target=None, source=None, status=None):  # noqa: E501
        """BTIdTranslationResultInfo - a model defined in OpenAPI"""  # noqa: E501

        self._target = None
        self._source = None
        self._status = None
        self.discriminator = None

        if target is not None:
            self.target = target
        if source is not None:
            self.source = source
        if status is not None:
            self.status = status

    @property
    def target(self):
        """Gets the target of this BTIdTranslationResultInfo.  # noqa: E501


        :return: The target of this BTIdTranslationResultInfo.  # noqa: E501
        :rtype: list[str]
        """
        return self._target

    @target.setter
    def target(self, target):
        """Sets the target of this BTIdTranslationResultInfo.


        :param target: The target of this BTIdTranslationResultInfo.  # noqa: E501
        :type: list[str]
        """

        self._target = target

    @property
    def source(self):
        """Gets the source of this BTIdTranslationResultInfo.  # noqa: E501


        :return: The source of this BTIdTranslationResultInfo.  # noqa: E501
        :rtype: str
        """
        return self._source

    @source.setter
    def source(self, source):
        """Sets the source of this BTIdTranslationResultInfo.


        :param source: The source of this BTIdTranslationResultInfo.  # noqa: E501
        :type: str
        """

        self._source = source

    @property
    def status(self):
        """Gets the status of this BTIdTranslationResultInfo.  # noqa: E501


        :return: The status of this BTIdTranslationResultInfo.  # noqa: E501
        :rtype: str
        """
        return self._status

    @status.setter
    def status(self, status):
        """Sets the status of this BTIdTranslationResultInfo.


        :param status: The status of this BTIdTranslationResultInfo.  # noqa: E501
        :type: str
        """

        self._status = status

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
        if not isinstance(other, BTIdTranslationResultInfo):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
