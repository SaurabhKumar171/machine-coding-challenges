// How would you implement a function to execute an array of asynchronous tasks
// sequentially, collecting both resolved values and errors?

const asyncTask = () => {
  let min = 0;
  let max = 10;

  let num = Math.random() * (max - min) + min;

  return new Promise((resolve, reject) => {
    Math.floor(num) % 2 == 0 ? resolve("Even") : reject("Not Even");
  });
};

const tasksArray = [asyncTask, asyncTask, asyncTask, asyncTask];

const executeTasks = async () => {
  for (let task of tasksArray) {
    try {
      const res = await task();
      console.log({ status: "Fulfilled", value: res });
    } catch (error) {
      console.log({ status: "Failed", reason: error });
    }
  }
};

executeTasks();
