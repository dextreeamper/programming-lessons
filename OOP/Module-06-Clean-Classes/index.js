// Product class
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// Cart item class
class CartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  subtotal() {
    return this.product.price * this.quantity;
    // 20(ballpen) x qty(6) = 120
  }
}

// Shopping cart class
class ShoppingCart {
  constructor() {
    this.items = []; // empty array
  }

  add(product, quantity) {
    this.items.push(new CartItem(product, quantity));
  }

  show() {
    let total = 0;

    for (const item of this.items) {
      console.log(
        `${item.product.name} x ${item.quantity} = ₱${item.subtotal()}`,
      );

      total += item.subtotal();
    }

    console.log(`\nTotal: ₱${total}`);
    console.log("Payment: E-Wallet");
    console.log("Status: Paid");
  }
}

// Create products
const mouse = new Product("Mouse", 500);
const keyboard = new Product("Keyboard", 1500);

// Create cart and add items
const cart = new ShoppingCart();

cart.add(mouse, 2);
cart.add(keyboard, 1);

// Display result
cart.show();
