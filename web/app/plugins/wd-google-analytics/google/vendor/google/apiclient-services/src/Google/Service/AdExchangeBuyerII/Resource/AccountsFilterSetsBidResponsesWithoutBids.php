<?php
/*
 * Copyright 2014 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

/**
 * The "bidResponsesWithoutBids" collection of methods.
 * Typical usage is:
 *  <code>
 *   $adexchangebuyer2Service = new Google_Service_AdExchangeBuyerII(...);
 *   $bidResponsesWithoutBids = $adexchangebuyer2Service->bidResponsesWithoutBids;
 *  </code>
 */
class Google_Service_AdExchangeBuyerII_Resource_AccountsFilterSetsBidResponsesWithoutBids extends Google_Service_Resource
{
  /**
   * List all reasons for which bid responses were considered to have no
   * applicable bids, with the number of bid responses affected for each reason.
   * (bidResponsesWithoutBids.listAccountsFilterSetsBidResponsesWithoutBids)
   *
   * @param string $accountId Account ID of the buyer.
   * @param string $filterSetId The ID of the filter set to apply.
   * @param array $optParams Optional parameters.
   *
   * @opt_param int pageSize Requested page size. The server may return fewer
   * results than requested. If unspecified, the server will pick an appropriate
   * default.
   * @opt_param string pageToken A token identifying a page of results the server
   * should return. Typically, this is the value of
   * ListBidResponsesWithoutBidsResponse.nextPageToken returned from the previous
   * call to the accounts.filterSets.bidResponsesWithoutBids.list method.
   * @return Google_Service_AdExchangeBuyerII_ListBidResponsesWithoutBidsResponse
   */
  public function listAccountsFilterSetsBidResponsesWithoutBids($accountId, $filterSetId, $optParams = array())
  {
    $params = array('accountId' => $accountId, 'filterSetId' => $filterSetId);
    $params = array_merge($params, $optParams);
    return $this->call('list', array($params), "Google_Service_AdExchangeBuyerII_ListBidResponsesWithoutBidsResponse");
  }
}
