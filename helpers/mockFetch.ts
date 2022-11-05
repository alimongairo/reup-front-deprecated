export const mockFetch = <T>(data: T, delay = 500) => {
  return new Promise<T>((resolve) => {
    setTimeout(() => resolve(data), delay);
  });
};
