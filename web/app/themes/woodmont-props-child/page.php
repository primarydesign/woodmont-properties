<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * To generate specific templates for your pages you can use:
 * /mytheme/views/page-mypage.twig
 * (which will still route through this PHP file)
 * OR
 * /mytheme/page-mypage.php
 * (in which case you'll want to duplicate this file and save to the above path)
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

$context = Timber::get_context();
$post = new TimberPost();
$context['post'] = $post;


/** Custom Post Types! set posts_per_page to -1 for unlimited */
$propertyArgs = array(
	'posts_per_page'   => 8,
	'post_type' => 'properties'
);
$staffArgs = array(
	'posts_per_page'   => 8,
	'post_type' => 'staff'
);
$newsArgs = array(
	'posts_per_page'   => 3,
	'post_type' => ''
);
$context['news'] = Timber::get_posts($newsArgs);
$context['properties'] = Timber::get_posts($propertyArgs);
$context['staff'] = Timber::get_posts($staffArgs);
$context['careers'] = Timber::get_posts('post_type=careers');

Timber::render( array('page-' . $post->post_name . '.twig',	'page.twig'), $context );
