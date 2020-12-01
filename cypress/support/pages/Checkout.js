const TOTAL_PRODUCTS = '#total_product';
const TOTAL_SHIPPING = '#total_shipping';
const TOTAL = '#total_price';

class Checkout {
	
	getProductsTotal(){
		return cy.get(TOTAL_PRODUCTS).value;
	}
	
	getShippingTotal(){
		return cy.get(TOTAL_SHIPPING).value;
	}
	
	verifyTotalMatches(expectedTotal) {

		cy.get(TOTAL_SHIPPING).then(($shippingCost) => {
			
			cy.get(TOTAL).should(($basketPrice) => {
				// expected total is currently a string with "$" symbol, 
				// but needs to have the postage added in order to equal the basket total
				var expectedPlusPostage = expectedTotal.substr(1,99)*1 + 
													$shippingCost.get(0).innerText.substr(1,99)*1

				expect($basketPrice.get(0).innerText).to.eq("$" + expectedPlusPostage.toFixed(2))
			})
		})
	}
	
}

export default Checkout;