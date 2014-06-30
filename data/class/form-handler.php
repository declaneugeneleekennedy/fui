<?php
    require_once 'simple-rest.php';

    session_start();

    class FormHandler extends SimpleRest
    {
        protected function get() {}

        protected function post() {
            $_SESSION['form'] = $this->_data;
            $this->output($_SESSION['form']);
        }

        protected function put() {
            $_SESSION['form'] = $this->_data;
            $this->output($_SESSION['form']);
        }

        protected function delete() {}
    }
?>