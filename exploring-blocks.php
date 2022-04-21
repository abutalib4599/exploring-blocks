<?php

/**
 * Plugin Name:      Exploring Blocks
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            TALIB
 * Author URI:        https://talib.netlify.app
 * License:           GPLv3
 * License URI:       https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:       exploring-blocks
 *
 * @package           @wordpress/create-block
 */

/**
 * @package Zero Configuration with @wordpress/create-block
 *  [exploring-blocks] && [exploring-blocks] ===> Prefix
 */

// Stop Direct Accessexploring_blocks
if (!defined('ABSPATH')) {
	exit;
}

/**
 * Blocks Final Class
 */

final class Exploring_blocks_Class {
	public function __construct() {

		// define constants
		$this->exploring_blocks_define_constants();

		// block initialization
		add_action('init', [$this, 'exploring_blocks_blocks_init']);

		// blocks category
		if (version_compare($GLOBALS['wp_version'], '5.7', '<')) {
			add_filter('block_categories', [$this, 'exploring_blocks_register_block_category'], 10, 2);
		} else {
			add_filter('block_categories_all', [$this, 'exploring_blocks_register_block_category'], 10, 2);
		}

		// enqueue block assets
		add_action('enqueue_block_assets', [$this, 'exploring_blocks_external_libraries']);
	}

	/**
	 * Initialize the plugin
	 */

	public static function init() {
		static $instance = false;
		if (!$instance) {
			$instance = new self();
		}
		return $instance;
	}

	/**
	 * Define the plugin constants
	 */
	private function exploring_blocks_define_constants() {
		define('exploring_blocks_VERSION', '1.0.0');
		define('exploring_blocks_URL', plugin_dir_url(__FILE__));
		define('exploring_blocks_LIB_URL', exploring_blocks_URL . 'lib/');
	}

	/**
	 * Blocks Registration
	 */

	public function exploring_blocks_register_block($name, $options = array()) {
		register_block_type(__DIR__ . '/build/' . $name, $options);
	}

	/**
	 * Blocks Initialization
	 */
	public function exploring_blocks_blocks_init() {
		// register single block
		$this->exploring_blocks_register_block('bootstrap');
	}

	/**
	 * Register Block Category
	 */

	public function exploring_blocks_register_block_category($categories, $post) {
		return array_merge(
			array(
				array(
					'slug'  => 'exploring_blocks',
					'title' => __('Exploring Blocks', 'exploring_blocks'),
				),
			),
			$categories,
		);
	}

	/**
	 * Enqueue Block Assets
	 */
	public function exploring_blocks_external_libraries() {
		// enqueue JS
		wp_enqueue_script('exploring_blocks-lib', exploring_blocks_LIB_URL . 'js/lib.js', array(), exploring_blocks_VERSION, true);
	}
}

/**
 * Kickoff
 */

Exploring_blocks_Class::init();
