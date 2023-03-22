// mock request

export const submit = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Sorry, there is something wrong")
  }, 500)
})