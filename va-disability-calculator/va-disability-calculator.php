<?php
/*
Plugin Name: VA Disability Compensation Rates
Description: Stores VA compensation rates and provides an API to retrieve them dynamically.
Version: 1.0
Author: Mike Castro
*/

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Function to create database table
function create_compensation_rates_table() {
    global $wpdb;
    $table_name = $wpdb->prefix . 'va_compensation_rates';

    $charset_collate = $wpdb->get_charset_collate();

    $sql = "CREATE TABLE $table_name (
        id BIGINT(20) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        disability_rating INT NOT NULL,
        compensation_data LONGTEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) $charset_collate;";

    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
    dbDelta($sql);
}
register_activation_hook(__FILE__, 'create_compensation_rates_table');


// Seed DB
function seed_compensation_rates() {
    global $wpdb;
    $table_name = $wpdb->prefix . 'va_compensation_rates';

    $rates = array(
        10 => array("single" => 175.51),
        20 => array("single" => 346.95),
        30 => array(
            "single" => 537.42,
            "withSpouse" => 601.42,
            "withSpousewithoneParent" => 652.42,
            "withSpousewithTwoParents" => 703.42,
            "singlewithOneParent" => 588.42,
            "singlewithTwoParents" => 639.42,
            "singlewithOneChild" => 579.42,
            "withSpousewithOneChild" => 648.42,
            "withSpousewithOneParentwithOneChild" => 699.42,
            "withSpousewithTwoParentswithOneChild" => 750.42,
            "singlewithOneParentwithOneChild" => 630.42,
            "sinlgewithTwoParentswithOneChild" => 681.42,
            "additionalChildUnder18" => 31.0,
            "additionalChildOver18" => 102.0,
            "aidAndAttendance" => 58.0
        ),
        40 => array(
            "single" => 774.16,
            "withSpouse" => 859.16,
            "withSpousewithOneParent" => 927.16,
            "withSpousewithTwoParents" => 995.16,
            "withOneParent" => 842.16,
            "withTwoParents" => 910.16,
            "withOneChild" => 831.16,
            "withSpousewithOneChild" => 922.16,
            "withSpousewithOneParentwithOneChild" => 990.16,
            "withSpousewithTwoParentswithOneChild" => 1058.16,
            "withOneParentwithOneChild" => 899.16,
            "withTwoParentswithOneChild" => 967.16,
            "additionalChildUnder18" => 42.0,
            "additionalChildOver18" => 137.0,
            "aidAndAttendance" => 78.0
        ),
        50 => array(
            "single" => 1102.04,
            "withSpouse" => 1208.04,
            "withSpousewithOneParent" => 1293.04,
            "withSpousewithTwoParents" => 1378.04,
            "withOneParent" => 1187.04,
            "withTwoParents" => 1272.04,
            "withOneChild" => 1173.04,
            "withSpousewithOneChild" => 1287.04,
            "withSpousewithOneParentwithOneChild" => 1372.04,
            "withSpousewithTwoParentswithOneChild" => 1457.04,
            "withOneParentwithOneChild" => 1258.04,
            "withTwoParentswithOneChild" => 1343.04,
            "additionalChildUnder18" => 53.0,
            "additionalChildOver18" => 171.0,
            "aidAndAttendance" => 98.0
        ),
        60 => array(
            "single" => 1395.93,
            "withSpouse" => 1523.93,
            "withSpousewithOneParent" => 1625.93,
            "withSpousewithTwoParents" => 1727.93,
            "withOneParent" => 1497.93,
            "withTwoParents" => 1599.93,
            "withOneChild" => 1480.93,
            "withSpousewithOneChild" => 1617.93,
            "withSpousewithOneParentwithOneChild" => 1719.93,
            "withSpousewithTwoParentswithOneChild" => 1821.93,
            "withOneParentwithOneChild" => 1582.93,
            "withTwoParentswithOneChild" => 1684.93,
            "additionalChildUnder18" => 63.0,
            "additionalChildOver18" => 205.0,
            "aidAndAttendance" => 117.0
        ),
        70 => array(
            "single" => 1759.19,
            "withSpouse" => 1908.19,
            "withSpousewithOneParent" => 2028.19,
            "withSpousewithTwoParents" => 2148.19,
            "singlewithOneParent" => 1879.19,
            "singlewithTwoParents" => 1999.19,
            "singlewithOneChild" => 1859.19,
            "withSpousewithOneChild" => 2018.19,
            "withSpousewithOneParentwithOneChild" => 2138.19,
            "withSpousewithTwoParentswithOneChild" => 2258.19,
            "singlewithOneParentwithOneChild" => 1978.19,
            "singlewithTwoParentswithOneChild" => 2098.19,
            "additionalChildUnder18" => 74.0,
            "additionalChildOver18" => 239.0,
            "aidAndAttendance" => 137.0
        ),
        80 => array(
            "single" => 2044.89,
            "withSpouse" => 2214.89,
            "withSpousewithOneParent" => 2351.89,
            "withSpousewithTwoParents" => 2488.89,
            "singlewithOneParent" => 2181.89,
            "singlewithTwoParents" => 2318.89,
            "singleithOneChild" => 2158.89,
            "withSpousewithOneChild" => 2340.89,
            "withSpousewithOneParentwithOneChild" => 2477.89,
            "withSpousewithTwoParentswithOneChild" => 2614.89,
            "singlewithOneParentwithOneChild" => 2295.89,
            "singlewithTwoParentswithOneChild" => 2432.89,
            "additionalChildUnder18" => 84.0,
            "additionalChildOver18" => 274.0,
            "aidAndAttendance" => 157.0
        ),
        90 => array(
            "single" => 2297.96,
            "withSpouse" => 2489.96,
            "withSpousewithOneParent" => 2643.96,
            "withSpousewithTwoParents" => 2797.96,
            "singlewithOneParent" => 2451.96,
            "singlewithTwoParents" => 2605.96,
            "singlewithOneChild" => 2425.96,
            "withSpousewithOneChild" => 2630.96,
            "withSpousewithOneParentwithOneChild" => 2784.96,
            "withSpousewithTwoParentswithOneChild" => 2938.96,
            "singlewithOneParentwithOneChild" => 2579.96,
            "singlewithTwoParentswithOneChild" => 2733.96,
            "additionalChildUnder18" => 95.0,
            "additionalChildOver18" => 308.0,
            "aidAndAttendance" => 176.0
        ),
        100 => array(
            "single" => 3831.30,
            "withSpouse" => 4044.91,
            "withSpousewithOneParent" => 4216.35,
            "withSpousewithTwoParents" => 4387.79,
            "singlewithOneParent" => 4002.74,
            "singlewithTwoParents" => 4174.18,
            "singlewithOneChild" => 3974.15,
            "withSpousewithOneChild" => 4201.35,
            "withSpousewithoneParentwithOneChild" => 4372.79,
            "withSpousewithTwoParentswithOneChild" => 4544.23,
            "singlewithOneParentwithOneChild" => 4145.59,
            "singlewithTwoParentswithOneChild" => 4317.03,
            "additionalChildUnder18" => 106.14,
            "additionalChildOver18" => 342.85,
            "aidAndAttendance" => 195.92
        )
    );

$wpdb->query("TRUNCATE TABLE $table_name");

    foreach ($rates as $rating => $data) {
        $wpdb->insert($table_name, array(
            'disability_rating' => $rating,
            'compensation_data' => json_encode($data)
        ));
    }
}
register_activation_hook(__FILE__, 'seed_compensation_rates');

function get_compensation_rates() {
    global $wpdb;
    $table_name = $wpdb->prefix . 'va_compensation_rates';

    // Fetch all rows from the table
    $results = $wpdb->get_results("SELECT disability_rating, compensation_data FROM $table_name", ARRAY_A);

    if (empty($results)) {
        return new WP_Error('no_rates', 'No compensation rates found', array('status' => 404));
    }

    // Build the compensation rates array
    $compensation_rates = [];
    foreach ($results as $row) {
        $rating = (int) $row['disability_rating'];
        $compensation_rates[$rating] = json_decode($row['compensation_data'], true);
    }

    return rest_ensure_response($compensation_rates);
}
