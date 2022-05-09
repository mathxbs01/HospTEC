<?php require_once('header.php'); ?>
<title>Recuperar a Senha</title>

<main class="container-login">
    <section class="login-1" style="padding-bottom: 180px;">
        <article class="topo-login">
            <img src="assets/img/logo.svg" id="logo-login">
            <p id="txt-login">Por favor, digite o seu e-mail para recuperar a senha!</p>
        </article>
        <form action="">
            <label for="fname" id="txt-login-forms">Digite seu e-mail</label><br>
            <input type="email" id="login-email" name="email" require placeholder="      exemplo@email.com"><br>
        </form>
        <div class="btn">
            <a href="index.php"><button id="rcCancelar">Cancelar</button></a>
            <a href="recuperar-senha2.php"><button id="rcPesquisar">Pesquisar</button></a>
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