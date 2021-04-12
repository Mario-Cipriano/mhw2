/*creazione elementi*/


const article1 = document.querySelector('.article1-preferiti')
const article3 = document.querySelector('.article3')




/*creazione article3*/
for (let i = 0; i < 8; i++) {

    const section = document.createElement('section');
    const img = document.createElement('img');
    const div = document.createElement('div');
    const h1 = document.createElement('h1')
    const preferiti = document.createElement('img')
    const settore = document.createElement('h3')
    const paragrafo = document.createElement('p')
    const bottone1 = document.createElement('button')
    const bottone2 = document.createElement('button')



    article3.appendChild(section)
    section.appendChild(img)
    section.appendChild(div)
    div.appendChild(h1)
    div.appendChild(preferiti)
    section.appendChild(settore)
    section.appendChild(paragrafo)
    section.appendChild(bottone1)
    section.appendChild(bottone2)


    /*classi*/
    section.classList.add('section-fiere')
    preferiti.classList.add('preferiti')
    img.classList.add('section-img')
    div.classList.add('content')
    settore.classList.add('settore')
    h1.classList.add('title')
    paragrafo.classList.add('hidden')
    bottone2.classList.add('second', 'hidden')
    bottone1.classList.add('first')



}



/*Variabili Globali*/
const section = document.querySelectorAll('.article3 .section-fiere')
const SectionImg = document.querySelectorAll('.section-img')
const favourite = document.querySelectorAll('.section-fiere .content .preferiti')
const title = document.querySelectorAll('.section-fiere .content .title')
const SelezionaMostrapiu = document.querySelectorAll('.section-fiere .first')
const settore = document.querySelectorAll('.settore')
const SelezionaParagrafi = document.querySelectorAll('.section-fiere p')
const SelezionaMostrameno = document.querySelectorAll('.section-fiere .second')
const BarraRicerca = document.querySelector('.contenuti-barra input')



for (let i = 0; i < 8; i++) {
    /* immagini section */
    SectionImg[i].src = immagini[i]

    /*Icona Preferiti*/
    favourite[i].src = 'icon-add.png'

    /*Titoli div*/

    title[i].textContent = titoli[i]

    /*settore*/
    settore[i].textContent = settori[i]

    /*Descrizione*/
    section[i].querySelector('button').textContent = 'Mostra Più'

    SelezionaMostrameno[i].textContent = 'Mostra Meno'
    SelezionaParagrafi[i].textContent = descrizioni[i]

}





function RimuoviMostraPiu(event) {
    for (let i = 0; i < 8; i++) {
        if ((SelezionaMostrapiu[i] === event.target)) {
            SelezionaMostrapiu[i].classList.add('hidden')
            SelezionaParagrafi[i].classList.remove('hidden')
            SelezionaMostrameno[i].classList.remove('hidden')
        }

    }

}


function RimuoviMostraMeno(event) {

    for (let i = 0; i < 8; i++) {
        if ((SelezionaMostrameno[i] === event.target)) {
            SelezionaMostrapiu[i].classList.remove('hidden')
            SelezionaParagrafi[i].classList.add('hidden')
            SelezionaMostrameno[i].classList.add('hidden')
        }
    }
}

let cont = 0;


function RimuoviPreferiti(event) {
    cont--
    if (cont === 0) {
        article1.classList.add('hidden')
    }
    const rimuovi = event.target
    rimuovi.parentNode.parentNode.classList.add('hidden')
    const titolo = rimuovi.parentNode.querySelector('h1');
    for (let i = 0; i < 8; i++) {
        if (titolo.innerText === title[i].textContent) {
            const img_section = title[i].parentNode.querySelector('.preferiti');
            img_section.src = 'icon-add.png'
            img_section.addEventListener('click', AggiungiPreferiti);
        }
    }

}

function AggiungiPreferiti(event) {
    cont++
    for (let i = 0; i < 8; i++) {
        if ((favourite[i] === event.target)) {

            favourite[i].src = 'raccolta-preferiti.png'
            favourite[i].removeEventListener('click', AggiungiPreferiti)

            /*favourite[i].parentNode.parentNode.classList.add('hidden1')*/
            const sectionpreferiti = document.querySelector('.section-preferiti')
            const divcontent = document.createElement('div')
            const img = document.createElement('img')
            const h1 = document.createElement('h1')
            const divtitle = document.createElement('div')
            const imgpreferiti = document.createElement('img')

            sectionpreferiti.appendChild(divcontent)
            divcontent.appendChild(img)
            divcontent.appendChild(divtitle)
            divtitle.appendChild(h1)
            divtitle.appendChild(imgpreferiti)

            divcontent.classList.add('div-content')
            divtitle.classList.add('div-title')

            imgpreferiti.src = 'icon-remove.png'
            img.src = immagini[i]
            h1.textContent = titoli[i]
            article1.classList.remove('hidden')

            imgpreferiti.addEventListener('click', RimuoviPreferiti)


        }
    }

}

function Ricerca() {
    const testo = BarraRicerca.value
    if (testo !== '') {
        for (let titolo of title) {
            if (titolo.textContent.toLowerCase().indexOf(testo) === -1) {
                titolo.parentNode.parentNode.classList.add('hidden')
            } else titolo.parentNode.parentNode.classList.remove('hidden');
        }

    } else
        for (let titolo of title) {
            titolo.parentNode.parentNode.classList.remove('hidden');
        }

}





for (let bottone of SelezionaMostrapiu) {
    bottone.addEventListener('click', RimuoviMostraPiu)
}
for (let bottone of SelezionaMostrameno) {
    bottone.addEventListener('click', RimuoviMostraMeno)
}

for (let preferito of favourite) {
    preferito.addEventListener('click', AggiungiPreferiti)
}


BarraRicerca.addEventListener('keyup', Ricerca)