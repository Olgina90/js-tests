type Data = { name: string; age: number };
type getDataAndPos = Data & { position: number };
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
export const getDataWithPosition = (dataList: Data[]): getDataAndPos[] =>
  dataList.map((data, index) => ({ ...data, position: index + 1 }));
