<?php \Core\View::renderHeader();?>
    <html>
        <head>
            <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.1.9/dist/sweetalert2.all.min.js"></script>
            <script src=""></script>
        </head>
        <body>
            <section class="columns is-full is-centered is-vertical catalog">
                <section class="column is-8 filter">
                    <h1>Регистрация</h1>
                    <div class="column is-two-thirds form">
                                <form method="POST" action="register/store" enctype="multipart/form-data">
                                    <div class="form-control">
                                        <label for="reg_phone">Телефон</label>
                                        <input type="tel" name="phone" id="phone" class="auth-field input-selector" placeholder="Введите номер телефона" autocomplete="off">
                                    </div>

                                    <div class="form-control">
                                        <label for="password">Пароль</label>
                                        <input type="password" name="password" id="password" class="auth-field" placeholder="Введите пароль" autocomplete="off">
                                    </div>

                                    <div class="form-control">
                                        <div class="buttons">
                                            <button class="button is-success is-light" type="submit">Зарегестрироваться</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                </section>
            </section>
        </body>
    </html>
<?php \Core\View::renderFooter();?>