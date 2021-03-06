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


class BTUserWebPreferencesParams(object):
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
        'id': 'str',
        'user_id': 'str',
        'preference_name': 'str',
        'retina_display_setting': 'str'
    }

    attribute_map = {
        'id': 'id',
        'user_id': 'userId',
        'preference_name': 'preferenceName',
        'retina_display_setting': 'retinaDisplaySetting'
    }

    def __init__(self, id=None, user_id=None, preference_name=None, retina_display_setting=None):  # noqa: E501
        """BTUserWebPreferencesParams - a model defined in OpenAPI"""  # noqa: E501

        self._id = None
        self._user_id = None
        self._preference_name = None
        self._retina_display_setting = None
        self.discriminator = None

        if id is not None:
            self.id = id
        if user_id is not None:
            self.user_id = user_id
        if preference_name is not None:
            self.preference_name = preference_name
        if retina_display_setting is not None:
            self.retina_display_setting = retina_display_setting

    @property
    def id(self):
        """Gets the id of this BTUserWebPreferencesParams.  # noqa: E501


        :return: The id of this BTUserWebPreferencesParams.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this BTUserWebPreferencesParams.


        :param id: The id of this BTUserWebPreferencesParams.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def user_id(self):
        """Gets the user_id of this BTUserWebPreferencesParams.  # noqa: E501


        :return: The user_id of this BTUserWebPreferencesParams.  # noqa: E501
        :rtype: str
        """
        return self._user_id

    @user_id.setter
    def user_id(self, user_id):
        """Sets the user_id of this BTUserWebPreferencesParams.


        :param user_id: The user_id of this BTUserWebPreferencesParams.  # noqa: E501
        :type: str
        """

        self._user_id = user_id

    @property
    def preference_name(self):
        """Gets the preference_name of this BTUserWebPreferencesParams.  # noqa: E501


        :return: The preference_name of this BTUserWebPreferencesParams.  # noqa: E501
        :rtype: str
        """
        return self._preference_name

    @preference_name.setter
    def preference_name(self, preference_name):
        """Sets the preference_name of this BTUserWebPreferencesParams.


        :param preference_name: The preference_name of this BTUserWebPreferencesParams.  # noqa: E501
        :type: str
        """

        self._preference_name = preference_name

    @property
    def retina_display_setting(self):
        """Gets the retina_display_setting of this BTUserWebPreferencesParams.  # noqa: E501


        :return: The retina_display_setting of this BTUserWebPreferencesParams.  # noqa: E501
        :rtype: str
        """
        return self._retina_display_setting

    @retina_display_setting.setter
    def retina_display_setting(self, retina_display_setting):
        """Sets the retina_display_setting of this BTUserWebPreferencesParams.


        :param retina_display_setting: The retina_display_setting of this BTUserWebPreferencesParams.  # noqa: E501
        :type: str
        """

        self._retina_display_setting = retina_display_setting

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
        if not isinstance(other, BTUserWebPreferencesParams):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
