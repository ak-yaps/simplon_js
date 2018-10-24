//LES CONDITIONS

//TP : réaliser un programme pour ajouter des produits dans un panier.

(function createCart() {
  var cart = [];

  function createProduct(n, p, rd) {
    return {
      name: n,
      price: p,
      releasedate: rd
    }
  }

  var p1 = createProduct('PS4', 289, '15/11/2015');
  var p2 = createProduct('Switch', 329.99, '03/03/2017');
  var p3 = createProduct('Xbox One', 49.99,'23/11/2013');
  var p4 = createProduct('Megadrive Mini', 89.99,'19/11/2017');
  var p5 = createProduct('Super Nes Mini', 79.99,'29/09/2017');
  var p6 = createProduct('Nes Mini', 79.99,'10/11/2016');

  function addProduct(m) {
    return cart.push(m);
}

  console.log(cart.push(p1));
}());
