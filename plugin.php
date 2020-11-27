<?php
/**
 * Plugin Name: Egov Bootstrap Grid
 * Plugin URI: https://github.com/
 * Description: A full fill Bootstrap grid system for WordPress gutenberg plugin.
 * Author: sokmean-mptc
 * Author URI: https://sokmean.com/
 * Version: 1.0.0
 * Text Domain: egov
 * Domain Path: /languages
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package Egov
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once plugin_dir_path( __FILE__ ) . "vendor/autoload.php";

function egov_bootstrap_grid_activate() {
	EBG\Base\Activate::activate();
}
register_activation_hook( __FILE__, "egov_bootstrap_grid_activate" );

function egov_bootstrap_grid_deactivate() {
	EBG\Base\Deactivate::deactivate();
}
register_deactivation_hook( __FILE__, "egov_bootstrap_grid_deactivate" );

if( class_exists( "EBG\Init" ) ) {
	EBG\Init::registerServices();
}