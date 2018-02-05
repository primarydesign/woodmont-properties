<?php

if ( ! class_exists( 'Timber' ) ) {
	add_action( 'admin_notices', function() {
		echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="' . esc_url( admin_url( 'plugins.php#timber' ) ) . '">' . esc_url( admin_url( 'plugins.php') ) . '</a></p></div>';
	});
	
	add_filter('template_include', function($template) {
		return get_stylesheet_directory() . '/static/no-timber.html';
	});
	
	return;
}

Timber::$dirname = array('templates', 'views');

class StarterSite extends TimberSite {

	function __construct() {
		add_theme_support( 'post-formats' );
		add_theme_support( 'post-thumbnails' );
		add_theme_support( 'menus' );
		add_theme_support( 'html5', array( 'comment-list', 'comment-form', 'search-form', 'gallery', 'caption' ) );
		add_filter( 'timber_context', array( $this, 'add_to_context' ) );
		add_filter( 'get_twig', array( $this, 'add_to_twig' ) );
		add_action( 'init', array( $this, 'register_post_types' ) );
		add_action( 'init', array( $this, 'register_taxonomies' ) );
		parent::__construct();
	}

	function register_post_types() {
		//this is where you can register custom post types
	}

	function register_taxonomies() {
		//this is where you can register custom taxonomies
	}

	function add_to_context( $context ) {
		$context['foo'] = 'bar';
		$context['stuff'] = 'I am a value set in your functions.php file';
		$context['notes'] = 'These values are available everytime you call Timber::get_context();';
		$context['menu'] = new TimberMenu();
		$context['site'] = $this;
		return $context;
	}

	function myfoo( $text ) {
		$text .= ' bar!';
		return $text;
	}

	function add_to_twig( $twig ) {
		/* this is where you can add your own functions to twig */
		$twig->addExtension( new Twig_Extension_StringLoader() );
		$twig->addFilter('myfoo', new Twig_SimpleFilter('myfoo', array($this, 'myfoo')));
		return $twig;
	}

}

new StarterSite();

//Start Customize Dash

// Create the function to output the contents of our Dashboard Widget
function example_dashboard_widget_function() {
	// Dev version
	echo '<style>.primary-metrics{display:flex;width:100%}.primary-metrics div{flex:1;width:15%;height:300px;background-repeat:no-repeat;background-position:center center}.primary-metrics div:nth-of-type(1){background-image:url(/app/themes/woodmont-props/dashboard/1.png);background-size:contain;background-color:#50966f}.primary-metrics div:nth-of-type(2){background-image:url(/app/themes/woodmont-props/dashboard/2.png);background-size:contain;background-color:#69bb8a}.primary-metrics div:nth-of-type(3){background-image:url(/app/themes/woodmont-props/dashboard/3.png);background-size:contain;background-color:#50966f}.primary-metrics div:nth-of-type(4){background-image:url(/app/themes/woodmont-props/dashboard/4.png);background-size:contain;background-color:#69bb8a}.primary-metrics div:nth-of-type(5){background-image:url(/app/themes/woodmont-props/dashboard/6.png);background-size:contain;background-color:#50966f}.primary-metrics div:nth-of-type(6){background-image:url(/app/themes/woodmont-props/dashboard/5.png);background-size:contain;background-color:#69bb8a}@media screen and (max-width:782px){.primary-metrics{flex-direction:column}.primary-metrics div{width:100%;height:200px}}</style><div class="primary-metrics"><div></div><div></div><div></div><div></div><div></div><div></div></div>';


} 
 
// Create the function use in the action hook
function example_add_dashboard_widgets() {
	wp_add_dashboard_widget('primary_performance_metrics', 'Primary Metrics (Coming Soon)', 'example_dashboard_widget_function');

		// Globalize the metaboxes array, this holds all the widgets for wp-admin
 
 	global $wp_meta_boxes;
 	
 	// Get the regular dashboard widgets array 
 	// (which has our new widget already but at the end)
 
 	$normal_dashboard = $wp_meta_boxes['dashboard']['normal']['core'];
 	
 	// Backup and delete our new dashboard widget from the end of the array
 
 	$example_widget_backup = array( 'primary_performance_metrics' => $normal_dashboard['primary_performance_metrics'] );
 	unset( $normal_dashboard['primary_performance_metrics'] );
 
 	// Merge the two arrays together so our widget is at the beginning
 
 	$sorted_dashboard = array_merge( $example_widget_backup, $normal_dashboard );
 
 	// Save the sorted array back into the original metaboxes 
 
 	$wp_meta_boxes['dashboard']['normal']['core'] = $sorted_dashboard;

}
// Hoook into the 'wp_dashboard_setup' action to register our other functions
add_action('wp_dashboard_setup', 'example_add_dashboard_widgets' );

//remove emojis

remove_action( 'wp_head', 'print_emoji_detection_script', 7 ); 
remove_action( 'admin_print_scripts', 'print_emoji_detection_script' ); 
remove_action( 'wp_print_styles', 'print_emoji_styles' ); 
remove_action( 'admin_print_styles', 'print_emoji_styles' );
remove_action('wp_head', 'wp_generator');

//remove WP in header
add_action( 'init', function() {

    // Remove the REST API endpoint.
    remove_action('rest_api_init', 'wp_oembed_register_route');

    // Turn off oEmbed auto discovery.
    // Don't filter oEmbed results.
    remove_filter('oembed_dataparse', 'wp_filter_oembed_result', 10);

    // Remove oEmbed discovery links.
    remove_action('wp_head', 'wp_oembed_add_discovery_links');

    // Remove oEmbed-specific JavaScript from the front-end and back-end.
    remove_action('wp_head', 'wp_oembed_add_host_js');

    //remove editor from clients custom post type
	//remove_post_type_support( 'client', 'editor' );

}, PHP_INT_MAX - 1 );

//hide updates
add_action( 'admin_init', 'wpse_38111' );
function wpse_38111() {
    remove_submenu_page( 'index.php', 'update-core.php' );
}

add_filter( 'w3tc_can_print_comment', '__return_false', 10, 1 );

//dashboard columns
function dashboard_columns($columns) {
$columns['dashboard'] = 1;
return $columns;
}
add_filter('screen_layout_columns', 'dashboard_columns');

function layout_dashboard () { return 1; }
add_filter('get_user_option_screen_layout_dashboard', 'layout_dashboard');

//custom admin url
function custom_admin_url($path) { 
    return str_replace('wp-admin', 'dash', $path); 
}
add_filter('admin_url', 'custom_admin_url');

//customize profile page
function remove_personal_options(){
    echo '<script type="text/javascript">jQuery(document).ready(function($) {
  
$(\'form#your-profile > h2:first\').remove(); // remove the "Personal Options" title
  
$(\'form#your-profile tr.user-rich-editing-wrap\').remove(); // remove the "Visual Editor" field
  
$(\'form#your-profile tr.user-admin-color-wrap\').remove(); // remove the "Admin Color Scheme" field
  
$(\'form#your-profile tr.user-comment-shortcuts-wrap\').remove(); // remove the "Keyboard Shortcuts" field
  
$(\'form#your-profile tr.user-admin-bar-front-wrap\').remove(); // remove the "Toolbar" field
  
$(\'form#your-profile tr.user-language-wrap\').remove(); // remove the "Language" field
  
//$(\'form#your-profile tr.user-first-name-wrap\').remove(); // remove the "First Name" field
  
//$(\'form#your-profile tr.user-last-name-wrap\').remove(); // remove the "Last Name" field
  
$(\'form#your-profile tr.user-nickname-wrap\').hide(); // Hide the "nickname" field

$(\'table.form-table tr.user-googleplus-wrap\').remove();

$(\'table.form-table tr.user-twitter-wrap\').remove();

$(\'table.form-table tr.user-facebook-wrap\').remove();

$(\'table.form-table tr.user-display-name-wrap\').remove(); // remove the “Display name publicly as” field
  
$(\'table.form-table tr.user-url-wrap\').remove();// remove the "Website" field in the "Contact Info" section
  
$(\'h2:contains("About Yourself"), h2:contains("About the user")\').remove(); // remove the "About Yourself" and "About the user" titles
  
$(\'form#your-profile tr.user-description-wrap\').remove(); // remove the "Biographical Info" field
  
$(\'form#your-profile tr.user-profile-picture\').remove(); // remove the "Profile Picture" field
  
$(\'table.form-table tr.user-aim-wrap\').remove();// remove the "AIM" field in the "Contact Info" section
 
$(\'table.form-table tr.user-yim-wrap\').remove();// remove the "Yahoo IM" field in the "Contact Info" section
 
$(\'table.form-table tr.user-jabber-wrap\').remove();// remove the "Jabber / Google Talk" field in the "Contact Info" section

$(\'#cdw-support hr\').remove(); //remove contact dash hr

$(\'#dashboard_browser_nag\').remove(); //remove browser nag

});</script>';
  
}
  
add_action('admin_head','remove_personal_options');

add_action('admin_init', 'rw_remove_dashboard_widgets');
function rw_remove_dashboard_widgets() {
 remove_meta_box('blc_dashboard_widget', 'dashboard', 'normal'); 
}

//rename posts to news
function revcon_change_post_label() {
    global $menu;
    global $submenu;
    $menu[5][0] = 'News';
    $submenu['edit.php'][5][0] = 'News';
    $submenu['edit.php'][10][0] = 'Add News';
    $submenu['edit.php'][16][0] = 'News Tags';
}
function revcon_change_post_object() {
    global $wp_post_types;
    $labels = &$wp_post_types['post']->labels;
    $labels->name = 'News';
    $labels->singular_name = 'News';
    $labels->add_new = 'Add News';
    $labels->add_new_item = 'Add News';
    $labels->edit_item = 'Edit News';
    $labels->new_item = 'News';
    $labels->view_item = 'View News';
    $labels->search_items = 'Search News';
    $labels->not_found = 'No News found';
    $labels->not_found_in_trash = 'No News found in Trash';
    $labels->all_items = 'All News';
    $labels->menu_name = 'News';
    $labels->name_admin_bar = 'News';
}
 
add_action( 'admin_menu', 'revcon_change_post_label' );
add_action( 'init', 'revcon_change_post_object' );

// Change the pin icon to a megaphone
function ccd_menu_news_icon() {
  global $menu;
  foreach ( $menu as $key => $val ) {
    if ( __( 'News') == $val[0] ) {
      $menu[$key][6] = 'dashicons-megaphone';
    }
  }
}
add_action( 'admin_menu', 'ccd_menu_news_icon' );



//dev
// add_action('admin_bar_menu', 'add_toolbar_items', 100);
// function add_toolbar_items($admin_bar){
//     $admin_bar->add_menu( array(
//         'id'    => 'my-item',
//         'title' => 'Clear Cache',
//         'href'  => admin_url() . 'admin.php?page=w3tc_dashboard&w3tc_flush_all&_wpnonce=4f6074ad0c',
//         'meta'  => array(
//             'title' => __('Clear Cache'),            
//         ),
//     ));
// }

//add clear cache button
// add_action('admin_bar_menu', 'add_toolbar_items', 100);
// function add_toolbar_items($admin_bar){
//     $admin_bar->add_menu( array(
//         'id'    => 'my-item',
//         'title' => 'Clear Cache',
//         'href'  => admin_url() . 'admin.php?page=w3tc_dashboard&w3tc_flush_all&_wpnonce=978fefe76b',
//         'meta'  => array(
//             'title' => __('Clear Cache'),            
//         ),
//     ));
// }

//END Customize Dash