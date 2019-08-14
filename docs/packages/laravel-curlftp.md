# Laravel curlftp

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path fill="#f4645f" d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>

<p>
<script async defer src="https://buttons.github.io/buttons.js"></script>
<a class="github-button" href="https://github.com/Mombuyish/laravel-curlftp" data-show-count="true" aria-label="Star Mombuyish/laravel-curlftp on GitHub">Star</a>
<a href="https://packagist.org/packages/yish/laravel-curlftp"><img src="https://img.shields.io/packagist/dt/yish/laravel-curlftp.svg?style=flat-square" alt="Total Downloads"></a>
<a href="https://travis-ci.org/Mombuyish/laravel-curlftp"><img src="https://img.shields.io/travis/Mombuyish/laravel-curlftp/master.svg?style=flat-square" alt="Build Status"></a>
<a href="https://packagist.org/packages/yish/laravel-curlftp"><img src="https://img.shields.io/packagist/v/yish/laravel-curlftp.svg?style=flat-square" alt="Latest Stable Version"></a>
</p>

This package is simple to provide `vladimir-yuldashev/flysystem-curlftp` facade(wrapper) with laravel. 

## Installation

You can install the package via composer:

```bash
composer require yish/laravel-curlftp
```

## Requirement

Laravel 5.8 or 6.*

## Usage
In your `config/filesystems.php`, adding driver to support.
``` php
'curlftp' => [
    'driver'   => 'curl-ftp',
    'host' => 'ftp.example.com',
    'username' => 'username',
    'password' => 'password',
    
    /** optional config settings */
    'port' => 21,
    'root' => '/path/to/root',
    'utf8' => true,
    'ssl' => true,
    'timeout' => 90,		// connect timeout
    'sslVerifyPeer' => 0, // using 0 is insecure, use it only if you know what you're doing
    'sslVerifyHost' => 0, // using 0 is insecure, use it only if you know what you're doing
    
    /** proxy settings */
    'proxyHost' => 'proxy-server.example.com',
    'proxyPort' => 80,
    'proxyUsername' => 'proxyuser',
    'proxyPassword' => 'proxypassword',
],
```