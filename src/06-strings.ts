(() => {
  let productTitle = 'My amazing product'
  // productTitle = 123;
  // productTitle = null
  // productTitle = () = {}
  productTitle = 'My amazing product changed';
  console.log('productTitle', productTitle)

  const productDescription = "bla bla bla";
  console.log('productDescription', productDescription);

  let isNew: boolean = false;
  let productPrice = 100;

  const summary = `
  title: ${productTitle}
  description: ${productDescription}
  price: ${productPrice}
  isNew: ${isNew}
  `;
  console.log(summary);

  const myString: string = '';
})();
