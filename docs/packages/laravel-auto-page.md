# Laravel Auto Page

<p>
<script async defer src="https://buttons.github.io/buttons.js"></script>
<a class="github-button" href="https://github.com/Mombuyish/Laravel-Auto-Page" data-show-count="true" aria-label="Star Mombuyish/Laravel-Auto-Page on GitHub">Star</a>
</p>

## Introduction

This package will help you super faster to create page without set route and auto generate specific route.

## Requirement

| Version | branch |
| ------- | ------ |
| 5.8     | 1.0.x  |
| 6.x     | 1.0.x  |

## Installation

``` bash
$ composer require yish/autopage
```

Support auto discovery and you don’t want to do u can don’t discover and register `Yish\AutoPage\AutoPageServiceProvider::class`

Next, you need to create directory `pages` in `resources/views`, or you can use:

``` bash
$ php artisan vendor:publish
```

To publish config `auto-page.php` setting the directory and other settings.

## Usage
For example, you want to make `http://localhost/hello` you need to `web.php` and create route and make closure or controller, for now you don’t do this, you can negative to `resources/views/pages` and create `hello.blade.php` put in your html an code and done it.

``` php
// hello.blade.php
<h1>Hello, world</h1>
```

Try to visit `http://localhost/hello` and will see `Hello, world` it’s pretty amazing, right?

Supported 1 slug(required) and 5 options uri, so you can do: `resources/views/hello/a/b/c/d/e`, and visit `http://localhost/hello/a/b/c/d/e`

![](https://i.imgur.com/BA6XFjd.png)

## Optional
Sometimes, you need to add the customize whoops page for situation.
For example, your directory is `resources/views/hello` but you need to set whoops for this directory, add `whoops.blade.php` on the same directory layer, if you want to customize specific whoops, you can do the same above, otherwise it will aborting 404 by default.