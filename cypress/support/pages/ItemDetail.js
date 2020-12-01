const PRODUCT_SIZE_SELECT = '#group_1';
const ADD_TO_CART_BUTTON = '#add_to_cart > button';
const PROCEED_TO_CHECKOUT = 'a[title="Proceed to checkout"]';
const CONTINUE_SHOPPING = '';

class ItemDetail {
		
	assertPrice(expectedPrice) {
//		return cy.get('#our_price_display').value; // wanted this to be a "get" and just return the price but async :/

			cy.get('#our_price_display').should(($itemPrice) => {
				
				expect($itemPrice.get(0).innerText).to.eq(expectedPrice)
			})
	}
	
	changeSize(size) {
		cy.get(PRODUCT_SIZE_SELECT).select(size);
	}
	
	addToCart(){
		cy.get(ADD_TO_CART_BUTTON).click();
	}
	
	proceedToCheckout(){
		cy.get(PROCEED_TO_CHECKOUT).click();
	}
	
}

export default ItemDetail