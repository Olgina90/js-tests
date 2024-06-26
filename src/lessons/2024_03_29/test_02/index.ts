type Data = { name: string; age: number };
type DataAndPos = Data & { position: number };
/**
 * getDataWithPosition()
 *
 * Data una lista di dati come argomento,
 * ritorna la stessa lista includendo `position` per ogni elemento:
 *  - name: il nome preso dalla lista
 *  - position: la posizione della lista
 * @argument data - { name: string; age: number }[]
 * @returns data - { name: string; age: number, position: number }[]
 */
export const getDataWithPosition = (data: Data[]): DataAndPos[] =>
  data.map(({name, age}, index) => ({
    name,
    age,
    position: index + 1,
  }));
