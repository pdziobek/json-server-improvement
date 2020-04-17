### HOW TO RUN THE PROJECT
* please be sure that you already have installed node.js and git.
* to run this project , install it locally using npm:
```
$ cd ../json-server-improvement
$ npm install
$ npm start
```
* open second terminal
* install json server:
```
$ npm install -g json-server 
$ json-server -p 4000 db.json
```


### Część 1

Stwórz komponent `CarsManager`.

Za pomocą `fetch()` wykonaj zapytanie do swojego lokalnego serwera tak, aby pobrać listę wszystkich aut.

Następnie zbuduj listę (pamiętaj o odpowiednich kluczach), w której będziesz wyświetlał dla każdego auta wszystkie dostępne informacje oraz przycisk "Sprzedany".

Po kliknięciu na ten przycisk powinieneś wykonać odpowiednie zapytanie, które usunie daną pozycję z bazy lokalnej. Następnie zmodyfikuj state tak, żeby odzwierciedlić zmiany. **Nie odświeżaj strony!**.

Niech komponent wyrenderuje w `div` element `ul` z elementami listy samochodów.

Pamiętaj o zablokowaniu wyświetlania komponentu dopóki nie otrzymasz odpowiedzi z serwera.


### Część 2

Stwórz komponent `AddCar`, który będzie zawierał formularz służący do dodania samochodu do bazy danych. Musi zawierać pola:

- Nazwa [name]
- Marka [brand]
- Silnik
    - Typ [type]
    - Moc [hp]

 Po dodaniu auta do bazy ma ono również pojawić się na liście samochodów. **Nie należy wysyłać ponownego zapytania do bazy ani odświeżać strony!**.


### Część 3

Stwórz komponent `Car`, który będzie miał za zadanie wyświetlać tylko jeden samochód z bazy danych. Należy tak zmodyfikować zadanie aby po pobraniu danych z bazy generować komponenty `Car` i przekazywać do nich przez `props` wszystkie niezbędne dane, a także callback funkcji, która usunie auto z bazy i odświeży widok.

Komponent ten należy rozbudować o **Edycję** samochodu. Dodaj przycisk **Edytuj**, po którego kliknięciu ma pojawić się formularz do edycji tego konkretnego auta. Po kliknięciu **Zapisz** dane mają zapisać się w bazie danych, a także zaktualizować na stronie.

Formularz należy walidować: pola nie mogą być puste a konie mechaniczne muszą być tylko cyframi.

---
