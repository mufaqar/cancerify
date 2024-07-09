<?php
/*
Plugin Name: Anik Routh search Api
Plugin URI: www.devbucket.com
Description: A simple plugin to display a greeting message.
Version: 1.0
Author: Anik Routh
Author URI: https://devbucket.com
License: GPL2
*/

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

add_action('rest_api_init', 'cancerRegisterSearch');

function cancerRegisterSearch() {
    register_rest_route('cancer/v1', 'search', array(
        'methods' => WP_REST_SERVER::READABLE,
        'callback' => 'cancerSearchResults',
    ));
}

function cancerSearchResults($data) {
    $searchTerm = sanitize_text_field($data['term']);
    $professors = new WP_Query(array(
        'post_type' => 'cancers',
        's' => $searchTerm,
        'posts_per_page' => 40, // Limit to 40 results
    ));

    $professorResults = array();

    while ($professors->have_posts()) {
        $professors->the_post();
        $title = get_the_title();
        error_log("Title: " . $title); // Debugging: log the title being checked
        if (stripos($title, $searchTerm) === 0) { // Check if the title starts with the search term
            array_push($professorResults, array(
                'title' => $title,
                'permalink' => get_the_permalink(),
            ));
        }
    }

    return $professorResults;
}
?>
