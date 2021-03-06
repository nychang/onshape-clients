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


class BTBetaCapabilityInfo(object):
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
        'eula': 'str',
        'welcome_html': 'str',
        'user_state': 'int',
        'description': 'str',
        'upgradable': 'bool',
        'user_based': 'bool',
        'self_service_disabled': 'bool',
        'name': 'str',
        'id': 'str',
        'href': 'str',
        'view_ref': 'str'
    }

    attribute_map = {
        'eula': 'eula',
        'welcome_html': 'welcomeHTML',
        'user_state': 'userState',
        'description': 'description',
        'upgradable': 'upgradable',
        'user_based': 'userBased',
        'self_service_disabled': 'selfServiceDisabled',
        'name': 'name',
        'id': 'id',
        'href': 'href',
        'view_ref': 'viewRef'
    }

    def __init__(self, eula=None, welcome_html=None, user_state=None, description=None, upgradable=None, user_based=None, self_service_disabled=None, name=None, id=None, href=None, view_ref=None):  # noqa: E501
        """BTBetaCapabilityInfo - a model defined in OpenAPI"""  # noqa: E501

        self._eula = None
        self._welcome_html = None
        self._user_state = None
        self._description = None
        self._upgradable = None
        self._user_based = None
        self._self_service_disabled = None
        self._name = None
        self._id = None
        self._href = None
        self._view_ref = None
        self.discriminator = None

        if eula is not None:
            self.eula = eula
        if welcome_html is not None:
            self.welcome_html = welcome_html
        if user_state is not None:
            self.user_state = user_state
        if description is not None:
            self.description = description
        if upgradable is not None:
            self.upgradable = upgradable
        if user_based is not None:
            self.user_based = user_based
        if self_service_disabled is not None:
            self.self_service_disabled = self_service_disabled
        if name is not None:
            self.name = name
        if id is not None:
            self.id = id
        if href is not None:
            self.href = href
        if view_ref is not None:
            self.view_ref = view_ref

    @property
    def eula(self):
        """Gets the eula of this BTBetaCapabilityInfo.  # noqa: E501


        :return: The eula of this BTBetaCapabilityInfo.  # noqa: E501
        :rtype: str
        """
        return self._eula

    @eula.setter
    def eula(self, eula):
        """Sets the eula of this BTBetaCapabilityInfo.


        :param eula: The eula of this BTBetaCapabilityInfo.  # noqa: E501
        :type: str
        """

        self._eula = eula

    @property
    def welcome_html(self):
        """Gets the welcome_html of this BTBetaCapabilityInfo.  # noqa: E501


        :return: The welcome_html of this BTBetaCapabilityInfo.  # noqa: E501
        :rtype: str
        """
        return self._welcome_html

    @welcome_html.setter
    def welcome_html(self, welcome_html):
        """Sets the welcome_html of this BTBetaCapabilityInfo.


        :param welcome_html: The welcome_html of this BTBetaCapabilityInfo.  # noqa: E501
        :type: str
        """

        self._welcome_html = welcome_html

    @property
    def user_state(self):
        """Gets the user_state of this BTBetaCapabilityInfo.  # noqa: E501


        :return: The user_state of this BTBetaCapabilityInfo.  # noqa: E501
        :rtype: int
        """
        return self._user_state

    @user_state.setter
    def user_state(self, user_state):
        """Sets the user_state of this BTBetaCapabilityInfo.


        :param user_state: The user_state of this BTBetaCapabilityInfo.  # noqa: E501
        :type: int
        """

        self._user_state = user_state

    @property
    def description(self):
        """Gets the description of this BTBetaCapabilityInfo.  # noqa: E501


        :return: The description of this BTBetaCapabilityInfo.  # noqa: E501
        :rtype: str
        """
        return self._description

    @description.setter
    def description(self, description):
        """Sets the description of this BTBetaCapabilityInfo.


        :param description: The description of this BTBetaCapabilityInfo.  # noqa: E501
        :type: str
        """

        self._description = description

    @property
    def upgradable(self):
        """Gets the upgradable of this BTBetaCapabilityInfo.  # noqa: E501


        :return: The upgradable of this BTBetaCapabilityInfo.  # noqa: E501
        :rtype: bool
        """
        return self._upgradable

    @upgradable.setter
    def upgradable(self, upgradable):
        """Sets the upgradable of this BTBetaCapabilityInfo.


        :param upgradable: The upgradable of this BTBetaCapabilityInfo.  # noqa: E501
        :type: bool
        """

        self._upgradable = upgradable

    @property
    def user_based(self):
        """Gets the user_based of this BTBetaCapabilityInfo.  # noqa: E501


        :return: The user_based of this BTBetaCapabilityInfo.  # noqa: E501
        :rtype: bool
        """
        return self._user_based

    @user_based.setter
    def user_based(self, user_based):
        """Sets the user_based of this BTBetaCapabilityInfo.


        :param user_based: The user_based of this BTBetaCapabilityInfo.  # noqa: E501
        :type: bool
        """

        self._user_based = user_based

    @property
    def self_service_disabled(self):
        """Gets the self_service_disabled of this BTBetaCapabilityInfo.  # noqa: E501


        :return: The self_service_disabled of this BTBetaCapabilityInfo.  # noqa: E501
        :rtype: bool
        """
        return self._self_service_disabled

    @self_service_disabled.setter
    def self_service_disabled(self, self_service_disabled):
        """Sets the self_service_disabled of this BTBetaCapabilityInfo.


        :param self_service_disabled: The self_service_disabled of this BTBetaCapabilityInfo.  # noqa: E501
        :type: bool
        """

        self._self_service_disabled = self_service_disabled

    @property
    def name(self):
        """Gets the name of this BTBetaCapabilityInfo.  # noqa: E501


        :return: The name of this BTBetaCapabilityInfo.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this BTBetaCapabilityInfo.


        :param name: The name of this BTBetaCapabilityInfo.  # noqa: E501
        :type: str
        """

        self._name = name

    @property
    def id(self):
        """Gets the id of this BTBetaCapabilityInfo.  # noqa: E501


        :return: The id of this BTBetaCapabilityInfo.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this BTBetaCapabilityInfo.


        :param id: The id of this BTBetaCapabilityInfo.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def href(self):
        """Gets the href of this BTBetaCapabilityInfo.  # noqa: E501


        :return: The href of this BTBetaCapabilityInfo.  # noqa: E501
        :rtype: str
        """
        return self._href

    @href.setter
    def href(self, href):
        """Sets the href of this BTBetaCapabilityInfo.


        :param href: The href of this BTBetaCapabilityInfo.  # noqa: E501
        :type: str
        """

        self._href = href

    @property
    def view_ref(self):
        """Gets the view_ref of this BTBetaCapabilityInfo.  # noqa: E501


        :return: The view_ref of this BTBetaCapabilityInfo.  # noqa: E501
        :rtype: str
        """
        return self._view_ref

    @view_ref.setter
    def view_ref(self, view_ref):
        """Sets the view_ref of this BTBetaCapabilityInfo.


        :param view_ref: The view_ref of this BTBetaCapabilityInfo.  # noqa: E501
        :type: str
        """

        self._view_ref = view_ref

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
        if not isinstance(other, BTBetaCapabilityInfo):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
