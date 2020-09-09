# Laravel Imgur

<p>
<script async defer src="https://buttons.github.io/buttons.js"></script>
<a class="github-button" href="https://github.com/Mombuyish/Laravel-Imgur" data-show-count="true" aria-label="Star Mombuyish/Laravel-Imgur on GitHub">Star</a>
<a href="https://packagist.org/packages/yish/imgur"><img src="https://poser.pugx.org/yish/imgur/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/yish/imgur"><img src="https://poser.pugx.org/yish/imgur/v/stable.svg" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/yish/imgur"><img src="https://poser.pugx.org/yish/imgur/license.svg" alt="License"></a>
<a href="https://packagist.org/packages/yish/imgur"><img src="https://poser.pugx.org/yish/imgur/v/unstable.svg" alt="License"></a>
</p>

## Introduction

Laravel Imgur is super easy upload image to imgur package.

## Requirement

| Version | branch |
| ------- | ------ |
| 5.x     | 1.0.x  |
| 6.x     | 1.0.x  |
| 7.x ~ 8.x     | 1.1.x  |

## Installation

``` bash
$ composer require yish/imgur
```

### Registering Service Provider

If you are using laravel 5.5 or later, you can use auto discover, you don't need put in service provider to `app.php`.

``` php
<?php
//app.php
'providers' => [
    \Yish\Imgur\UploadServiceProvider::class,
],
```

### Facade binding

```php
'Imgur' => Yish\Imgur\Facades\Upload::class,
```

### Publish config

```bash
$ php artisan vendor:publish
```

### Usage

```php
Imgur::upload($args);
```

Arguments can be a image link or file, for example, you can pass a link file or use file upload *MUST* instance of `Illuminate\Http\UploadedFile` .

### Customize

If you want to customize your headers or form params, you can do belong:

```php
Imgur::setHeaders([
    'headers' => [
        'authorization' => 'Client-ID ' . env('IMGUR_CLIENT_ID'),
        'content-type' => 'application/x-www-form-urlencoded',
    ]
])->setFormParams([
    'form_params' => [
        'image' => $image,
    ]
])->upload($image);
```

### Quick Started

You can use methods to get what you want informations.

```php
$image = Imgur::upload($file);

// Get imgur image link.
$image->link(); //"https://i.imgur.com/XN9m1nW.jpg"

// Get imgur image file size.
$image->fileszie(); //43180

// Get imgur image file type.
$image->type(); //"image/jpeg"

// Get imgur image width.
$image->width(); //480

// Get imgur image height.
$image->height(); //640

// Or you can get usual data.
$image->usual();

//[
//  'link' => "https://i.imgur.com/XN9m1nW.jpg",
//  'filesize' => 43180,
//  'type' => "image/jpeg",
//  'width' => 480,
//  'height' => 640,
//]
```

Sometimes, you need get more image size, you can call `size` to get more thumbnails.

```php
$image = Imgur::upload($file);

// Support: https://api.imgur.com/models/image

// Get small square.
$small_square = Imgur::size($image->link(), 's');

// Get big square thumbbnail.
$small_square = Imgur::size($image->link(), 'b');

// Get small small thumbbnail.
$small_square = Imgur::size($image->link(), 't');

// Get small medium thumbbnail.
$small_square = Imgur::size($image->link(), 'm');

// Get small large thumbbnail.
$small_square = Imgur::size($image->link(), 'l');

// Get small huge thumbbnail.
$small_square = Imgur::size($image->link(), 'h');
```
