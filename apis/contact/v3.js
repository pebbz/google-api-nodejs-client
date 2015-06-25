/**
 * Copyright 2014 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* jshint maxlen: false */

'use strict';

var createAPIRequest = require('../../lib/apirequest');

/**
 * Contact API
 *
 * @classdesc Google Contacts API to create new contacts, edit or delete existing contacts, and query for contacts that match particular criteria.
 * @namespace admin
 * @version  contact_v3
 * @variation contact_v3
 * @this Admin
 * @param {object=} options Options for Admin
 */
function Contact(options) {
  var self = this;
  this._options = options || {};

  this.contacts = {

    /**
     * contact.contacts.list
     *
     * @desc List Contacts
     *
     * @alias contact.contacts.list
     * @memberOf! contact(contact_v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.userID - Email or immutable Id of the group
     * @param  {string} params.projection - Projection
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.google.com/m8/feeds/contacts/{userID}/{projection}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['userID', 'projection'],
        pathParams: ['userID', 'projection'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * contact.contacts.get
     *
     * @desc Get Contacts
     *
     * @alias contact.contacts.get
     * @memberOf! contact(contact_v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.userEmail - Email of user
     * @param  {string} params.contactId - Email of contact
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.google.com/m8/feeds/contacts/{userEmail}/full/{contactId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['userEmail', 'contactId'],
        pathParams: ['userEmail', 'contactId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },


  }
}

/**
 * Exports Contact object
 * @type Contact
 */
module.exports = Contact;


