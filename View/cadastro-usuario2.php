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
            <a href=""><button type="submit" style="margin:0;margin-bottom:70px" id="btn-agendar-consulta">Agendar nova consulta</button></a>
        </section>
    </form>

</main>

<?php require_once('footer.php'); ?>