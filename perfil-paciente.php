<?php require_once('header.php'); ?>

<div class="BackgroundSystem">

    <div class="SoundBar">

        <a href="home-paciente.php"><img src="assets/img/paciente/icon-home.svg" class="IHome"></a>
        <img src="assets/img/paciente/icon-perfil.svg" class="IPerfil">
        <div class="Decoration1" style="top:165%"></div>
        <img src="assets/img/paciente/icon-exit.svg" style="top:75%" class="IExit">


    </div>

    <div class="topo">
        <header>
            <div class="logo2">
                <img src="assets/img/logo-2.svg">
            </div>
            <h1 class="titulos1">Meu perfil</h1>
            <p class="sub-titulo">Realize a edição do seus dados pessoais</p>
        </header>

        <main>
            <form action="" class="meu-perfil">
                <section style="display: flex; justify-content: center;">
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

                <section style="display: flex; justify-content: center;padding-top:36px">
                    <div id="box-inputs-forms" style="padding-right: 40px;">
                        <label class="form-perfil">Digite seu CPF</label>
                        <input class="inputs-perfil" type="text" placeholder="XXX.XXX.XXX-XX" onkeypress="$(this).mask('000.000.000-00');">
                    </div>

                    <div id="box-inputs-forms">
                        <label class=" form-perfil">Digite CNS</label>
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

                <section style="display: flex; justify-content: center;padding-top:36px">
                    <div id="box-inputs-forms" style="padding-right: 40px;">
                        <label class="form-perfil">Digite seu CEP</label>
                        <input class="inputs-perfil" type="text" placeholder="XXXXX-XXX" onkeypress="$(this).mask('00000-000');">
                    </div>

                    <div id="box-inputs-forms">
                        <label class=" form-perfil">Estado</label>
                        <select id="estado" name="estado" class="inputs-perfil" data-size="2">
                            <option value=" AC">Selecione o estado</option>
                            <option value=" AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                            <option value="EX">Estrangeiro</option>
                        </select>
                    </div>

                </section>

                <section style="display: flex; justify-content: center;padding-top:36px;">
                    <div id="box-inputs-forms" style="padding-right: 40px;">
                        <label class="form-perfil">Cidade</label>
                        <input class="inputs-perfil" type="text" placeholder="Exemplo">
                    </div>

                    <div id="box-inputs-forms">
                        <label class=" form-perfil">Bairro</label>
                        <input class="inputs-perfil" type="text" placeholder="Exemplo">
                    </div>

                </section>

                <section style="display: flex; justify-content: center;padding-top:36px">
                    <div id="box-inputs-forms" style="padding-right: 40px;">
                        <label class="form-perfil">Rua</label>
                        <input class="inputs-perfil" type="text" placeholder="Exemplo">
                    </div>

                    <div id="box-inputs-forms">
                        <label class=" form-perfil">Número</label>
                        <input class="inputs-perfil" type="text" placeholder="XXXXX">
                    </div>

                </section>

                <section style="padding-top:36px;padding-bottom:110px">
                    <label class="form-perfil">Complemento</label>
                    <input style="width:100% !important" class="inputs-perfil" type="text" placeholder="Exemplo">
                </section>

                <section class="rodape">
                    <a href=""><button type="submit" style="margin:0;margin-bottom:70px" id="btn-agendar-consulta">Editar perfil</button></a>
                </section>
            </form>

        </main>

    </div>
</div>


<?php require_once('footer.php'); ?>