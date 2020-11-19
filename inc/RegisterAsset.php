<?php

/**
 * @package Egov
 */

namespace Inc;

use \Inc\Base\BaseController;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class RegisterAsset extends BaseController
{    
    public function register() {
		/**
		 * Enqueue Gutenberg block assets for both frontend + backend.
		 *
		 * @uses {wp-editor} for WP editor styles.
		 * @since 1.0.0
		 */
		add_action( "enqueue_block_assets", array( $this, "enqueueBlockAssets") );

		/**
		 * Enqueue Gutenberg block assets for backend editor.
		 *
		 * @uses {wp-blocks} for block type registration & related functions.
		 * @uses {wp-element} for WP Element abstraction — structure of blocks.
		 * @uses {wp-i18n} to internationalize the block's text.
		 * @uses {wp-editor} for WP editor styles.
		 * @since 1.0.0
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
			$this->plugin_name . '-block-editor-style',
			$this->plugin_url . 'dist/blocks.editor.build.css',
			array( 'wp-edit-blocks' ), 
			$this->plugin_path . 'dist/blocks.editor.build.css' 
		);
		
		wp_enqueue_script(
			$this->plugin_name . '-block-js',
			$this->plugin_url . 'dist/blocks.build.js',
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
			filemtime( $this->plugin_path . 'dist/blocks.build.js' )
		);
	}
}