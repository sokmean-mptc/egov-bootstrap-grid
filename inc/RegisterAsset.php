<?php

/**
 * @package Egov
 */

namespace EBG;

use EBG\Base\BaseController;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class RegisterAsset extends BaseController
{    
    public function register() {
		add_action( "init", array( $this, "registerScripts" ) );
    }

	public function registerScripts() {
		wp_register_script(
			$this->plugin_name . '-js',
			$this->plugin_url . 'build/index.js',
			array( 'wp-block-editor', 'wp-blocks', 'wp-element', 'wp-i18n', 'wp-polyfill' )
		);
	}
}