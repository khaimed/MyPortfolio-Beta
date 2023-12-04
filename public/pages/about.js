let about = document.querySelector("#contact > div.header.text-end > div")

about.addEventListener("click", function() {
    var textabout = document.querySelector("#about .bg-tenor div")
// Set the HTML content for the div
    textabout.innerHTML = `
        <section class="about">
        <div class="container">
            <div class="row">
            <div class="section-title padd-15">
                <h2>À PROPOS</h2>
            </div>
            </div>
            <div class="row">
            <div class="about-content padd-15">
                <div class="row">
                <div class="about-text padd-15">
                    <h3>Je m'appelle Khalid Ait M'hamed et je suis un <span>Développeur Web</span> !</h3>
                    <p>
                    <label>
                        <script>
                        sayHi();
                        </script>
                    </label>
                    Personne motivé et distilleuse de joie je suis. Du haut de mon cumule de deux années d'expériences antérieurs, notez que j'ai énormément appris en technique mais également sur la collaboration avec divers personnes. <br>
                    J'ai surtout hâte de cette expérience nouvelle car bien qu'ayant des compétences à mettre en exergue dans votre entreprise, j'apprendrai forcément une chose nouvelle.
                    </p>
                </div>
                </div>
                <div class="row">
                <div class="personal-info padd-15">
                    <div class="row">
                    <div class="info-item padd-15">
                        <p>Anniversaire : <span>2 Oct 1993</span></p>
                    </div>
                    <div class="info-item padd-15">
                        <p>âge : 
                        <span>
                            <script>
                            document.write(calculateAge(new Date(1993, 10, 2))); 
                            </script>
                        </span>
                        </p>
                    </div>
                    <div class="info-item padd-15">
                        <p>Website : <span><a href="https://khaimed.netlify.app/">khaimed.netlify.app</a> </span></p>
                    </div>
                    <div class="info-item padd-15">
                        <p>Email : <span><a href="mailto:khalid.aitmhamed@hotmail.com">khalid.aitmhamed@hotmail.com</a></span></p>
                    </div>
                    <div class="info-item padd-15">
                        <p>Dômaine : <span>Développeur Web</span></p>
                    </div>
                    <div class="info-item padd-15">
                        <p>Telephone : <span><a href="tel:+212600611268">+212 600-611268</a></span></p>
                    </div>
                    <div class="info-item padd-15">
                        <p>Local : <span>Casablanca - Maroc</span></p>
                    </div>
                    <div class="info-item padd-15">
                        <p>Freelance : <span>Disponible</span></p>
                    </div>
                    </div>
                    <div class="row">
                    <div class="buttons padd-15">
                        <a href="Curriculum Vitae/CV.pdf" class="btn">Télécharger CV</a>
                        <a href="#contact" data-section-index="1" class="btn hire-me">Engagez moi</a>
                    </div>
                    </div>
                </div>
                <div class="skills padd-15">
                    <div class="row">
                    <div class="skill-item padd-15">
                        <h5>JavaScript</h5>
                        <div class="progress">
                        <div class="progress-in" style="width: 56%;"></div>
                        <div class="skill-percent">56%</div>
                        </div>
                    </div>
                    <div class="skill-item padd-15">
                        <h5>CMS</h5>
                        <div class="progress">
                        <div class="progress-in" style="width: 68%;"></div>
                        <div class="skill-percent">68%</div>
                        </div>
                    </div>
                    <div class="skill-item padd-15">
                        <h5>Java</h5>
                        <div class="progress">
                        <div class="progress-in" style="width: 46%;"></div>
                        <div class="skill-percent">46%</div>
                        </div>
                    </div>
                    <div class="skill-item padd-15">
                        <h5>C#</h5>
                        <div class="progress">
                        <div class="progress-in" style="width: 60%;"></div>
                        <div class="skill-percent">60%</div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            <div class="row">
            <div class="experience padd-15">
                <h3 class="title">EXPÉRIENCE PROFESSIONNELLE</h3>
                <div class="row">
                <div class="timeline-box padd-15">
                    <div class="timeline shadow-dark">
                    <!-- Timeline Item -->
                    <div class="timeline-item">
                        <div class="circle-dot"></div>
                        <h6 class="timeline-date"><i class="fa fa-calendar"></i>2021 — 2023</h6>
                        <h4 class="timeline-title">INWI | Entreprise de télécommunications</h4>
                        <h6 class="timeline-subtitle">NOC Supervision | Casablanca, Maroc</h6>
                        <p class="timeline-text"><span>•	</span>En tant que superviseur NOC, j'ai joué un rôle essentiel dans la vérification et le traitement des incidents, que ce soit par téléphone ou via une plateforme dédiée. J'ai optimisé les opérations en créant des extensions Google Chrome utilisant JavaScript, ainsi que des frameworks tels que SweetAlert2, Bootstrap et jQuery. J'ai exploité le DOM pour créer des boutons et des balises, améliorant ainsi l'efficacité du travail.</p>
                        <p class="timeline-text"><span>•	</span>Au cours de mon poste de superviseur NOC, j'ai réalisé avec succès deux projets majeurs : "Gestion de l'astreinte" et "NOC Library". Dans le cadre du projet de "Gestion de l'astreinte", j'ai développé une solution permettant de planifier et de gérer les rotations du personnel travaillant la nuit chaque lundi, en collaboration avec le responsable de la région (maintenance) et les équipes de support. Ce projet impliquait la gestion de différents comptes avec des objectifs distincts tels qu'admin, supervision, maintenance et support. J'ai utilisé des langages tels que JavaScript, Go et Google Sheets pour le développement, ainsi que la création d'un modèle conceptuel de données (MCD) et d'un modèle logique de données (MLD) pour la création de la base de données. Actuellement, je m'attèle à refaire le projet en utilisant les technologies React, Bootstrap, DataTables, SweetAlert2 et MySQL pour améliorer davantage ses fonctionnalités.</p>
                        <p class="timeline-text"><span>•	</span>Le projet "NOC Library" a été conçu pour faciliter la gestion des documents. J'ai utilisé React Bootstrap et MySQL pour développer une plateforme permettant une gestion efficace et conviviale des documents au sein du département NOC.</p>
                    </div>
                    <!-- Timeline Item End -->
                    </div>
                </div>
                </div>
            </div>
            <div class="education padd-15">
                <h3 class="title">FORMATION</h3>
                <div class="row">
                <div class="timeline-box padd-15">
                    <div class="timeline shadow-dark">
                    <!-- Timeline Item -->
                    <div class="timeline-item">
                        <div class="circle-dot"></div>
                        <h6 class="timeline-date"><i class="fa fa-calendar"></i> 2022 — 2023</h6>
                        <h4 class="timeline-title">Licence Professionnelle en Développement JAVA/J2EE</h4>
                        <h6 class="timeline-subtitle">Centre CIGMA - FST SETTAT</h6>
                        <p class="timeline-text"><span>•	</span>Programme de formation spécialisé dans le développement d'applications JAVA/J2EE avec une emphase sur les technologies modernes telles que Spring Boot, Spring, JavaScript et le développement web.</p>
                        <p class="timeline-text"><span>•	</span>Réalisation de projets concrets utilisant des frameworks populaires tels que Spring Boot, permettant de développer des applications Java hautement performantes et évolutives.</p>
                        <p class="timeline-text"><span>•	</span>Expérience pratique dans la conception et le développement d'applications web, en utilisant JavaScript pour améliorer l'interactivité et l'expérience utilisateur.</p>
                    </div>
                    <!-- Timeline Item End -->
                    <!-- Timeline Item -->
                    <div class="timeline-item">
                        <div class="circle-dot"></div>
                        <h6 class="timeline-date"><i class="fa fa-calendar"></i> 2017 — 2019</h6>
                        <h4 class="timeline-title">Diplôme de Technicien Spécialisé en Développement Informatique</h4>
                        <h6 class="timeline-subtitle">ISTA Lalla Aicha</h6>
                        <p class="timeline-text"><span>•	</span>Formation approfondie en développement informatique, avec une expertise dans la création d'applications web, mobiles et de bureau.</p>
                        <p class="timeline-text"><span>•	</span>Réalisation de nombreux projets variés, dont un projet de paroles de musique (music lyrics), démontrant ma maîtrise de langages tels que JavaScript et l'utilisation de JSON pour l'importation et la manipulation de données de paroles.</p>
                        <p class="timeline-text"><span>•	</span>Expérience acquise lors d'un stage après l'obtention du diplôme, se concentrant sur la gestion des conteneurs, avec l'utilisation des langages C# et SQL Server pour le développement et la gestion de bases de données.</p>
                        <p class="timeline-text"><span>•	</span>Compétences solides en conception logicielle, en développement front-end et back-end, ainsi qu'en intégration de bases de données pour des applications robustes et performantes.</p>
                        <p class="timeline-text"><span>•	</span>Capacité à travailler en équipe, à résoudre des problèmes complexes et à s'adapter aux nouvelles technologies et tendances du secteur du développement informatique.</p>
                    </div>
                    <!-- Timeline Item End -->
                    <!-- Timeline Item -->
                    <div class="timeline-item">
                        <div class="circle-dot"></div>
                        <h6 class="timeline-date"><i class="fa fa-calendar"></i> 05 - 2019</h6>
                        <h4 class="timeline-title">Baccalauréat Scientifique</h4>
                        <p class="timeline-text">Comme dans toutes les expériences il y a des parties très complexe s’affectionne particulièrement ce projet qui m’a énormément pris la tête avec son lot interminable de problèmes que j’ai pu après maintes efforts résolve les uns  après les autres. Notez que ces difficultés ont été formatives pour moi dans la mesure où j’ai appris à les solutionnés . vous avez ainsi : donc quelques un de ces dits problèmes .que sont : la base de donnée ; le setup et la liaison entre les classes.</p>
                    </div>
                    <!-- Timeline Item End -->
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
        `;
  });