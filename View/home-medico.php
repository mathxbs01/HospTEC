<?php require_once('header.php'); ?>

<div class="BackgroundSystem">

    <div class="SoundBar" style="content:'';height: 100%; width: 100px;">
    </div>

    <div class="topo">
        <header style="grid-template-rows:none">
            <div class="logo2">
                <img src="assets/img/logo-2.svg">
            </div>
            <h1 class="titulos1" style="grid-column: 2/7;">Bem vindo a página inicial</h1>
        </header>
        <main class="main-menus-home">
            <div style="background-color: #70CDFF;padding-left:35px;width:65%;padding-right:61px;border-radius: 0px 40px 0px 0px;padding-top:68px">

                <h3>Olá, Antônio</h3>
                <p class="sub-titulo2" style="color:white;margin-top:20px">O que deseja fazer?</p>

                <section class="menus-home">

                    <a href="consultas-medico.php" class="box-menus-home">
                        <img src="assets/img/recepcionista/icon-agendamento.svg">
                        <p class="txt-box-menus">Meus agendamentos</p>
                    </a>
                    <a href="minhas-receitas-medico.php" class="box-menus-home" style="margin-left: 52px;margin-right:52px">
                        <img src="assets/img/home/icon-receitas.svg">
                        <p class="txt-box-menus">Minhas receitas médicas</p>
                    </a>

                    <a href="perfil-medico.php" class="box-menus-home">
                        <img src="assets/img/home/icon-perfil.svg">
                        <p class="txt-box-menus">Meu perfil &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</p>

                    </a>
                </section>

            </div>
            <div style="padding:0px 0px 4.5% 4.5%">
                <img src="assets/img/home/img-mulher.svg">
            </div>
        </main>

    </div>

</div>

<?php require_once('footer.php'); ?>