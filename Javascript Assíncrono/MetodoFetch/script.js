// metodo pra utilziar com API
fetch(url, options)
    .then(response => response.json())
    .then(json => console.log(json))

// retorna uma promise