const paginas = [
    `<strong>26 de junio, 2025</strong><br>Hoy me encantó hablar contigo. Me dio mucha vergüenza haberme quedado dormido mientras me hablabas :( pero te prometo que sí te puse atención.<br><br>
    Eres la niña que más amo, y no me gusta que sientas inseguridad de que algún día “vaya a hacer algo”.<br><br>
    <strong>Jamás</strong> me atrevería a lastimar a la niña que me dio esta oportunidad.<br>
    <strong>Jamás</strong> te decepcionaré, lo prometo.<br><br><br>
    Te amo con toda mi alma.`,
    "<strong>27 de junio, 2025</strong><br>No hubo mucho que decir de este día, no hablamos casi, pero siempre te tuve en mente. Cuando escribo esto, tú estás en el concierto. Espero que te la hayas pasado increíble. Tengo sueño como desde las 6:00, pero voy a esperar a que salgas para que me cuentes aunque sea un poquito cómo te fue.<br><br> Te quiero mas que ayer.",
    "<strong>28 de junio, 2025</strong><br>En la madrugada, no paraba de ver los videos y fotos tuyas, wooooow, me enamore como no tienes una idea. <br>Hoy, igual hablamos relativamente poco PEEEEEROOOOO hoy senti demasiado tu amor, cada dia me gustas más. <br> No se si lees esto pero no te voy a decir nadota hasta que tu te des cuenta y voy a usar esto como diario (de mi parte) de nuestra relacion😂<br> Te amo muchisimo Yapagood, matooo por pedirte que seas mi novia pero creo que aun es pronto + quiero que sea algo INOLVIDABLE asi increible que tu digas wooow <br> Ya lo estoy planeando pero me preocupa mucho que te desesperes porque para hacer mi idea ocupo que se alineen los astros la verdad. <br> Te amo",
    "<strong>29 de junio, 2025</strong><br>Hoy senti las interacciones contigo un poquito raras la verdad peeroo no pasa nada, aunque me cortes un brazo te seguire amando igual. <br> Ya te quiero ver",
    "<strong>30 de junio, 2025</strong><br>Hoy, estuve mas de 8 horas haciendo una carta para ti. Nunca jamas en la vida habia hecho algo asi ni nada siquiera parecido. Es increible que me haya nacido, creo que ni yo se cuanto te amo. Tambien me da bastante miedo pero
    siempre he pensado que una vida con miedo no funciona, confio..",
    "<strong>1 de julio, 2025</strong><br>Hoy estuve demasiado nervioso, me daba un miedo increible que cualquier cosa saliera mal y aunque quizas al final me senti un poco presionado, todo el dia estuvo bastante bien. Me encanto pasar tiempo contigo, me encanto regalarte flores, me encanto todo, tu cariño y tu beso en el cachete 10 de 10.",
    "<strong>2 de julio, 2025</strong><br>Ahora sali con una amiga, incluyo esto porque me ayudo a planear la pedida, tambien me dio muuuchaaas ideas y estuvimos todo el dia hablando de eso y de ti JAJAJA y es chistoso porque me cae mal la gente asi.",
    "<strong>3 de julio, 2025</strong><br>Hablamos bastantito tanto por mensaje como por chat, todavia sigo planeando la pedida. Te lo juro que no te la vas a creer.",
    "<strong>4 de julio, 2025</strong><br>Hicimos videollamada dormidos 😍 no sabes lo mucho que me ENCANTOOO verte dormir, sueno un poquito psicopata jajajaja pero no sabes lo linda que te veias, ojala algun dia poder
    dormir juntos en una pijamada, es mi sueño. En el dia senti quizas un poco rarita pero supongo que x, lo escribo a las 4:30 entonces no se que pasara luego",
    "<strong>5 de julio, 2025</strong><br>Espérate, ok.",
    "<strong>6 de julio, 2025</strong><br>Espérate, ok.",
    "<strong>7 de julio, 2025</strong><br>Espérate, ok.",
    "<strong>8 de julio, 2025</strong><br>Espérate, ok.",
    "<strong>9 de julio, 2025</strong><br>Espérate, ok.",
    "<strong>10 de julio, 2025</strong><br>Espérate, ok.",
    "<strong>11 de julio, 2025</strong><br>Espérate, ok.",
    "<strong>12 de julio, 2025</strong><br>Espérate, ok.",
    "<strong>13 de julio, 2025</strong><br>Espérate, ok.",
    "<strong>14 de julio, 2025</strong><br>Espérate, ok.",
    "<strong>15 de julio, 2025</strong><br>Espérate, ok.",
    "<strong>16 de julio, 2025</strong><br>Espérate, ok."
];

let paginaActual = 0;
const divPagina = document.getElementById("pagina");
const btnAnterior = document.getElementById("anterior");
const btnSiguiente = document.getElementById("siguiente");
const libro = document.querySelector(".libro");

function mostrarPagina(animar = false) {
    if (animar) {
        libro.classList.add("pasar");
        setTimeout(() => {
            divPagina.innerHTML = paginas[paginaActual];
            libro.classList.remove("pasar");
        }, 300);
    } else {
        divPagina.innerHTML = paginas[paginaActual];
    }

    btnAnterior.disabled = paginaActual === 0;
    btnSiguiente.disabled = paginaActual === paginas.length - 1;
}

btnAnterior.addEventListener("click", () => {
    if (paginaActual > 0) {
        paginaActual--;
        mostrarPagina(true);
    }
});

btnSiguiente.addEventListener("click", () => {
    if (paginaActual < paginas.length - 1) {
        paginaActual++;
        mostrarPagina(true);
    }
});

mostrarPagina();


////// boton de cringe
const botonCringe = document.querySelector('.boton-cringe');

botonCringe.addEventListener('click', () => {
    document.body.classList.toggle('simple-mode');

    if (document.body.classList.contains('simple-mode')) {
        botonCringe.textContent = 'Modo amor';
    } else {
        botonCringe.textContent = '0 cringe';
    }
});
