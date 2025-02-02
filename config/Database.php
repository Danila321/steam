<?php

namespace Core;

use PDO;
use PDOException;

class Database
{
    public $connect;

    /**
     * Database constructor.
     */
    public function __construct()
    {
        try {
            $this->connect = new PDO("mysql:host=" . $_ENV["DB_HOST"] . ";dbname=" . $_ENV["DB_NAME"] . ";", $_ENV["DB_USER"], $_ENV["DB_PASSWORD"]);
            $this->connect->exec("set names utf8");
        }catch (PDOException $e) {
            echo "Произошла ошибка следующего типа: " . $e->getMessage();
        }
    }

    /**
     * Переопределяем метод query()
     *
     * @param string $sql
     * @return array
     */
    public function query(string $sql) : array
    {
        $query = $this->connect->query($sql);
        return $query->fetchAll(PDO::FETCH_CLASS);
    }

    /**
     * Переопределяем метод execute()
     *
     * @param string $sql
     * @param array|null $arguments
     * @return array
     */
    public function execute(string $sql, ?array $arguments) : array
    {
        $query = $this->connect->prepare($sql);
        $query->execute($arguments);
        return $query->fetch(PDO::FETCH_ASSOC);
    }
}