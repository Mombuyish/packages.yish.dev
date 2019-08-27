# Laravel Scaffold

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path fill="#f4645f" d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>

<p>
<script async defer src="https://buttons.github.io/buttons.js"></script>
<a class="github-button" href="https://github.com/Mombuyish/Scaffold" data-show-count="true" aria-label="Star Mombuyish/Scaffold on GitHub">Star</a>
</p>

Super fast build CRUD resource for Laravel.

## Installation
``` bash
$ composer require yish/scaffold
```
5.5 or later:
*Auto discovery*

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