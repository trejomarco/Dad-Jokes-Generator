const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");
const apiKey = "QtGlyjXKUJQkcGi/VqBWtA==LyL279YKYpRvtt2C";


const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
}

const apiUrL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"


async function getjoke() {
    try {

        jokeEl.innerText = "Updating...";
        btnEl.disabled = true;
        btnEl.innerText = "Loading..."
        const response = await fetch(apiUrL, options)
        const data = await response.json();

        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";

        jokeEl.innerText = data[0].joke;


    } catch (error) {
        jokeEl.innerText = "An error happned, try again later";
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
        console.log(error);

    }

}

btnEl.addEventListener("click", getjoke);