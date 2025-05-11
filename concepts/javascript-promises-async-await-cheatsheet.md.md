# 🚀 JavaScript Promises & Async/Await Cheat Sheet

## ✅ What is a Promise?
A Promise is an object that represents the *future* success or failure of an asynchronous task.

It has **3 states**:
- **Pending** (still working)
- **Fulfilled** (succeeded → `resolve()`)
- **Rejected** (failed → `reject()`)

---

## ✅ Basic Promise Syntax

```javascript
const promise = new Promise((resolve, reject) => {
  // do async task here
  if (/* success */) {
    resolve("Success!");
  } else {
    reject("Error!");
  }
});
```

---

## 📚 Consuming a Promise

### 👉 Using `.then()` & `.catch()`

```javascript
promise
  .then(result => console.log("✅", result)) // on success
  .catch(error => console.error("❌", error)) // on failure
```

---

## 🔥 async / await syntax
👉 Modern, cleaner way to handle Promises

```javascript
async function runTask() {
  try {
    const result = await promise;  // waits until promise settles
    console.log("✅", result);
  } catch (error) {
    console.error("❌", error);
  }
}

runTask();
```

✅ `await` ➔ pauses until Promise finishes  
❌ Must be used inside an `async` function

---

## 🕑 Simulating Async Delay (setTimeout)

```javascript
const delayedPromise = new Promise((resolve) => {
  setTimeout(() => resolve("Done after 2 sec"), 2000);
});
```

📝 Real async tasks: API calls, file reads, DB queries  
(No need for `setTimeout` in real-world async tasks.)

---

## 🔄 Multiple Promises

### 👉 Run in parallel (`Promise.all`)

```javascript
Promise.all([promise1, promise2])
  .then(results => console.log(results))
  .catch(error => console.error(error));
```

### 👉 Run one by one (sequentially)

```javascript
async function runSequential() {
  const result1 = await promise1;
  const result2 = await promise2;
}
```

---

## 🏅 Quick Rules to Remember

- `resolve()` = success ✅
- `reject()` = failure ❌
- `then()` = handle success
- `catch()` = handle failure
- `async/await` = cleaner way to write promise code
- `await` pauses until Promise finishes
- `setTimeout` is optional ➔ just for simulating delay

---

## 🔥 Advanced Concepts

### 1. Promise Chaining

You can chain multiple `.then()` blocks:

```javascript
somePromise
  .then(result => {
    console.log(result); // first success
    return anotherPromise; // pass another promise to next step
  })
  .then(result2 => {
    console.log(result2); // second success
  })
  .catch(error => {
    console.error("❌", error); // handle any error
  });
```

---

### 2. `Promise.resolve()` and `Promise.reject()`

```javascript
const resolved = Promise.resolve("Success!");
const rejected = Promise.reject("Failure!");

resolved.then(result => console.log(result));  // "Success!"
rejected.catch(error => console.error(error));  // "Failure!"
```

---

### 3. `Promise.race()`

Returns the first promise that settles (either resolves or rejects):

```javascript
const promise1 = new Promise((resolve) => setTimeout(resolve, 100, "First"));
const promise2 = new Promise((resolve) => setTimeout(resolve, 200, "Second"));

Promise.race([promise1, promise2])
  .then(result => console.log(result)); // "First"
```

---

### 4. `Promise.allSettled()`

Handles **all promises**, whether they resolved or rejected:

```javascript
const promise1 = Promise.resolve(42);
const promise2 = Promise.reject("Error");

Promise.allSettled([promise1, promise2])
  .then(results => console.log(results));
```
Output:
```js
[
  { status: 'fulfilled', value: 42 },
  { status: 'rejected', reason: 'Error' }
]
```

---

### 5. `Promise.any()`

Returns the **first fulfilled** promise, ignores the rejected ones:

```javascript
const promise1 = Promise.reject("Error 1");
const promise2 = Promise.resolve("Success!");

Promise.any([promise1, promise2])
  .then(result => console.log(result)); // "Success!"
```

---

## 🌟 Final Thoughts:

- Promises are great for handling async operations cleanly, especially in complex workflows.
- `async/await` makes promise handling even easier, especially for sequential tasks.
- Always handle errors properly to avoid unhandled promise rejections.

---

### ✅ Summary of Updates:

- **Basics:** `resolve()`, `reject()`, `.then()`, `.catch()`, `async/await`.
- **Advanced Concepts:**
  - Promise chaining
  - `Promise.resolve()` / `Promise.reject()`
  - `Promise.race()`
  - `Promise.allSettled()`
  - `Promise.any()`
- **Best Practices:** Handle errors, avoid deep nesting, prefer `async/await`.

---

You now have a complete **Promises and async/await cheat sheet** for your reference in **README.md**!  
Feel free to copy-paste this into your project or GitHub! 📄🎉