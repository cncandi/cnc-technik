<?php
$site = [
    'name' => 'Datentechnik Reitz',
    'company' => 'CAD/CAM Systeme Datentechnik Reitz GmbH & Co. KG',
    'tagline' => 'CAD/CAM · CNC · Robotik',
    'url' => 'https://www.cnc-technik.de',
    'email' => 'info@cnc-technik.de',
    'phone' => '+49 (6461) 759 343 7',
    'address' => 'Perfstraße 2 · 35216 Breidenstein',
];

$navigation = [
    'Über uns' => '/ueber-uns.php',
    'CAD/CAM' => '/ency.php',
    'Robotik' => '/robotik.php',
    'P3D' => '/p3d-slicer.php',
    'Support' => '/schulung-support.php',
    'News' => '/news.php',
    'Kontakt' => '/kontakt.php',
];

function e(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}

function active_link(string $href): string
{
    $current = basename($_SERVER['SCRIPT_NAME'] ?? '');
    return $current === basename($href) ? ' aria-current="page"' : '';
}

function page_title(string $title, array $site): string
{
    return $title . ' | ' . $site['name'];
}
