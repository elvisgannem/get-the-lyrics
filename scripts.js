function findLyrics (artist, song) {
    return fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`)
}

const form = document.querySelector('#form')





form.addEventListener('submit', (element) => {
    element.preventDefault()
    getLyrics()

    const lyrics = document.querySelector('#lyrics')
    lyrics.innerHTML = '<img src="../loading.svg" class="animate-spin w-8 m-auto mt-4">'
})

async function getLyrics (){

    const artist = document.querySelector('#artist-form')
    const song = document.querySelector('#song-form')
    const lyrics = document.querySelector('#lyrics')

    try{
        const lyricsResponse = await findLyrics(artist.value, song.value)
        const data = await lyricsResponse.json()

        lyrics.innerHTML = `<p class="mt-4 text-sm text-gray-700">${data.lyrics}</p>`
    }catch {}

    
}

