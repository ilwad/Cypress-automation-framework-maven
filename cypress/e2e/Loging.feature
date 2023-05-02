@login @regression
Feature: Maven app - Loging  Page
    Scenario Outline: Validate valid & invalid login credentials
        Given I navigate to the springbootapp homepage
        When I click on the here link
        And I type a username <username>
        And I type a password <password>
        And I click on the login button
        Then I should be presented with an alert box which contains text '<expectedAlertText>'

        Examples:
            | username | password    | expectedAlertText             |
            | user     | password    | Welcome to Maven APP!         |
            | user     | Password123 | Invalid username and password |