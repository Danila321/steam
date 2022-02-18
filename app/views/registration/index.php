<?php \Core\View::renderHeader();?>
    <section class="columns is-full is-centered is-vertical catalog">
        <section class="column is-8 filter">
            <h1>Регистрация</h1>
            <div class="column is-two-thirds form">
                        <form method="POST" action="store" enctype="multipart/form-data">
                            <div class="form-control">
                                <label for="phone_number">Номер телефона</label>
                                <input type="text" name="phone_number" id="phone_number" placeholder="Введите номер телефона" autocomplete="off">
                            </div>

                            <div class="form-control">
                                <label for="password">Пароль</label>
                                <input type="text" name="password" id="password" placeholder="Введите пароль" autocomplete="off">
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
<?php \Core\View::renderFooter();?>