<?php require_once('header.php'); ?>
<title>Login</title>

<main class="container-login">
    <section class="login-1">
        <article class="topo-login">
            <img src="assets/img/logo.svg" id="logo-login">
            <p id="txt-login">Por favor, faça o seu login para ter o acesso!</p>
        </article>
        <form action="">
            <label for="fname" id="txt-login-forms">Digite seu e-mail</label><br>
            <input type="email" id="login-email" name="email" require placeholder="      exemplo@email.com"><br>
            <label for="lname" id="txt-login-forms">Digite sua senha</label><br>
            <input type="password" id="login-senha" name="senha" require placeholder="      ***********"><br>
            <button id="btn-entrar"><a href=""></a>Entrar</button>
        </form>
        <a id="txt-login2" href="recuperar-senha1.php">Esqueceu a senha? </a>
        <hr>
        <a id="txt-login2" href="cadastro-usuario1.php" style="margin-bottom: 52px;">Quero me cadastrar </a>
    </section>
    <section class=" login-2 ">
        <h1 class="login ">Seja Bem Vindo!</h1>
        <h2 class="login ">Acesse sua conta agora mesmo.</h2>
        <img id="img-login " src="assets/img/img-bem-vindo.svg " class="img-fluid">
    </section>
</main>

<?php require_once('footer.php'); ?>