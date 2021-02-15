# Laravel Google SpreadSheet
::: warning
This package was not maintenance.
:::
<p>
<script async defer src="https://buttons.github.io/buttons.js"></script>
<a class="github-button" href="https://github.com/Mombuyish/Laravel-GoogleSpreadSheet" data-show-count="true" aria-label="Star Mombuyish/Laravel-GoogleSpreadSheet on GitHub">Star</a>
<a href="https://packagist.org/packages/yish/laravel-googlespreadsheet"><img src="https://img.shields.io/packagist/dt/yish/laravel-googlespreadsheet.svg?style=flat-square" alt="Total Downloads"></a>
<a href="https://travis-ci.org/Mombuyish/laravel-googlespreadsheet"><img src="https://img.shields.io/travis/Mombuyish/laravel-googlespreadsheet/master.svg?style=flat-square" alt="Build Status"></a>
<a href="https://packagist.org/packages/yish/laravel-googlespreadsheet"><img src="https://img.shields.io/packagist/v/yish/laravel-googlespreadsheet.svg?style=flat-square" alt="Latest Stable Version"></a>
</p>

## Introduction

Google spreadsheet transforms to json and storing to file with laravel.

## Requirement

| Version | branch |
| ------- | ------ |
| 5.8 ~ 8.x     | 1.x  |

## Installation

``` bash
$ composer require yish/laravel-googlespreadsheet
```

If you need to set access type, you can publish config.

This package depends on `pulkitjalan/google-apiclient`, so you need publish `pulkitjalan/google-apiclient` config and setup.

``` php
    'service' =>  [
        'enabled' => true,
        'file' => 'your-service-account-json-file-path',
    ],
```

You need to check your service account and configs are all done.
1. google console
2. service account
3. download credential.json
4. enabled sheet api
5. paste service account to sheet account permission

## Usage

``` php
// $sheet_id = your google spreadsheet id.
// $range = you need column range, like 'Class Data!A2:E', if you use chinese, using double quote. "'首頁'!A2:E".
// $title = you want to set which one be a title key.
// $unset = you want to unset which columns. 
// $scope = Google_Service_Sheets::SPREADSHEETS_READONLY.
GoogleSpreadSheet::json($sheet_id, $range, $title = 0, $unset = [], $scope = null)
GoogleSpreadSheet::json($sheet_id, 'index!A2:E', 0, [1, 2]) // get the sheet and set 0 column to be title key, unset column 1 and column 2.
// You can chain the storeAs.
GoogleSpreadSheet::json($sheet_id, 'index!A2:E', 0, [1, 2])->storeAs($path, $disk = 'public')
// Or you can use feed.
GoogleSpreadSheet::feed($sheet_id, $sheet = 1, $format = 'json')
```
