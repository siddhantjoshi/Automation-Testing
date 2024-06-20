const { Given,And, When, Then } = require('cypress-cucumber-preprocessor/steps');
const SurveyPage = require('../pageObject/surveyPage.obj');
const Util = require('../utilities/util');

Given('the user lands on the URL', () => {
    Util.log("*************************** Start ***************************")
    Util.log('Opening survey page');
    SurveyPage.visit();
});

And('the user enters {string} in the name input field', (details) => {
    Util.log(`Filling survey details with ${details}`);
    SurveyPage.fillSurveyDetailsName(details);
});
And('the user clicks on the radio button under 18 age radio button', () => {
    Util.log("Filling survey details with");
    SurveyPage.fillSurveyDetailsAge();
});

And('the user selects {string} from the dropdown', (option) => {
    Util.log(`Filling exercise survey details with ${option}`);
    SurveyPage.fillSurveyDetailsExercise(option);
});

When('the user clicks on the submit button', () => {
    Util.log('Submitting survey form');
    SurveyPage.submit();
});

Then('the user should Verify the {string}', (message) => {
    Util.log(`Verifying survey confirmation message ${message}`);
    SurveyPage.verifySubmission(message);
    // Util.report('Survey confirmation is visible');
});

And('the user closes the browser',()=>{
    Util.log("Browser close");
    SurveyPage.closeBrowser();
});
