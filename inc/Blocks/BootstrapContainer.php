<?php

/**
 * @package Egov
 */

namespace EBG\Blocks;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class BootstrapContainer
{
    public function register() {
        add_action( "init", array( $this, "registerBlock" ) );
    }

    public function registerBlock() {
        register_block_type(
            'egov-bootstrap-grid/bootstrap-container', array(
                'editor_script' => 'egov-bootstrap-grid-js',
            )
        );
    }
}