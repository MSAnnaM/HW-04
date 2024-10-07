const value = 5;

const double = (value) => new Promise((resolve) => resolve(value * 2));

const addTen = (value) => new Promise((resolve) => resolve(value + 10));

double(value)
  .then(addTen)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error));
