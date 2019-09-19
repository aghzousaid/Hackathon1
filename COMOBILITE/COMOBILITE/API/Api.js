

export function getFromApi (depart, arrive) {

   const url = 'http://10.188.132.16:3000/trajets/ajouter/' + depart + "/" + arrive
  

    return fetch(url)
  
      .then((response) => response.json())
  
      .catch((error) => console.error(error))

  }


export function getTrajetsFromApi () {

  const url = 'http://10.188.132.16:3000/trajets' 
 

   return fetch(url)
 
     .then((response) => response.json())
 
     .catch((error) => console.error(error))

 }