# Laravel Scaffold
::: warning
This package was not maintenance.
:::
<p>
<script async defer src="https://buttons.github.io/buttons.js"></script>
<a class="github-button" href="https://github.com/Mombuyish/Scaffold" data-show-count="true" aria-label="Star Mombuyish/Scaffold on GitHub">Star</a>
</p>

## Introduction

Super fast build CRUD resource for Laravel.

## Requirement

| Version | branch |
| ------- | ------ |
| 5.5 ~ 8.x     | 1.x  |

## Installation

``` bash
$ composer require yish/scaffold
```

Previous version
``` php
Yish\Scaffold\ScaffoldServiceProvider::class
```

## Publish config (require)
``` php
$ php artisan vendor:publish
```

## Usage
``` bash
$ php artisan make:scaffold Post
```

It will be generating blong:
* request
* controller (including CRUD)
* migration
* model
* factory
* views {index, create, edit, show}
* append Route::resource(...) to specific route file.

## Option
``` bash
$ php artisan make:scaffold Post --route=api
```
