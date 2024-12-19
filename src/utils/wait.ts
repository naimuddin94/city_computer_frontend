export async function wait(delay: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("success");
    }, delay);
  });
}
