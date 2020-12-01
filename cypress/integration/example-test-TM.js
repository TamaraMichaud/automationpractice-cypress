import NavBar from "../support/pages/NavAndLogin";
import ProductList from "../support/pages/Products";
import Item from "../support/pages/ItemDetail";
import Checkout from "../support/pages/Checkout";


// sign in and perform a search
// - correct sign-in, incorrect username or password or both, password reset, register, incorrect register
// - incorrect/invalid values should be tested for length, required chars, illegal chars
// - search a valid item, nonsense returning no results, descriptive, typo, by product-id


context('TM Automation Take-Home Test', () => {
	
  it('Sign in as an existing user', () => {
	  
	  const logIn = new NavBar();
	  cy.visit('http://automationpractice.com/');
	  cy.fixture('user-info').then((userInfo) => {
		  logIn.login(userInfo.email, userInfo.password);
		  logIn.assertLoggedIn();
	  });
  });
	
	
  it('Search for an item', () => {
	  
	  const navBar = new NavBar();
	  const products = new ProductList();
	  const item = new Item();
	  const checkout = new Checkout();
	  
	  cy.fixture('product-info').then((allProducts) => {
		  
		  // get a random product type
		  	// I've only got one test product...
		  const randomIndex = 0;
		  const productObj = allProducts.products[randomIndex];
		  
		  console.log("search for a " + productObj.productType)
		  navBar.searchFor(productObj.productType);
		  products.assertProductListSize(1) // not sure how many results to expect, but if there's not even 1 then we can't proceed with this test
		  
		  // this should be another random index... but still zero
		  var testProduct = productObj.productList[randomIndex];
		  products.viewProduct(testProduct.name) // bug here, test invalid at present.

		  item.assertPrice(testProduct.price);

// not part of the exercise but I already coded the "item" methods and wanted to complete the "checkout.verifyTotalMatches()" for myself since I failed last time!
 	  	  // add to basket
		  item.addToCart();
		  item.proceedToCheckout();
	  
 	     // assert basket balance (doesn't allow for multiple items in basket :/)
		  checkout.verifyTotalMatches(testProduct.price)
	  
	  });
	  
	  // proceed through checkout
  });

});
