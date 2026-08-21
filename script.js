/* =====================================================
   WEB DE CAMPAÑA + TRANSPARENCIA
   3º ESO

   EDITA ESTA PARTE PARA CAMBIAR
   EL CONTENIDO DE LA WEB.
===================================================== */


/* =====================================================
   PROGRAMA ELECTORAL
===================================================== */

const PROGRAM = [

    {
        id: "001",

        title:
            "Mejorar la comunicación",

        text:
            "Crear un sistema claro para avisos, fechas importantes y acuerdos.",

        category:
            "Comunicación"
    },


    {
        id: "002",

        title:
            "Recoger propuestas",

        text:
            "Dar un canal para que toda la clase pueda presentar ideas y problemas.",

        category:
            "Participación"
    },


    {
        id: "003",

        title:
            "Impulsar actividades",

        text:
            "Proponer actividades, torneos y planes que mejoren la convivencia.",

        category:
            "Convivencia"
    },


    {
        id: "004",

        title:
            "Representar a la clase",

        text:
            "Llevar las propuestas a tutoría y comunicar después las respuestas.",

        category:
            "Representación"
    },


    {
        id: "005",

        title:
            "Portal de transparencia",

        text:
            "Mantener esta web actualizada durante todo el mandato.",

        category:
            "Transparencia"
    },


    {
        id: "006",

        title:
            "Escuchar antes de decidir",

        text:
            "Consultar a la clase cuando una cuestión afecte al conjunto del grupo.",

        category:
            "Participación"
    }

];



/* =====================================================
   PROMESAS

   STATUS:

   cumplida
   proceso
   no
   fuera
===================================================== */


const PROMISES = [

    {

        id: "001",

        title:
            "Crear un sistema de avisos",

        status:
            "cumplida",

        date:
            "15/09/2026",

        update:
            "22/09/2026",

        detail:
            "Se creó el sistema de avisos y se explicó su funcionamiento."

    },


    {

        id: "002",

        title:
            "Recoger propuestas periódicamente",

        status:
            "proceso",

        date:
            "15/09/2026",

        update:
            "28/09/2026",

        detail:
            "Ya se han recibido las primeras propuestas. El sistema continuará activo."

    },


    {

        id: "003",

        title:
            "Organizar una actividad",

        status:
            "proceso",

        date:
            "20/09/2026",

        update:
            "01/10/2026",

        detail:
            "La propuesta ha sido trasladada al tutor y está pendiente de concretar."

    },


    {

        id: "004",

        title:
            "Cambiar el horario del centro",

        status:
            "fuera",

        date:
            "20/09/2026",

        update:
            "20/09/2026",

        detail:
            "Esta decisión no corresponde al delegado. Puede trasladarse como petición, pero no garantizarse."

    },


    {

        id: "005",

        title:
            "Conseguir una excursión concreta",

        status:
            "no",

        date:
            "25/09/2026",

        update:
            "10/10/2026",

        detail:
            "La propuesta no pudo realizarse por falta de disponibilidad."

    }

];



/* =====================================================
   DIARIO
===================================================== */


const DIARY = [

    {

        date:
            "15/09/2026",

        title:
            "Inicio del mandato",

        text:
            "Presentación de la candidatura, programa y portal de transparencia."

    },


    {

        date:
            "22/09/2026",

        title:
            "Primera actualización",

        text:
            "Se actualiza el compromiso #001 y se registran nuevas propuestas."

    },


    {

        date:
            "28/09/2026",

        title:
            "Seguimiento con tutoría",

        text:
            "Se trasladan las propuestas recibidas y se registra la respuesta."

    }

];



/* =====================================================
   FUNCIONES
===================================================== */


function statusLabel(status) {

    const labels = {

        cumplida:
            "🟢 CUMPLIDA",

        proceso:
            "🟡 EN PROCESO",

        no:
            "🔴 NO CUMPLIDA",

        fuera:
            "⚪ FUERA DE COMPETENCIAS"

    };

    return labels[status];

}



/* =====================================================
   PROGRAMA
===================================================== */


function renderProgram() {

    const container =
        document.getElementById(
            "programGrid"
        );


    container.innerHTML =
        PROGRAM.map(item => `

            <article class="program-card">

                <div>

                    <span class="program-number">
                        #${item.id}
                    </span>

                </div>

                <small>
                    ${item.category}
                </small>

                <h3>
                    ${item.title}
                </h3>

                <p class="muted">
                    ${item.text}
                </p>

            </article>

        `).join("");

}



/* =====================================================
   TRANSPARENCIA
===================================================== */


function renderPromises(filter = "all") {

    const container =
        document.getElementById(
            "promiseGrid"
        );


    let promises =
        PROMISES;


    if (filter !== "all") {

        promises =
            PROMISES.filter(
                promise =>
                    promise.status === filter
            );

    }


    container.innerHTML =
        promises.map(promise => `

            <article class="promise">

                <div class="promise-top">

                    <strong>
                        #${promise.id}
                        ·
                        ${promise.title}
                    </strong>

                    <span
                        class="status ${promise.status}"
                    >
                        ${statusLabel(
                            promise.status
                        )}
                    </span>

                </div>


                <p>
                    ${promise.detail}
                </p>


                <div class="promise-meta">

                    Prometida:
                    ${promise.date}

                    ·

                    Última actualización:
                    ${promise.update}

                </div>

            </article>

        `).join("");

}



/* =====================================================
   ESTADÍSTICAS
===================================================== */


function renderStats() {

    const total =
        PROMISES.length;


    const completed =
        PROMISES.filter(
            p => p.status === "cumplida"
        ).length;


    const process =
        PROMISES.filter(
            p => p.status === "proceso"
        ).length;


    const failed =
        PROMISES.filter(
            p => p.status === "no"
        ).length;


    const outside =
        PROMISES.filter(
            p => p.status === "fuera"
        ).length;


    const percentage =
        total === 0
            ? 0
            : Math.round(
                completed /
                total *
                100
            );


    document.getElementById(
        "heroCompleted"
    ).textContent =
        completed;


    document.getElementById(
        "heroProcess"
    ).textContent =
        process;


    document.getElementById(
        "heroTotal"
    ).textContent =
        total;


    document.getElementById(
        "countCompleted"
    ).textContent =
        completed;


    document.getElementById(
        "countProcess"
    ).textContent =
        process;


    document.getElementById(
        "countFailed"
    ).textContent =
        failed;


    document.getElementById(
        "countOutside"
    ).textContent =
        outside;


    document.getElementById(
        "complianceNumber"
    ).textContent =
        percentage + "%";


    document.getElementById(
        "complianceBadge"
    ).textContent =
        percentage + "% cumplido";


    document
        .getElementById("progressCircle")
        .style
        .setProperty(
            "--angle",
            percentage * 3.6 + "deg"
        );

}



/* =====================================================
   DIARIO
===================================================== */


function renderDiary() {

    const container =
        document.getElementById(
            "diary"
        );


    container.innerHTML =
        DIARY.map(event => `

            <article class="event">

                <span class="event-dot"></span>

                <div class="event-date">
                    ${event.date}
                </div>

                <h3>
                    ${event.title}
                </h3>

                <p class="muted">
                    ${event.text}
                </p>

            </article>

        `).join("");

}



/* =====================================================
   PROPUESTAS
===================================================== */


let proposals =
    JSON.parse(
        localStorage.getItem(
            "classProposals"
        ) || "[]"
    );



function escapeHTML(text) {

    return String(text)
        .replace(
            /[&<>"']/g,
            character => ({

                "&":
                    "&amp;",

                "<":
                    "&lt;",

                ">":
                    "&gt;",

                '"':
                    "&quot;",

                "'":
                    "&#039;"

            })[character]
        );

}



function renderProposals() {

    const container =
        document.getElementById(
            "proposalList"
        );


    if (
        proposals.length === 0
    ) {

        container.innerHTML = `

            <div class="proposal">

                <strong>
                    Aún no hay propuestas.
                </strong>

                <p class="muted">
                    Las propuestas añadidas
                    aparecerán aquí.
                </p>

            </div>

        `;

        return;

    }


    container.innerHTML =
        proposals
            .slice()
            .reverse()
            .map(proposal => `

                <article class="proposal">

                    <strong>
                        ${escapeHTML(
                            proposal.title
                        )}
                    </strong>

                    <p>
                        ${escapeHTML(
                            proposal.description
                        )}
                    </p>

                    <small>
                        ${proposal.date}
                    </small>

                    <br>

                    <span class="proposal-status">
                        RECIBIDA · PENDIENTE
                    </span>

                </article>

            `)
            .join("");

}



/* =====================================================
   INICIO
===================================================== */


document.addEventListener(
    "DOMContentLoaded",
    () => {


        renderProgram();

        renderPromises();

        renderStats();

        renderDiary();

        renderProposals();



        /* FILTROS */

        document
            .querySelectorAll(".filter")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        document
                            .querySelectorAll(
                                ".filter"
                            )
                            .forEach(
                                b =>
                                    b.classList.remove(
                                        "active"
                                    )
                            );


                        button.classList.add(
                            "active"
                        );


                        renderPromises(
                            button.dataset.filter
                        );

                    }
                );

            });



        /* FORMULARIO */

        document
            .getElementById(
                "proposalForm"
            )
            .addEventListener(
                "submit",
                event => {

                    event.preventDefault();


                    const title =
                        document
                            .getElementById(
                                "proposalTitle"
                            )
                            .value;


                    const description =
                        document
                            .getElementById(
                                "proposalDesc"
                            )
                            .value;


                    proposals.push({

                        title,

                        description,

                        date:
                            new Date()
                                .toLocaleDateString(
                                    "es-ES"
                                )

                    });


                    localStorage.setItem(
                        "classProposals",
                        JSON.stringify(
                            proposals
                        )
                    );


                    event.target.reset();


                    renderProposals();

                }
            );



        /* MENÚ MÓVIL */

        const menuButton =
            document.getElementById(
                "menuButton"
            );


        const nav =
            document.getElementById(
                "navLinks"
            );


        menuButton.addEventListener(
            "click",
            () => {

                nav.classList.toggle(
                    "open"
                );

            }
        );


        nav
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        nav.classList.remove(
                            "open"
                        );

                    }
                );

            });

    }
);