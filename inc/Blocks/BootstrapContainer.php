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
                'style'         => 'egov-block-style',
                'editor_script' => 'egov-block-js',
                'editor_style'  => 'egov-block-editor-css',
            )
        );
    }
}