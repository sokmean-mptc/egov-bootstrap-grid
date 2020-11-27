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
		/**
		 * Enqueue Gutenberg block assets for both frontend + backend.
		 */
		add_action( "enqueue_block_assets", array( $this, "enqueueBlockAssets") );

		/**
		 * Enqueue Gutenberg block assets for backend editor.
		 */
		add_action( "enqueue_block_editor_assets", array( $this, "enqueueEditorAssets" ) );
    }

	public function enqueueBlockAssets() {
		wp_enqueue_style(
			$this->plugin_name . '-style',
			$this->plugin_url . 'dist/blocks.style.build.css',
			array( 'wp-editor' ),
			filemtime( $this->plugin_path . 'dist/blocks.style.build.css' )
		);
	}

    public function enqueueEditorAssets() {

		wp_enqueue_style(
			$this->plugin_name . '-editor-style',
			$this->plugin_url . 'dist/blocks.editor.build.css',
			array( 'wp-edit-blocks' ), 
			$this->plugin_path . 'dist/blocks.editor.build.css' 
		);
		
		wp_enqueue_script(
			$this->plugin_name . '-js',
			$this->plugin_url . 'dist/blocks.build.js',
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
			filemtime( $this->plugin_path . 'dist/blocks.build.js' )
		);
	}
}