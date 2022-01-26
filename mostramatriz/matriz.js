const matriz = {

    primogenito: {
      primeironeto: {
        nome: "Neto",
        idade: 100
      },
      segundoneto: {
        nome: "Segundo Neto",
        idade: 99
      },
      terceironeto: {
        nome: "Terceiro Neto",
        idade: 98
      }
    },
  
    filhodomeio: {
      primeironeto: {
        nome: "Quarto Neto",
        idade: 97
      },
      segundoneto: {
        nome: "Quinto Neto",
        idade: 96
      },
      terceironeto: {
        nome: "Sexto Neto",
        idade: 95
      }
    },
  
    cacula: {
      primeironeto: {
        nome: "Setimo Neto",
        idade: 94
      },
      segundoneto: {
        nome: "Oitavo Neto",
        idade: 93
      },
      terceironeto: {
        nome: "Nono Neto",
        idade: 92
      }
    },
  }
  
  
  function mostramatriz(nomematriz) {
    for (let key in nomematriz) {
      if (typeof nomematriz[key] === "object") {
        console.log(key);
        mostramatriz(nomematriz[key]);
      } else {
        console.log(`${key} = ${nomematriz[key]}`);
      }
    }
  }
  
  mostramatriz(matriz)
  