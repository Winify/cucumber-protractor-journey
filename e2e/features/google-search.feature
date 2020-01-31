Feature:
  'When I go to the Google search page, and search for an item,
  I expect to see some reference to that item in the result summary.'

  Scenario: Implicit search on Google
    Given that I am on the Google page
    When I add cats to the search box
    And click the Search Button
    Then cats should be mentioned in the results

  Scenario: Explicit search on Google
    Given that I am on the Google page
    When I search for cats
    Then cats should be mentioned in the results
