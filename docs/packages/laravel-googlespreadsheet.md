# Laravel Google SpreadSheet

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24">
<path d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z" fill="#f4645f"/><path d="M0 0h24v24H0z" fill="none"/></svg>

<p>
<script async defer src="https://buttons.github.io/buttons.js"></script>
<a class="github-button" href="https://github.com/Mombuyish/Laravel-GoogleSpreadSheet" data-show-count="true" aria-label="Star Mombuyish/Laravel-GoogleSpreadSheet on GitHub">Star</a>
<a href="https://packagist.org/packages/yish/laravel-googlespreadsheet"><img src="https://img.shields.io/packagist/dt/yish/laravel-googlespreadsheet.svg?style=flat-square" alt="Total Downloads"></a>
<a href="https://travis-ci.org/Mombuyish/laravel-googlespreadsheet"><img src="https://img.shields.io/travis/Mombuyish/laravel-googlespreadsheet/master.svg?style=flat-square" alt="Build Status"></a>
<a href="https://packagist.org/packages/yish/laravel-googlespreadsheet"><img src="https://img.shields.io/packagist/v/yish/laravel-googlespreadsheet.svg?style=flat-square" alt="Latest Stable Version"></a>
</p>

Google spreadsheet transforms to json and storing to file with laravel.

## Installation

You can install the package via composer:

```bash
composer require yish/laravel-googlespreadsheet
```

## Requirement

Laravel `5.8` or `6.*`

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