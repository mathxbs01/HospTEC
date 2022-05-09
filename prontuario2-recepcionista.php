<?php require_once('header.php'); ?>
<div class="BackgroundSystem">
    <div class="SoundBar">
        <a href="home-recepcionista.php"><img src="assets/img/paciente/icon-home.svg" class="IHome"></a>
        <a href="consultas-recepcionista.php"> <img src="assets/img/recepcionista/icon-agd2.svg" style="top: 18px;" class="IAgd"></a>
        <img src="assets/img/recepcionista/icon-prontuario2.svg" class="IPront-2" style="top: -220px">
        <div class=" Decoration1">
        </div>
        <img src="assets/img/paciente/icon-exit.svg" class="IExit">
    </div>

    <div class="topo">
        <header style=" grid-template-rows: 177px 46px;">
            <div class="logo2">
                <img src="assets/img/logo-2.svg">
            </div>
            <h1 class="titulos1">Prontuários</h1>
        </header>
        <main>
            <form action="" class="meu-perfil">
                <section style="">
                    <div id="box-inputs-forms" style="display: flex; justify-content: flex-end;padding-bottom:30px">
                        <a href="prontuario-recepcionista.php" style="font-weight: 400;font-size: 18px;line-height: 27px;text-decoration-line: underline !important;cursor:pointer">Voltar</a>
                    </div>

                </section>
                <section style="display: flex; justify-content: center;">
                    <div id="box-inputs-forms" style="padding-right: 40px;">
                        <label class="form-perfil">Selecione o prontuário</label>
                        <select id="select-prontuario" name="select-prontuario" class="inputs-perfil" data-size="2">
                            <option value="0"></option>
                            <option value="1">xxxxx</option>
                            <option value="2">xxxxx</option>
                            <option value="3">xxxxxxx</option>
                        </select>
                    </div>

                    <div id="box-inputs-forms">
                        <a href=""><button type="submit" id="btn-buscar-pront">Buscar<img style="padding-left:25px" src="assets/img/recepcionista/icon-pesquisar.svg"></button></a>

                    </div>

                </section>

                <section style="display: flex; justify-content: center;padding-top:36px">
                    <div id="box-inputs-forms" style="padding-right: 40px;">
                        <label class="form-perfil">Nome do paciente</label>
                        <input class="inputs-perfil" type="text" disabled="" placeholder="Matheus Santos">
                    </div>

                    <div id="box-inputs-forms">
                        <label class="form-perfil">Data de nascimento</label>
                        <input class="inputs-perfil" type="text" disabled="" placeholder="20/11/2001">
                    </div>

                </section>

                <section style="display: flex; justify-content: center;padding-top:36px">
                    <div id="box-inputs-forms" style="padding-right: 40px;">
                        <label class="form-perfil">Data de abertura</label>
                        <input class="inputs-perfil" type="text" disabled="" placeholder="01/05/2022">
                    </div>

                    <div id="box-inputs-forms">
                        <label class=" form-perfil">Gênero que se identifica</label>
                        <input class="inputs-perfil" type="text" disabled="" placeholder="Masculino">
                    </div>

                </section>

                <section style="display: flex; justify-content: center;padding-top:36px">
                    <div id="box-inputs-forms" style="padding-right: 40px;">
                        <label class="form-perfil">CNS</label>
                        <input class="inputs-perfil" type="text" disabled="" placeholder="1111111-123">
                    </div>

                    <div id="box-inputs-forms">
                        <label class=" form-perfil">Telefone</label>
                        <input class="inputs-perfil" type="tel" disabled="" placeholder="(11) 95887-3965">
                    </div>

                </section>

                <section style="display: flex; justify-content: center;padding-top:36px">
                    <div id="box-inputs-forms" style="padding-right: 40px;">
                        <label class="form-perfil">E-mail</label>
                        <input class="inputs-perfil" type="email" placeholder="matheussantos@hotmail.com" disabled="">
                    </div>

                    <div id="box-inputs-forms">
                        <label class="form-perfil">Médico responsável</label>
                        <input class="inputs-perfil" type="text" placeholder="Antônio Almeida Santos" disabled="">
                    </div>

                </section>

                <section style="display: flex; justify-content: left;padding-top:36px;">
                    <div id="box-inputs-forms" style="padding-right: 40px;width:50%">
                        <label class="form-perfil">CRM</label>
                        <input class="inputs-perfil" type="text" disabled="" placeholder="123456879-6">
                    </div>

                </section>

                <section style="margin-top:30px">
                    <p class="txt-forms-bold">Qual o motivo da sua procura médica?</p>
                    <textarea type="text" name="observacao-medica" class="input-motivo-consulta" disabled>
                    Foi realizado uma limpeza nos seus dentes 18, 28, 38 e 48 por conter cárie e também foi realizado a remoção dos sisos devido a angulação na qual se encontravam, podendo ocasionar sérios problemas futuros.
                    Em anexo encaminhei a receita médica para se medicar corretamente.
                </textarea>
                </section>

                <section style="padding-top:110px;padding-bottom:160px">
                    <article style="display:flex;flex-direction:column;justify-content:center">
                        <hr>
                        <p style="text-align: center;">Assinatura do médico</p>
                    </article>
                </section>
            </form>

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