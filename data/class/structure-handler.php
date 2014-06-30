<?php

    require_once 'simple-rest.php';
    require_once 'form-structure.php';

    class StructureHandler extends SimpleRest
    {
        protected function get() {
            $this->output(getStructure());
        }

        protected function put() {}

        protected function post() {}

        protected function delete() {}
    }