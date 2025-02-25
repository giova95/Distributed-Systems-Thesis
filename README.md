# Soluzioni Scalabili per l’Analisi degli Eventi Urbani tramite l’Integrazione di Snap4City e Sistemi di Gestione Video - Struttura delle directory

Questo zip contiene il codice e i materiali sviluppati durante il progetto di tesi. Di seguito è fornita una descrizione dettagliata delle varie cartelle presenti.

## Struttura delle Cartelle

## `src`

La directory principale del progetto, che contiene il codice scritto durante lo sviluppo della tesi. Al suo interno si trovano tre macro-cartelle:

###### `Dashboard Widget CSBL`

Contiene il codice in **Client-Side Business Logic (CSBL)** per i widget interattivi delle dashboard(mappe, device table, etc..). È suddivisa in due sezioni principali, ognuna relativa a una dashboard sviluppata:

- **Event Registration**: codice relativo alla dashboard per la registrazione degli eventi:
  - `eventViewer.html`, `filters.html`, `insertForm.html`, `webCamPic.html`
  - `map.js`, `dataTable.js`
- **Event Status Management**: codice relativo alla dashboard per la gestione dello stato degli eventi:
  - `filters.html`, `selectStatus.html`, `updateForm.html`

###### `Node-RED flows`

Questa cartella contiene i file JSON che descrivono i flussi **Node-RED** implementati per gestire diverse funzionalità:

- `EventGeneratorTestV2.json`: gestisce la creazione, l'invio e la ricezione di eventi.
- `EventManagement.json`: gestisce lo stato degli eventi.

###### `Node-RED library`

Contiene la libreria _node-red-contrib-snap4city-milestone_ che implementa i blocchi **Node-RED** per:

- Effettuare il login.
- Inviare e ricevere eventi dal VMS (Video Management System).

La libreria, denominata `node-red-contrib-snap4city-milestone`, include i seguenti file principali:

- **HTML e JS** per la gestione dei blocchi di login, lista degli allarmi e invio degli eventi:
  - `x-login.html`, `x-login.js`
  - `x-alarm-list.html`, `x-alarm-list.js`
  - `x-send-event.html`, `x-send-event.js`
- Funzioni di supporto e per l'autenticazione:
  - `utility.js`
  - `xprotect-gateway.js`

## `tesi`

Questa cartella contiene i materiali relativi alla tesi, tra cui:

- La tesi in formato PDF.
- `tesi_src` cartella che contiene il sorgente della tesi in formato **LaTeX**, comprensivo di:
  - File `.tex`.
  - Immagini utilizzate nella tesi.
  - Altri file di supporto.

## `docs`

Contiene documenti utili allo sviluppo del progetto, tra cui:

- PDF con note di installazione del VMS.
- Documenti di supporto allo sviluppo del progetto.
