<?php require_once('header.php'); ?>

<div class="BackgroundSystem">

    <div class="SoundBar">

        <a href="home-medico.php"><img src="assets/img/paciente/icon-home.svg" class="IHome"></a>
        <img src="assets/img/paciente/icon-receitas.svg" class="IConsulta">
        <div class="Decoration1"></div>
        <img src="assets/img/paciente/icon-exit.svg" class="IExit">


    </div>

    <div class="topo">
        <header>
            <div class="logo2">
                <img src="assets/img/logo-2.svg">
            </div>
            <h1 class="titulos1">Minhas Receitas</h1>
            <h1 class="titulos2">Escolha uma receita</h1>
            <p class="sub-titulo">Visualize suas receitas médicas e realiza o download</p>
        </header>

        <main>
            <section class="carroseul" style="padding-bottom: 188px;">
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

                    <div class="footer-box-receitas">
                        <article>
                            <button type="button" class="button-modal-receita" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Observações
                            </button>
                        </article>
                        <article class="box-date-time">
                            <p style="padding-right:20px;margin-bottom:0px;padding-bottom:0px">15:45</p>
                            <p style="margin-bottom:0px;padding-bottom:0px">20/02/2022</p>
                        </article>
                    </div>

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
                    <div class="footer-box-receitas">
                        <article>
                            <button type="button" class="button-modal-receita" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Observações
                            </button>
                        </article>
                        <article class="box-date-time">
                            <p style="padding-right:20px;margin-bottom:0px;padding-bottom:0px">15:45</p>
                            <p style="margin-bottom:0px;padding-bottom:0px">20/02/2022</p>
                        </article>
                    </div>

                </div>
            </section>

        </main>

    </div>
</div>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" style="max-width: 944px;">
        <div class="modal-content">
            <div class="modal-header" sty>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" style="padding: 65px 114px;">
                <h1 class="titulos1">Observação médica</h1>

                <p style="padding-top: 62px;">Foi realizado uma limpeza nos seus dentes 18, 28, 38 e 48 por conter cárie e também foi realizado a remoção dos sisos devido a angulação na qual se encontravam, podendo ocasionar sérios problemas futuros.
                </p>
                <p>Em anexo encaminhei a receita médica para se medicar corretamente.</p>

                <article style="padding-top: 270px;display:flex;flex-direction:column;justify-content:center">
                    <hr>
                    <p style="text-align: center;">Assinatura do médico</p>
                </article>
            </div>
            <div class="modal-footer">

                <img src="assets/img/paciente/icone-download.svg">

            </div>
        </div>
    </div>
</div>

<?php require_once('footer.php'); ?>