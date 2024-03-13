(() => {
  let userId: string | number;
  userId = 'asasa';
  userId = 1212;

  function greeting(myText: string | number) {

    // tipado dinámico
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLowerCase()}`);
    } else {
      console.log(`number ${myText.toFixed(1)}`);
    }
  }
  greeting('Tomasa');
  greeting(12.1212121212);
})();
