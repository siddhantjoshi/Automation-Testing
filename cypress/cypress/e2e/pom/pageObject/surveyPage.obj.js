const Util = require('../utilities/util');

class SurveyPage {
    visit() {
        cy.visit('https://docs.google.com/forms/d/e/1FAIpQLScPfEbpaoUu3WVwSDM9wIFX5uo1XQ1xpuHNtP7cF_rkR-o8Zg/viewform');
        Util.takeScreenshot('visit');
    }

    fillSurveyDetailsName(details) {
        Util.getLocator('surveyPage', 'name_input_field').then((nameLocator) => {
            cy.get(nameLocator).type(details);
        });
        Util.takeScreenshot('fillSurveyDetailsName');
    }

    fillSurveyDetailsAge() {
        Util.getLocator('surveyPage', 'under_age_radio_button').then((ageLocator) => {
            cy.get(ageLocator).click();
        });
        Util.takeScreenshot('fillSurveyDetailsAge');
    }

    fillSurveyDetailsExercise(option) {
        Util.getLocator('surveyPage', 'exercise_drop_down').then((dropdownLocator) => {
            cy.get(dropdownLocator).click();
        });

        Util.getLocator('surveyPage', option.toLowerCase() === 'yes' ? 'exercise_yes' : 'exercise_no')
            .then((exerciseOptionLocator) => {
                cy.get(exerciseOptionLocator).click();
            });

        Util.takeScreenshot('fillSurveyDetailsExercise');
    }

    submit() {
        Util.getLocator('surveyPage', 'submit_button').then((submitButtonLocator) => {
            cy.get(submitButtonLocator).click();
        });
        Util.takeScreenshot('submit');
    }

    verifySubmission(message) {
        cy.url().should('include', '/formResponse');
        Util.getLocator('surveyPage', 'survey_confirm').then((confirmationLocator) => {
            cy.get(confirmationLocator).contains(message).should('be.visible');
        });
        Util.takeScreenshot('verifySubmission');
    }

    closeBrowser() {
        cy.clearCookies();
        cy.clearLocalStorage();
        Util.takeScreenshot('closeBrowser');
        cy.window().then(win => {
            win.close();
        });
    }
}
module.exports = new SurveyPage();
