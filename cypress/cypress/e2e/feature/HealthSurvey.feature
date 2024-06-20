
@Feature-001 
Feature: Health Survey Feature

    @Regression @smoke
    Scenario Outline: Verify user under 18 can fill out health survey
        Given the user lands on the URL
        And the user enters "<name>" in the name input field
        And the user clicks on the radio button under 18 age radio button
        And the user selects "<Exercise>" from the dropdown 
        When the user clicks on the submit button 
        Then the user should Verify the "<message>"  
        And the user closes the browser
    Examples:
    | name    |Exercise |message                        |
    | Siddhant|Yes      |Your response has been recorded|
    | Sachin  |No       |Your response has been recorded|