/** @tossdocs-ignore */
/**
 * @deprecated This feature is now available in the es-toolkit package.
 */
export function groupBy<T>(data: T[], createKey: (item: T) => string) {
  return data.reduce((result: Record<string, T[]>, current) => {
    const key = createKey(current);
    const value = result[key];
    if (value == null) {
      result[key] = [current];
    } else {
      value.push(current);
    }
    return result;
  }, {});
}
