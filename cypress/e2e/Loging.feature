Feature: Maven app - Loging  Page

    Scenario: Valid Loging Form Submission
        Given I navigate to the springbootapp homepage
        When I click on the here link
        And I type a user name
        And I type a password
        And I click on the signin button
        Then I should be presented with a successful contact us submission message