const NAV_TO_LOGIN_BUTTON = '.header_user_info';
const LOGIN_EMAIL_INPUT = '#email';
const LOGIN_PASSWORD_INPUT = '#passwd';
const SUBMIT_LOGIN_INFO = '#SubmitLogin';
// using poetic license and using one class for both "nav-bar" and "login" since they're only tiny for this exercise

const SEARCH_BAR = '#search_query_top';
const SEARCH_SUBMIT = '.button-search';


class NavAndLogin {

    login(email, password){
		 
       cy.get(NAV_TO_LOGIN_BUTTON).click();
		 cy.get(LOGIN_EMAIL_INPUT).type(email);
		 cy.get(LOGIN_PASSWORD_INPUT).type(password);
		 cy.get(SUBMIT_LOGIN_INFO).click();
    }
	
	assertLoggedIn(){
		cy.get(NAV_TO_LOGIN_BUTTON)
			.find('.logout')
			.should('contain.text', 'Sign out');
	}
	
	searchFor(searchString) {
		cy.get(SEARCH_BAR).type(searchString);
		cy.get(SEARCH_SUBMIT).click();
	}
	
}

export default NavAndLogin;