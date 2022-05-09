<?php require_once('header.php'); ?>
<title>Recuperar a Senha</title>

<main class="container-login">
    <section class="login-1" style="padding-bottom: 180px;">
        <article class="topo-login">
            <img src="assets/img/logo.svg" id="logo-login">
            <p id="txt-login">Como você deseja receber o código para redefinir sua senha?</p>
        </article>
        <form action="">
            <input type="button" id="check-email" name="check-email">
            <label id="txt-redefinir">Enviar código por email: exemplo@email.com</label><br>
            <br>
            <input type="button" id="check-email" name="check-email">
            <label id="txt-redefinir">Enviar código por SMS: +***********84</label>
        </form>
        <div class="btn">
            <a href="index.php"><button id="rcCancelar">Cancelar</button></a>
            <a href="recuperar-senha3.php"><button id="rcPesquisar">Pesquisar</button></a>
        </div>
        </form>
    </section>
    <section class=" login-2 " style=" padding: 0px 60px 0px 60px">
        <h1 class="login ">Esqueceu a senha?</h1>
        <h2 class="rcSenha">Redefine agora mesmo.</h2>
        <img id="img-login " src="assets/img/icon-key.svg " class="img-fluid">
    </section>
</main>
<?php require_once('footer.php'); ?>