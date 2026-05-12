const input = document.querySelector('#input');
const translateBtn = document.querySelector('#translateBtn');
const output = document.querySelector('#output');

async function translateText() {
    const text = input.value;
    const safeText = encodeURIComponent(text);
    const email = "your-email@example.com";
    const url = `https://api.mymemory.translated.net/get?q=${safeText}&langpair=uk|en&de=${email}`;
    const response = await fetch(url);
    const data = await response.json();

    output.innerText = data.responseData.translatedText;
}

translateBtn.addEventListener('click', translateText);