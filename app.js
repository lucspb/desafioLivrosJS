/*
  - O objeto abaixo representa uma caixa de livros com espaço para 5 livros e 
    que, no momento em que foi declarado, possui nenhum livro dentro;
  - Crie um método que irá adicionar livros na caixa;
  
  Este método deve:
    - Receber por parâmetro o número de livros que serão colocados na caixa. 
      Esse número não precisa encher a caixa de uma só vez, os livros podem 
      ser acrescentados aos poucos;
    - Retornar a frase: "Já há 'X' livros na caixa";
    - Se a caixa já estiver cheia, com todos os espaços já preenchidos, o 
      método deve retornar a frase: "A caixa já está cheia";
    - Se ainda houverem espaços na caixa mas a quantidade de livros passada por
      parâmetro for ultrapassar o limite de espaços da caixa, mostre quantos 
      espaços ainda podem ser ocupados, com a frase: "Só cabem mais 
      QUANTIDADE_DE_LIVROS_QUE_CABEM livros";
    - Se couber somente mais um livro, mostre a palavra "livro" (no singular) 
      na frase acima.
*/

let booksBox = {
    spaces: 5,
    booksIn: 0
  }

  const getPluralOrSingular = (quantity, singular, plural) => 
    quantity === 1 ? singular : plural

  addBoxs = booksQuantity => { 
    let {booksIn, spaces} = booksBox // não é necessário colocar o booksBox na frente do booksIn e spaces por conta deste código
    const isBoxFilled = booksIn === spaces
    const boxSpacesAreNotEnough = booksIn + booksQuantity > spaces

    if(isBoxFilled){
      return "A caixa já está cheia"
    }

    if(boxSpacesAreNotEnough){
      const availableSpaces = spaces - booksIn
      const fitPluralOrSingular = 
        getPluralOrSingular(availableSpaces, 'cabe', 'cabem')
      const bookPluralOrSingular = 
        getPluralOrSingular(availableSpaces, 'livro', 'livros')
      return `Só ${fitPluralOrSingular} mais ${availableSpaces} ${bookPluralOrSingular}`
    }

    booksIn += booksQuantity;
    const bookPluralOrSingular = getPluralOrSingular(booksIn, 'livro', 'livros')
    return `Já há ${booksIn} ${bookPluralOrSingular} na caixa`
  }
  
  // console.log(addBoxs(4))
  // console.log(addBoxs(3))
  // console.log(addBoxs(3))
  console.log(addBoxs(1))
  console.log(booksBox)