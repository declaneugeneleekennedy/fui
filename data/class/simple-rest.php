<?php
    abstract class SimpleRest
    {
        protected $_data = null;

        protected $_token = null;

        public function __construct($data, $token) {
            if(!empty($data)) {
                $this->_data = json_decode($data);
            }

            if(!empty($token)) {
                $this->_token = $token;
            }
        }

        public function execute() {
            if(method_exists($this, $_SERVER['REQUEST_METHOD'])) {
                $this->{$_SERVER['REQUEST_METHOD']}();
            }
        }

        abstract protected function get();

        abstract protected function post();

        abstract protected function put();

        abstract protected function delete();

        protected function output($object) {
            header('Content-Type: application/json');
            echo json_encode($object);
            exit;
        }
    }
?>