type Data = { name: string; position: number };
/**
 * getData()
 *
 * Data una lista di nomi come argomento,
 * ritorna una lista di oggetti che includano:
 *  - name: il nome preso dalla lista
 *  - position: la posizione della lista
 * @argument names - string[]
 * @returns data - { name: string; position: number }[]
 */
export const getData = (names: string[]): Data[] =>
  names.map((item, index) => ({ name: item, position: index + 1 }));
