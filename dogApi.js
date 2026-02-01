const apiURL = "https://dog.ceo/api/breeds/image/random"

const dogPix = async () => {
    const res = await fetch(apiURL)
    let data = await res.json()
    console.log(data.message);
}

dogPix()