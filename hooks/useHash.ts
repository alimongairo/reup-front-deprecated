const hash: any = {};

export const useHash = <T extends Function>(cb: T, deps: Array<any>): T => {
  const hashKey = JSON.stringify(deps);
  if (hash[hashKey]) {
    return hash[hashKey];
  }
  hash[hashKey] = cb(123); // 2s
  return hash[hashKey];
};
