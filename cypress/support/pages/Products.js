const PRODUCT_LIST = '.product_list';

class Products {

	assertProductListSize(size) {
		cy.get(PRODUCT_LIST)
		.find('li')
		.its('length').should('be.gte', size);	
	}
	
//	clickNthItem(number) {
//
//	   cy.get(PRODUCT_LIST)
//			.find('li')
//			.eq(number)
//			.click();
//	} // from previous exercise.  Abandoned due to my not being able to store the results for the key values of this random product (price, name, size).  New version has expected values already in the fixture, so we can select a specific item and verify those values at various stages of the flow

	
	viewProduct(itemName) {
		
		cy.log("select item named: " + itemName)
//		cy.get(PRODUCT_LIST).then(($listOfProducts) => {
//			cy.log($listOfProducts.get('img[title="' + itemName + '"]')); //.click();
//		})
//		cy.get('img[title="' + itemName + '"]').click()
		cy.contains(itemName).click()
		// couldn't get this to work in time - this is just selecting the first matching element, which in this case is actually in a "top sellers" sidebar and does not validate that my search actually returned the expected item.
	}
	
	
}
export default Products