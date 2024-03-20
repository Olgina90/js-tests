# [2024/03/18] Javascript Basics

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

Crea ed esporta una funzione che si chiama `different`.

Questa funzione ha 2 argomenti:

- `first` e' di tipo sconosciuto.
- `second` e' di tipo sconosciuto.

Questa funzione ritorna una variable di tipo `boolean`.

Se `first` e' diverso da `second` ritorna `false` altrimenti `true`.

Esempi:

```ts
different("ciao", "arrivederci"); // ritorna `true`
different("ciao", "ciao"); // ritorna `false`
```

### Test #2

Crea ed esporta una funzione che si chiama `join`.

Questa funzione ha tanti argomenti di tipo `string`.

Questa funzione ritorna una variable di tipo `string`.

Ritorna una parola che unisce tutti gli argomenti.

Esempi:

```ts
join("c", "i", "a", "o"); // ritorna "ciao"
```

### Test #3

Crea ed esporta una funzione che si chiama `dashed`.

Questa funzione ha un argomento.

- `word` e' di tipo `string`

Questa funzione ritorna una variable di tipo `string`.

Ritorna la stessa parola con trattini `-` tra le lettere.

Esempi:

```ts
dashed("ciao"); // ritorna "c-i-a-o"
```

### Test #4

Crea ed esporta una funzione che si chiama `bigOrSmall`.

Questa funzione ha due argomenti.

- `word` e' di tipo `string`
- `type` puo' essere `"big"` oppure `"small"`

Questa funzione ritorna una variable di tipo `string`.

Se `type` e' `"big"` allora la funzione ritorna la parola `word` in maiuscolo.
Se `type` e' `"small"` allora la funzione ritorna la parola `word` in minuscolo.

Esempi:

```ts
bigOrSmall("Ciao", "big"); // ritorna "CIAO"
bigOrSmall("Ciao", "small"); // ritorna "ciao"
```

### Test #5

Crea ed esporta una funzione che si chiama `valueOrNothing`.

Questa funzione ha un argomento.

- `value` e' opzionale di tipo sconosciuto

Questa funzione ritorna una variable di tipo sconosciuto.

Se `value` e' un valore vero, allora ritorna `value`.
Se `value` e' un valore falso, allora ritorna `"nothing"`

Esempi:

```ts
valueOrNothing("Ciao"); // ritorna "Ciao"
valueOrNothing(""); // ritorna "nothing"
valueOrNothing(0); // ritorna "nothing"
valueOrNothing(1); // ritorna 1
valueOrNothing(); // ritorna "nothing"
valueOrNothing(false); // ritorna "nothing"
valueOrNothing(true); // ritorna true
```

## Risultati

- Test #1:
  - Test passati (0/4)
  - Typescript check (5/5)
  - Funzionalita' (4/5)
- Test #2:
  - Test passati (0/4)
  - Typescript check (2/5)
  - Funzionalita' (0/5)
- Test #3:
  - Test passati (0/4)
  - Typescript check (5/5)
  - Funzionalita' (5/5)
- Test #4:
  - Test passati (0/4)
  - Typescript check (5/5)
  - Funzionalita' (5/5)
- Test #5:

  - Test passati (0/4)
  - Typescript check (5/5)
  - Funzionalita' (5/5)

- Tempo: (7/20)

- Condotta: (10/10)

## Totale: (58/100)
