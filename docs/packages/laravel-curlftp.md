# Laravel curlftp

<p>
<script async defer src="https://buttons.github.io/buttons.js"></script>
<a class="github-button" href="https://github.com/Mombuyish/laravel-curlftp" data-show-count="true" aria-label="Star Mombuyish/laravel-curlftp on GitHub">Star</a>
<a href="https://packagist.org/packages/yish/laravel-curlftp"><img src="https://img.shields.io/packagist/dt/yish/laravel-curlftp.svg?style=flat-square" alt="Total Downloads"></a>
<a href="https://travis-ci.org/Mombuyish/laravel-curlftp"><img src="https://img.shields.io/travis/Mombuyish/laravel-curlftp/master.svg?style=flat-square" alt="Build Status"></a>
<a href="https://packagist.org/packages/yish/laravel-curlftp"><img src="https://img.shields.io/packagist/v/yish/laravel-curlftp.svg?style=flat-square" alt="Latest Stable Version"></a>
</p>

## Introduction

This package is simple to provide `vladimir-yuldashev/flysystem-curlftp` facade(wrapper) with laravel. 

## Requirement

| Version | branch |
| ------- | ------ |
| 5.8 ~ 8.x     | 1.0.x  |

## Installation

``` bash
$ composer require yish/laravel-curlftp
```

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