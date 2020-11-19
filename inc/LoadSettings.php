<?php

/**
 * @package Egov
 */

namespace Inc;
use Inc\Base\BaseController;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class LoadSettings extends BaseController
{
    public function register() {
        add_action( "init", array( $this, "loadTextDomain" ) );
        add_filter( 'block_categories', array( $this, "registerBlockCategory" ), 10, 2 );
    }

    public function loadTextDomain() {
        load_plugin_textdomain( 'egov', FALSE, $this->plugin. '/languages/' );
        wp_set_script_translations( 'egov-bootstrap-grid', 'egov', $this->plugin_path . 'languages'  );
    }

    public function registerBlockCategory( $categories ) {
        return array_merge(
            $categories,
            array(
                array(
                    'slug' => 'egov',
                    'title' => __( 'Egov', 'egov' ),
                    'icon'  => '',
                ),
            )
        );
    }
}