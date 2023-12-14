# BOOLFLIX

Applicativo che replica il funzionamento di siti come Netflix,AmazonPrime,Discovery,Paramount +, utilizzando l'API fornita da "https://www.themoviedb.org" per gestire la funzione di ricerca di film o serie TV.Si potrà anche visualizzare a schermo le varie info come titolo, data di uscita nella nazione selezionata, genere, durata, punteggio utente e votazione, possibilità di guardare il Trailer, trama, attori, lingua originale di realizzazione della pellicola, budget stanziato per il film, incasso totale al botteghino, interazioni social, recensioni e discussioni.

## Il Progetto avrà le seguenti milestone da seguire:

### Milestone 1
Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il  bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato: 
- Titolo
- Titolo Originale
- Lingua
- Voto

### Milestone 2
Trasformiamo la stringa statica della lingua in una vera e propria bandiera della nazione corrispondente, gestendo il caso in cui non abbiamo la bandiera della nazione ritornata dall’API.
Allarghiamo poi la ricerca anche alle serie tv. Con la stessa azione di ricerca dovremo prendere sia i film che corrispondono alla query, sia le serie tv.

### Milestone 3
In questa milestone come prima cosa aggiungiamo la copertina del film o della serie al nostro elenco.Ci viene passata dall’API solo la parte finale dell’URL, questo perché poi potremo generare da quella porzione di URL tante dimensioni diverse. 
Trasformiamo poi il voto da 1 a 10 decimale in un numero intero da 1 a 5, così da permetterci di stampare a schermo un numero di stelle piene che vanno da 1 a 5, lasciando le restanti vuote.

### Milestone 4
Trasformiamo quello che abbiamo fatto fino ad ora in una vera e propria webapp, creando un layout completo simil-Netflix:
- Un header che contiene logo e search bar
- Dopo aver ricercato qualcosa nella searchbar, i risultati appaiono sotto forma di “card” in cui lo sfondo è rappresentato dall’immagine di copertina.
- Andando con il mouse sopra una card, appaiono le informazioni aggiuntive già prese nei punti precedenti più la overview.
