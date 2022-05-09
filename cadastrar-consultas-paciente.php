<?php require_once('header.php'); ?>
<div class="BackgroundSystem">

    <div class="SoundBar">

        <a href="home-paciente.php"> <img src="assets/img/paciente/icon-home.svg" class="IHome">
            <a href="consultas-paciente.php"> <img src="assets/img/paciente/icon-consultas2.svg" class="IConsulta2"></a>
            <div class="Decoration1"></div>
            <img src="assets/img/paciente/icon-exit.svg" class="IExit">


    </div>

    <div class="topo">
        <header>
            <div class="logo2">
                <img src="assets/img/logo-2.svg">
            </div>
            <h1 class="titulos1">Cadastrar consultas</h1>
            <p class="sub-titulo" style="grid-row:2/3">Cadastre uma nova consulta</p>
        </header>

        <main>
            <form action="" class="cad-consultas-paciente">
                <section style="display: flex;">
                    <div class="select-especialista" style="padding-right:82.5px ;">
                        <p class="txt-forms-bold">Qual tipo de especialista você está procurando?</p>
                        <select name="select" class="select-cad">
                            <option value="1" selected></option>
                            <option value="2">Dentista</option>
                            <option value="3">Dermatologista</option>
                            <option value="4">Oftamologista</option>
                        </select>
                    </div>

                    <div class="select-especialista" style="padding-left:82.5px ;">
                        <p class="txt-forms-bold">Qual médico gostaria de ser atendido?</p>
                        <select name="select" class="select-cad">
                            <option value="1" selected></option>
                            <option value="2"></option>
                            <option value="3"></option>
                        </select>
                    </div>

                </section>

                <section style="margin-top:30px">
                    <p class="txt-forms-bold">Qual o motivo da sua procura médica?</p>
                    <textarea type="text" name="motivo-consulta" class="input-motivo-consulta"></textarea>
                </section>

                <section style="display: flex;margin-top:35px">
                    <div class="select-especialista" style="padding-right:82.5px ;">
                        <p class="txt-forms-bold">Escolha a data da consulta</p>
                        <input type="date" class="select-cad" style="padding: 25px;">
                    </div>

                    <div class="select-especialista" style="padding-left:82.5px ;">
                        <p class="txt-forms-bold">Qual médico gostaria de ser atendido?</p>
                        <input type="time" class="select-cad" style="padding: 25px;" min="09:00" max="18:00">
                    </div>

                </section>
                </section>
            </form>
        </main>

        <section class="rodape">
            <a href=""><button id="btn-agendar-consulta">Agendar nova consulta</button></a>
        </section>
    </div>
</div>


<?php require_once('footer.php'); ?>