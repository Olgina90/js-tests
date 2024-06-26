/**
 * mergeListAndArguments()
 *
 * Data una lista come primo argomento, ed altri argomenti
 * ritorna la prima lista aggiungendo gli altri argomenti
 * @returns arguments - unknown[]
 */
export const mergeListAndArguments = (
  list: unknown[],
  ...args: unknown[]
): unknown[] => [...list, ...args];
