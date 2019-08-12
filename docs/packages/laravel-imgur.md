# Laravel Imgur

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path fill="#f4645f" d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>

<p>
<script async defer src="https://buttons.github.io/buttons.js"></script>
<a class="github-button" href="https://github.com/Mombuyish/Laravel-Imgur" data-show-count="true" aria-label="Star Mombuyish/Laravel-Imgur on GitHub">Star</a>
<a href="https://packagist.org/packages/yish/imgur"><img src="https://poser.pugx.org/yish/imgur/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/yish/imgur"><img src="https://poser.pugx.org/yish/imgur/v/stable.svg" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/yish/imgur"><img src="https://poser.pugx.org/yish/imgur/license.svg" alt="License"></a>
<a href="https://packagist.org/packages/yish/imgur"><img src="https://poser.pugx.org/yish/imgur/v/unstable.svg" alt="License"></a>
</p>

Laravel-Imgur is super easy upload image to imgur package.

## Requirement
#### laravel `5.*`, `6.*`

## Installation

Install via composer
``` bash
$ composer require yish/imgur
```

If you use 5.5 or later, you don’t need to add provider into app.php, just use discovery autoloading.
``` php
Yish\Imgur\UploadServiceProvider::class,
```

### Facade binding
app.php
``` php
'Imgur' => Yish\Imgur\Facades\Upload::class,
```

### Publish config
``` bash
$ php artisan vendor:publish
```

## Usage
``` php
Imgur::upload($args);
```

Arguments can be a image link or file, for example, you can pass a https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png or use file upload *MUST* instance of `Illuminate\Http\UploadedFile` .

### Customize
If you want to customize your headers or form params, you can do belong:

``` php
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

## Quick Starter
You can use methods to get what you want informations.

``` php
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
``` php

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