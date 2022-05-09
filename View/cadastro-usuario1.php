<?php require_once('header.php'); ?>

<title>Cadastro</title>

<main class="container-cad-paciente">

    <img src="assets/img/logo.svg" id="logo-login" style="padding-left: 9%;padding-right:9%">
    <p id="txt-login" style="text-align: left;margin-top:20px;margin-bottom:30px;padding-left: 9%;padding-right:9%">Por favor, insira seu dados válidos para realizar o cadastro!</p>

    <div class="cad-paciente-passo">
        <p id="txt-login" style="margin-bottom: 0px;">Passos</p>
        <div class="bolinha"></div>
        <div class="bolinha" style="background-color: white;"></div>
    </div>

    <form action="" class="form-cad-paciente">

        <section style=" display: flex; justify-content: center;">

            <div id="box-inputs-forms" style="padding-right: 40px;">
                <label class="form-perfil">Digite seu nome</label>
                <input class="inputs-perfil" type="text" placeholder="Exemplo">
            </div>

            <div id="box-inputs-forms">
                <label class="form-perfil">Digite seu sobrenome</label>
                <input class="inputs-perfil" type="text" placeholder="Exemplo">
            </div>

        </section>

        <section style="display: flex; justify-content: center;padding-top:36px">

            <div id="box-inputs-forms" style="padding-right: 40px;">
                <label class="form-perfil">Digite seu e-mail</label>
                <input class="inputs-perfil" type="email" placeholder="exemplo@email.com">
            </div>

            <div id="box-inputs-forms">
                <label class="form-perfil">Digite seu número</label>
                <input class="inputs-perfil" type="tel" placeholder="(XX) XXXXX - XXXX" onkeypress="$(this).mask('(00) 00000-0000');">
            </div>
        </section>

        <section style="display: flex;flex-direction:column;padding-top:36px;justify-content: center">
            <label class="form-perfil">Qual tipo de usuário você pretende ser?</label>
        </section>

        <section style="display: flex; justify-content: start;margin-top:6px;align-items: center;">
            <input type="radio" id="checkbox-cad" name="check-email">
            <p style="margin-bottom: 0px;padding-right: 35px">Médico(a)</p>

            <input type="radio" id="checkbox-cad" name="check-email">
            <p style="margin-bottom: 0px;padding-right: 35px">Enfermeiro(a)</p>

            <input type="radio" id="checkbox-cad" name="check-email">
            <p style="margin-bottom: 0px;padding-right: 35px">Recepcionistas</p>

            <input type="radio" id="checkbox-cad" name="check-email">
            <p style="margin-bottom: 0px;">Paciente</p>
        </section>

        <section style="display: flex; justify-content: center;padding-top:36px">
            <div id="box-inputs-forms" style="padding-right: 40px;">
                <label class="form-perfil">Digite seu CPF</label>
                <input class="inputs-perfil" type="text" placeholder="XXX.XXX.XXX-XX" onkeypress="$(this).mask('000.000.000-00');">
            </div>

            <div id="box-inputs-forms">
                <label class=" form-perfil">Digite CNS</label>
                <!--Aqui terá um if que tera como parametro a seleção do checkbox -->
                <input class="inputs-perfil" type="text" placeholder="XXXXXXXXXXXXXXX" onkeypress="$(this).mask('000000000000000');">
            </div>

        </section>

        <section style="display: flex; justify-content: center;padding-top:36px">
            <div id="box-inputs-forms" style="padding-right: 40px;">
                <label class="form-perfil">Digite nome completo da sua mãe</label>
                <input class="inputs-perfil" type="text" placeholder="Exemplo">
            </div>

            <div id="box-inputs-forms">
                <label class=" form-perfil">Digite nome completo do sua pai</label>
                <input class="inputs-perfil" type="text" placeholder="Exemplo">
            </div>

        </section>

        <section style="display: flex; justify-content: center;padding-top:36px;padding-bottom:39px">
            <div id="box-inputs-forms" style="padding-right: 40px;">
                <label class="form-perfil">Digite sua senha</label>
                <input class="inputs-perfil" type="password" placeholder="***********">
            </div>

            <div id="box-inputs-forms">
                <label class=" form-perfil">Digite sua senha novamente</label>
                <input class="inputs-perfil" type="password" placeholder="***********">
            </div>

        </section>



        <section class="rodape">
            <a href=""><button type="submit" style="margin:0;margin-bottom:80px;margin-right:0px" id="btn-agendar-consulta">Avançar</button></a>
        </section>
    </form>

</main>

<?php require_once('footer.php'); ?>