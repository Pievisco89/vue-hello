/* Descrizione:
 - Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
 - Cambiare il colore del testo cliccando su dei bottoni
Bonus:
1. Aggiungere alla pagina un’immagine, presa anch’essa da un data.
2. Cambiare la classe del testo scrivendola dentro a un input ma il cambio deve avvenire solo quando viene premuto invio */


const app = new Vue ({

  el: '#app',
  data: {
    msg: 'Questo è un messaggio stampato utilizzando i data!',
    mioColore: '',
    miaClasse: '',
    immagine: 'assets/img/palloncini.jpg'
  },
  methods: {
    cambioColore(classe){
      this.mioColore = classe;
    },
    inputEnter(){ //per cambiare il colore tramite input e enter
      this.mioColore = this.miaClasse;
    }
  
  }

});

