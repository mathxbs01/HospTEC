<?php require_once('header.php'); ?>
<div class="BackgroundSystem">

    <div class="SoundBar">

        <a href="home-recepcionista.php"><img src="assets/img/paciente/icon-home.svg" class="IHome"></a>
        <img src="assets/img/recepcionista/icon-agd.svg" class="IConsulta">
        <a href="prontuario-recepcionista.php"> <img src="assets/img/recepcionista/icon-prontuario.svg" class="IMenu2"></a>
        <div class="Decoration1"></div>
        <img src="assets/img/paciente/icon-exit.svg" class="IExit">
    </div>

    <div class="topo">
        <header style="grid-template-rows:none">
            <div class="logo2">
                <img src="assets/img/logo-2.svg">
            </div>
            <h1 class="titulos1">Agendamentos</h1>
        </header>

        <main>
            <form action="" class="cad-consultas-recepcionista">
                <section style="display: flex">
                    <div id="box-inputs-forms" style="padding-right: 40px;">
                        <label class="form-perfil">Nome do paciente</label>
                        <input class="inputs-perfil" type="text" placeholder="Exemplo">
                    </div>

                    <div id="box-inputs-forms">
                        <label class="form-perfil">Data da consulta</label>
                        <input type="date" class="inputs-perfil">
                    </div>


                    <div id="box-inputs-forms" style="margin-left: 55px;">
                        <a href=""><button type="submit" id="btn-buscar-consultas">Buscar<img style="padding-left:25px" src="assets/img/recepcionista/icon-pesquisar.svg"></button></a>

                    </div>
                </section>
            </form>
            <div>
                <p class="txt-consultas-recep">Cadastre e verifique as consultas para hoje</p>
            </div>
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
                <a href="cadastrar-consultas-recepcionista.php"><button id="btn-agendar-consulta">Agendar nova consulta</button></a>
            </section>
        </main>

    </div>
</div>


<?php require_once('footer.php'); ?>