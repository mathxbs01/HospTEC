<?php require_once('header.php'); ?>
<div class="BackgroundSystem">

    <div class="SoundBar">

        <a href="home-paciente.php"><img src="assets/img/paciente/icon-home.svg" class="IHome"></a>
        <img src="assets/img/paciente/icon-consultas.svg" class="IConsulta">
        <div class="Decoration1"></div>
        <img src="assets/img/paciente/icon-exit.svg" class="IExit">


    </div>

    <div class="topo">
        <header>
            <div class="logo2">
                <img src="assets/img/logo-2.svg">
            </div>
            <h1 class="titulos1">Minhas Consultas</h1>
            <h1 class="titulos2">Escolha uma consulta</h1>
            <p class="sub-titulo">Cadastre uma nova consulta</p>
        </header>

        <main>
            <section class="carroseul">
                <div class="consulta1">

                    <article style="display: flex;justify-content:flex-end">
                        <div class="tag-consultas">
                            <p style="margin-bottom: 0px;"> dentista </p>
                        </div>
                    </article>

                    <article class="txt-consultas">
                        <p> Dr. Jairo</p><br>
                        <p>Motivo: Clareamento do dente e remoção dos dentes</p><br>
                        <p>Endereço: Av. Kennedy, 693 - Tupy, Praia Grande SP </p><br>
                    </article>

                    <article class="box-date-time">
                        <p style="padding-right:20px;">15:45</p>
                        <p>20/02/2022</p>
                    </article>
                </div>
                <div class="consulta2">

                    <article style="display: flex;justify-content:flex-end">
                        <div class="tag-consultas">
                            <p style="margin-bottom: 0px;"> dentista </p>
                        </div>
                    </article>

                    <article class="txt-consultas">
                        <p> Dr. Jairo</p><br>
                        <p>Motivo: Clareamento do dente e remoção dos dentes</p><br>
                        <p>Endereço: Av. Kennedy, 693 - Tupy, Praia Grande SP </p><br>
                    </article>

                    <article class="box-date-time">
                        <p style="padding-right:20px;">15:45</p>
                        <p>20/02/2022</p>
                    </article>

                </div>
            </section>
            <section class="rodape">
                <a href="cadastrar-consultas-paciente.php"><button id="btn-agendar-consulta">Agendar nova consulta</button></a>
            </section>
        </main>

    </div>
</div>


<?php require_once('footer.php'); ?>