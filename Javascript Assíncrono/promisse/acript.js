const { async } = require("q");

async function resolvePromise(){
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve('Resolvida!!');
        }, 2000);
    });

// encadear chamadas
    const resolved = await myPromise
        .then((result) => result + 'passando pelo then')
        .then((result) => result + 'agora acabou!!')
        .catch((err) => console.log(err.message));

    return resolved
}


