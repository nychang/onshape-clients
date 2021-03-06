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


class Customer(object):
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
        'object': 'str',
        'account_balance': 'int',
        'business_vat_id': 'str',
        'created': 'int',
        'currency': 'str',
        'default_source': 'str',
        'deleted': 'bool',
        'delinquent': 'bool',
        'description': 'str',
        'discount': 'Discount',
        'email': 'str',
        'livemode': 'bool',
        'metadata': 'dict(str, str)',
        'shipping': 'ShippingDetails',
        'sources': 'ExternalAccountCollection',
        'subscriptions': 'CustomerSubscriptionCollection',
        'cards': 'CustomerCardCollection',
        'default_card': 'str',
        'next_recurring_charge': 'NextRecurringCharge',
        'subscription': 'Subscription',
        'trial_end': 'int',
        'default_source_object': 'ExternalAccount'
    }

    attribute_map = {
        'id': 'id',
        'object': 'object',
        'account_balance': 'accountBalance',
        'business_vat_id': 'businessVatId',
        'created': 'created',
        'currency': 'currency',
        'default_source': 'defaultSource',
        'deleted': 'deleted',
        'delinquent': 'delinquent',
        'description': 'description',
        'discount': 'discount',
        'email': 'email',
        'livemode': 'livemode',
        'metadata': 'metadata',
        'shipping': 'shipping',
        'sources': 'sources',
        'subscriptions': 'subscriptions',
        'cards': 'cards',
        'default_card': 'defaultCard',
        'next_recurring_charge': 'nextRecurringCharge',
        'subscription': 'subscription',
        'trial_end': 'trialEnd',
        'default_source_object': 'defaultSourceObject'
    }

    def __init__(self, id=None, object=None, account_balance=None, business_vat_id=None, created=None, currency=None, default_source=None, deleted=None, delinquent=None, description=None, discount=None, email=None, livemode=None, metadata=None, shipping=None, sources=None, subscriptions=None, cards=None, default_card=None, next_recurring_charge=None, subscription=None, trial_end=None, default_source_object=None):  # noqa: E501
        """Customer - a model defined in OpenAPI"""  # noqa: E501

        self._id = None
        self._object = None
        self._account_balance = None
        self._business_vat_id = None
        self._created = None
        self._currency = None
        self._default_source = None
        self._deleted = None
        self._delinquent = None
        self._description = None
        self._discount = None
        self._email = None
        self._livemode = None
        self._metadata = None
        self._shipping = None
        self._sources = None
        self._subscriptions = None
        self._cards = None
        self._default_card = None
        self._next_recurring_charge = None
        self._subscription = None
        self._trial_end = None
        self._default_source_object = None
        self.discriminator = None

        if id is not None:
            self.id = id
        if object is not None:
            self.object = object
        if account_balance is not None:
            self.account_balance = account_balance
        if business_vat_id is not None:
            self.business_vat_id = business_vat_id
        if created is not None:
            self.created = created
        if currency is not None:
            self.currency = currency
        if default_source is not None:
            self.default_source = default_source
        if deleted is not None:
            self.deleted = deleted
        if delinquent is not None:
            self.delinquent = delinquent
        if description is not None:
            self.description = description
        if discount is not None:
            self.discount = discount
        if email is not None:
            self.email = email
        if livemode is not None:
            self.livemode = livemode
        if metadata is not None:
            self.metadata = metadata
        if shipping is not None:
            self.shipping = shipping
        if sources is not None:
            self.sources = sources
        if subscriptions is not None:
            self.subscriptions = subscriptions
        if cards is not None:
            self.cards = cards
        if default_card is not None:
            self.default_card = default_card
        if next_recurring_charge is not None:
            self.next_recurring_charge = next_recurring_charge
        if subscription is not None:
            self.subscription = subscription
        if trial_end is not None:
            self.trial_end = trial_end
        if default_source_object is not None:
            self.default_source_object = default_source_object

    @property
    def id(self):
        """Gets the id of this Customer.  # noqa: E501


        :return: The id of this Customer.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this Customer.


        :param id: The id of this Customer.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def object(self):
        """Gets the object of this Customer.  # noqa: E501


        :return: The object of this Customer.  # noqa: E501
        :rtype: str
        """
        return self._object

    @object.setter
    def object(self, object):
        """Sets the object of this Customer.


        :param object: The object of this Customer.  # noqa: E501
        :type: str
        """

        self._object = object

    @property
    def account_balance(self):
        """Gets the account_balance of this Customer.  # noqa: E501


        :return: The account_balance of this Customer.  # noqa: E501
        :rtype: int
        """
        return self._account_balance

    @account_balance.setter
    def account_balance(self, account_balance):
        """Sets the account_balance of this Customer.


        :param account_balance: The account_balance of this Customer.  # noqa: E501
        :type: int
        """

        self._account_balance = account_balance

    @property
    def business_vat_id(self):
        """Gets the business_vat_id of this Customer.  # noqa: E501


        :return: The business_vat_id of this Customer.  # noqa: E501
        :rtype: str
        """
        return self._business_vat_id

    @business_vat_id.setter
    def business_vat_id(self, business_vat_id):
        """Sets the business_vat_id of this Customer.


        :param business_vat_id: The business_vat_id of this Customer.  # noqa: E501
        :type: str
        """

        self._business_vat_id = business_vat_id

    @property
    def created(self):
        """Gets the created of this Customer.  # noqa: E501


        :return: The created of this Customer.  # noqa: E501
        :rtype: int
        """
        return self._created

    @created.setter
    def created(self, created):
        """Sets the created of this Customer.


        :param created: The created of this Customer.  # noqa: E501
        :type: int
        """

        self._created = created

    @property
    def currency(self):
        """Gets the currency of this Customer.  # noqa: E501


        :return: The currency of this Customer.  # noqa: E501
        :rtype: str
        """
        return self._currency

    @currency.setter
    def currency(self, currency):
        """Sets the currency of this Customer.


        :param currency: The currency of this Customer.  # noqa: E501
        :type: str
        """

        self._currency = currency

    @property
    def default_source(self):
        """Gets the default_source of this Customer.  # noqa: E501


        :return: The default_source of this Customer.  # noqa: E501
        :rtype: str
        """
        return self._default_source

    @default_source.setter
    def default_source(self, default_source):
        """Sets the default_source of this Customer.


        :param default_source: The default_source of this Customer.  # noqa: E501
        :type: str
        """

        self._default_source = default_source

    @property
    def deleted(self):
        """Gets the deleted of this Customer.  # noqa: E501


        :return: The deleted of this Customer.  # noqa: E501
        :rtype: bool
        """
        return self._deleted

    @deleted.setter
    def deleted(self, deleted):
        """Sets the deleted of this Customer.


        :param deleted: The deleted of this Customer.  # noqa: E501
        :type: bool
        """

        self._deleted = deleted

    @property
    def delinquent(self):
        """Gets the delinquent of this Customer.  # noqa: E501


        :return: The delinquent of this Customer.  # noqa: E501
        :rtype: bool
        """
        return self._delinquent

    @delinquent.setter
    def delinquent(self, delinquent):
        """Sets the delinquent of this Customer.


        :param delinquent: The delinquent of this Customer.  # noqa: E501
        :type: bool
        """

        self._delinquent = delinquent

    @property
    def description(self):
        """Gets the description of this Customer.  # noqa: E501


        :return: The description of this Customer.  # noqa: E501
        :rtype: str
        """
        return self._description

    @description.setter
    def description(self, description):
        """Sets the description of this Customer.


        :param description: The description of this Customer.  # noqa: E501
        :type: str
        """

        self._description = description

    @property
    def discount(self):
        """Gets the discount of this Customer.  # noqa: E501


        :return: The discount of this Customer.  # noqa: E501
        :rtype: Discount
        """
        return self._discount

    @discount.setter
    def discount(self, discount):
        """Sets the discount of this Customer.


        :param discount: The discount of this Customer.  # noqa: E501
        :type: Discount
        """

        self._discount = discount

    @property
    def email(self):
        """Gets the email of this Customer.  # noqa: E501


        :return: The email of this Customer.  # noqa: E501
        :rtype: str
        """
        return self._email

    @email.setter
    def email(self, email):
        """Sets the email of this Customer.


        :param email: The email of this Customer.  # noqa: E501
        :type: str
        """

        self._email = email

    @property
    def livemode(self):
        """Gets the livemode of this Customer.  # noqa: E501


        :return: The livemode of this Customer.  # noqa: E501
        :rtype: bool
        """
        return self._livemode

    @livemode.setter
    def livemode(self, livemode):
        """Sets the livemode of this Customer.


        :param livemode: The livemode of this Customer.  # noqa: E501
        :type: bool
        """

        self._livemode = livemode

    @property
    def metadata(self):
        """Gets the metadata of this Customer.  # noqa: E501


        :return: The metadata of this Customer.  # noqa: E501
        :rtype: dict(str, str)
        """
        return self._metadata

    @metadata.setter
    def metadata(self, metadata):
        """Sets the metadata of this Customer.


        :param metadata: The metadata of this Customer.  # noqa: E501
        :type: dict(str, str)
        """

        self._metadata = metadata

    @property
    def shipping(self):
        """Gets the shipping of this Customer.  # noqa: E501


        :return: The shipping of this Customer.  # noqa: E501
        :rtype: ShippingDetails
        """
        return self._shipping

    @shipping.setter
    def shipping(self, shipping):
        """Sets the shipping of this Customer.


        :param shipping: The shipping of this Customer.  # noqa: E501
        :type: ShippingDetails
        """

        self._shipping = shipping

    @property
    def sources(self):
        """Gets the sources of this Customer.  # noqa: E501


        :return: The sources of this Customer.  # noqa: E501
        :rtype: ExternalAccountCollection
        """
        return self._sources

    @sources.setter
    def sources(self, sources):
        """Sets the sources of this Customer.


        :param sources: The sources of this Customer.  # noqa: E501
        :type: ExternalAccountCollection
        """

        self._sources = sources

    @property
    def subscriptions(self):
        """Gets the subscriptions of this Customer.  # noqa: E501


        :return: The subscriptions of this Customer.  # noqa: E501
        :rtype: CustomerSubscriptionCollection
        """
        return self._subscriptions

    @subscriptions.setter
    def subscriptions(self, subscriptions):
        """Sets the subscriptions of this Customer.


        :param subscriptions: The subscriptions of this Customer.  # noqa: E501
        :type: CustomerSubscriptionCollection
        """

        self._subscriptions = subscriptions

    @property
    def cards(self):
        """Gets the cards of this Customer.  # noqa: E501


        :return: The cards of this Customer.  # noqa: E501
        :rtype: CustomerCardCollection
        """
        return self._cards

    @cards.setter
    def cards(self, cards):
        """Sets the cards of this Customer.


        :param cards: The cards of this Customer.  # noqa: E501
        :type: CustomerCardCollection
        """

        self._cards = cards

    @property
    def default_card(self):
        """Gets the default_card of this Customer.  # noqa: E501


        :return: The default_card of this Customer.  # noqa: E501
        :rtype: str
        """
        return self._default_card

    @default_card.setter
    def default_card(self, default_card):
        """Sets the default_card of this Customer.


        :param default_card: The default_card of this Customer.  # noqa: E501
        :type: str
        """

        self._default_card = default_card

    @property
    def next_recurring_charge(self):
        """Gets the next_recurring_charge of this Customer.  # noqa: E501


        :return: The next_recurring_charge of this Customer.  # noqa: E501
        :rtype: NextRecurringCharge
        """
        return self._next_recurring_charge

    @next_recurring_charge.setter
    def next_recurring_charge(self, next_recurring_charge):
        """Sets the next_recurring_charge of this Customer.


        :param next_recurring_charge: The next_recurring_charge of this Customer.  # noqa: E501
        :type: NextRecurringCharge
        """

        self._next_recurring_charge = next_recurring_charge

    @property
    def subscription(self):
        """Gets the subscription of this Customer.  # noqa: E501


        :return: The subscription of this Customer.  # noqa: E501
        :rtype: Subscription
        """
        return self._subscription

    @subscription.setter
    def subscription(self, subscription):
        """Sets the subscription of this Customer.


        :param subscription: The subscription of this Customer.  # noqa: E501
        :type: Subscription
        """

        self._subscription = subscription

    @property
    def trial_end(self):
        """Gets the trial_end of this Customer.  # noqa: E501


        :return: The trial_end of this Customer.  # noqa: E501
        :rtype: int
        """
        return self._trial_end

    @trial_end.setter
    def trial_end(self, trial_end):
        """Sets the trial_end of this Customer.


        :param trial_end: The trial_end of this Customer.  # noqa: E501
        :type: int
        """

        self._trial_end = trial_end

    @property
    def default_source_object(self):
        """Gets the default_source_object of this Customer.  # noqa: E501


        :return: The default_source_object of this Customer.  # noqa: E501
        :rtype: ExternalAccount
        """
        return self._default_source_object

    @default_source_object.setter
    def default_source_object(self, default_source_object):
        """Sets the default_source_object of this Customer.


        :param default_source_object: The default_source_object of this Customer.  # noqa: E501
        :type: ExternalAccount
        """

        self._default_source_object = default_source_object

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
        if not isinstance(other, Customer):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
