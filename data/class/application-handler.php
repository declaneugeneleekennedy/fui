<?php
    require_once 'simple-rest.php';

    class ApplicationHandler extends SimpleRest
    {
        protected $_pdo = null;

        protected function get() {
            if(empty($this->_token)) {
                return;
            }

            $statement = $this->query()->prepare(
                "SELECT
                    *
                FROM 
                    `application`
                WHERE 
                    token = :id"
            );

            $statement->execute(array(
                ':id' => $this->_token
            ));

            if($data = $statement->fetch(PDO::FETCH_OBJ)) {
                $this->output(array(
                    'applicationToken'  => $data->token,
                    'values'            => json_decode($data->json)
                ));
            }
        }

        protected function post() {
            $statement = $this->query()->prepare(
                "INSERT INTO 
                    application (
                        token,
                        json
                    ) VALUES (
                        :token,
                        :json
                    )"
            );

            $token = md5(microtime(true));

            if($statement->execute(array(
                    ':token'    => $token,
                    ':json'     => json_encode($this->_data->values)
                ))
            ) {
                $this->output(array(
                    'applicationToken' => $token
                ));
            }
        }

        protected function put() {
            $statement = $this->query()->prepare(
                "UPDATE 
                    application
                SET 
                    json = :json
                WHERE 
                    token = :token"
            );

            if($statement->execute(array(
                ':json' => json_encode($this->_data->values),
                ':token' => $this->_data->applicationToken
            ))) {
                $this->output(array(
                    'applicationToken'  => $this->_data->applicationToken,
                    'values'            => $this->_data->values
                ));
            }
        }

        protected function delete() {}

        protected function query() {
            if(is_null($this->_pdo)) {
                $this->_pdo = new PDO(
                    'mysql:dbname=fui;host=localhost',
                    'fui',
                    'password'
                );
            }

            return $this->_pdo;
        }
    }