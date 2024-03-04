# [2024/03/04] Javascript Basics

## Regole

- La durata di questo test e' di 30 minuti
- Si potranno usare solo i seguenti file in questa cartella:
    - `test.md`
    - `test.ts`
- L'utilizzo del browser non e' consentito


## Test

Tutto il codice viene scritto nel file [`test.ts`](test.ts).

Esempio:

```ts
export const getFirstArgument = () => {
    ...
}

export const sum = () => {
    ...
}

etc...
```

### Test #1

Crea ed esporta una funzione che si chiama `getFirstArgument`.

Questa funzione ha 1 argomento `value`:
- `value` e' di tipo sconosciuto (`unknown`).

Questa funzione ritorna una variable di tipo sconosciuto.

Questa funzione ritorna il primo argomento.

### Test #2

Crea ed esporta una funzione che si chiama `sum`.

Questa funzione ha 2 argomenti `a` e `b`:
- `a` e' un numero
- `b` e' un numero

Questa funzione ritorna un numero.

Questa funzione ritorna la somma tra `a` e `b`

### Test #3

Crea ed esporta una funzione che si chiama `calc`

Questa funzione ha 3 argomenti `a`, `operator` e `b`:
- `a` e' un numero
- `operator` ha 4 tipi `'+' | '-' | '*' | '/'`
- `b` e' un numero

Questa funzione ritorna un numero.

- Se `operator` e' uguale a `'+'` allora ritorna `a + b`
- Se `operator` e' uguale a `'-'` allora ritorna `a - b`
- Se `operator` e' uguale a `'*'` allora ritorna `a * b`
- Se `operator` e' uguale a `'/'` allora ritorna `a / b`

### Test #4

Crea ed esporta una funzione che si chiama `getValueOrOne`

Questa funzione ha 1 argomento `value`:
- `value` e' un numero opzionale (`?: number`)

Questa funzione ritorna un numero 

Questa funzione ritorna il primo argomento oppure `1`:
- se il primo argomento e' un valore vero (non uguale a 0) allora ritorna il primo argomento.
- se il primo argomento e' un valore falso (uguale a 0) allora ritorna `1`

### Test #5

Crea ed esporta una funzione che si chiama `max`

Questa funzione ha tanti argomenti:

- Gli argomenti sono una lista di numeri

Questa funzione ritorna un numero

Questa funzione ritorna il numero piu grande tra gli argomenti.

## Risultati

- Test #1:
    - Test passati (4/4)
    - Typescript check (5/5)
    - Funzionalita' (5/5)
- Test #2:
    - Test passati (4/4)
    - Typescript check (5/5)
    - Funzionalita' (5/5)
- Test #3:
    - Test passati (4/4)
    - Typescript check (4/5)
    - Funzionalita' (4/5)
- Test #4:
    - Test passati (3/4)
    - Typescript check (5/5)
    - Funzionalita' (2/5)
- Test #5:
    - Test passati (4/4)
    - Typescript check (5/5)
    - Funzionalita' (5/5)

- Tempo: (0/20)

- Condotta: (9/10)

## Totale: (73/100)