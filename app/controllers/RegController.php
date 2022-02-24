<?php

namespace App\Controller;

use App\Model\RegModel;
use App\Service\DataBuilder;
use Core\View;

class RegController{

    use DataBuilder;

    public function show()
    {

        View::render('registration/show.php', ['companies' => $result]);
    }

    public function store() : void {
        $_POST['password'] = md5($_POST['password']);
        $args = $this->dataBuilder($_POST);

        $new_user = new RegModel();
        $new_user->store($args);
    }

}