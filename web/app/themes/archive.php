<?php
/**
 * The template for displaying Archive pages.
 *
 * Used to display archive-type pages if nothing more specific matches a query.
 * For example, puts together date-based pages if no date.php file exists.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.2
 */

global $paged;
    if (!isset($paged) || !$paged){
        $paged = 1;
    }
    $context = Timber::get_context();
    $args = array(
        'post_type' => 'post',
        'posts_per_page' => 12,
        'paged' => $paged
    );
    /* THIS LINE IS CRUCIAL */
    /* in order for WordPress to know what to paginate */
    /* your args have to be the defualt query */
    query_posts($args);
    /* make sure you've got query_posts in your .php file */
    $context['posts'] = Timber::get_posts();
    $context['pagination'] = Timber::get_pagination();
    Timber::render('index.twig', $context);
