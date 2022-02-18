<?php

namespace App\Controller;

use App\Model\CompanyModel;
use App\Policy\CompanyPolicy;
use Core\View;

class RegController{

    public function index()
    {

        View::render('registration/index.php', ['companies' => $result]);
    }

}