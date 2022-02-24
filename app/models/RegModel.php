<?php

namespace App\Model;

use Core\Model;

class RegModel extends Model {
    /**
     * @var string
     */
    protected $table = "users";

    /**
     * @param $args
     * @return void
     */
    public function store($args)
    {
        return $this->storeToTable($this->table, $args);
    }

    /**
     * @param int $id
     * @return object
     */
    public function find(int $id)   : object
    {
        $user = $this->getByIdFromTable($this->table, $id);
        return array_shift($user);
    }

    /**
     * @param $args
     * @param $id
     * @return void
     */
    public function update($args, $id)
    {
        return $this->updateForTable($this->table, $id, $args);
    }

    /**
     * @param $id
     * @return bool
     */
    public function delete($id)
    {
        $args = ['id' => $id];
        return $this->deleteFromTable($this->table, $args);
    }
}