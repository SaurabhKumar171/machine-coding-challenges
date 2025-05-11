// check even or odd using promise

const checkEven = (num) => {
  return new Promise((resolve, reject) => {
    if (num % 2 == 0) resolve("Even");
    else reject("Odd");
  });
};

checkEven(14)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error));

// Delay greeting function
const delayGreeting = async (name) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (name === "") {
    throw new Error("Something went wrong!");
  } else {
    return `Hello ${name}`;
  }
};

// delayGreeting('Saurabh')
// .then(result => console.log(result))
// .catch(error => console.log(error))
