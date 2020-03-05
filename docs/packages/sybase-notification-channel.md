# Laravel Sybase Notification Channel

<p>
<script async defer src="https://buttons.github.io/buttons.js"></script>
<a class="github-button" href="https://github.com/Mombuyish/sybase-notification-channel" data-show-count="true" aria-label="Star Laravel Sybase Notification Channel on GitHub">Star</a>
<a href="https://packagist.org/packages/yish/sybase-notification-channel"><img src="https://img.shields.io/packagist/dt/yish/sybase-notification-channel.svg?style=flat-square" alt="Total Downloads"></a>
<a href="https://travis-ci.org/Mombuyish/sybase-notification-channel"><img src="https://img.shields.io/travis/Mombuyish/sybase-notification-channel/master.svg?style=flat-square" alt="Build Status"></a>
<a href="https://packagist.org/packages/yish/sybase-notification-channel"><img src="https://img.shields.io/packagist/v/yish/sybase-notification-channel.svg?style=flat-square" alt="Latest Stable Version"></a>
</p>

## Introduction

Sybase 365 notification channel with Laravel.

## Requirement

| Version | branch |
| ------- | ------ |
| 5.8 ~ 7.x    | 1.x  |

## Installation

``` bash
$ composer require yish/sybase-notification-channel
```

## Usage
### Creating notification:

``` bash
$ php artisan make:notification SendMessage
```

### Notify the service and send request
#### Basic

``` php
Notification::route('sybase', $phone)->notify(new \App\Notifications\SendMessage);
```

Or you can construct the properties:
``` php
Notification::route('sybase', $phone)
->notify(new \App\Notifications\SendMessage(
    "Hi, here is yours",
    "this is content."
));
```

Next, navigate to `App\Notifications\SendMessage.php`, set driver:
``` php
use Yish\Notifications\Messages\SybaseMessage;
class SendMessage extends Notification
{
    use Queueable;

    public $subject;

    public $content;

    public function __construct($subject, $content)
    {
        $this->subject = $subject;
        $this->content = $content;
    }

    public function via($notifiable)
    {
        return ['sybase'];
    }
    
    public function toSybase($notifiable)
    {
        return (new SybaseMessage)
                ->subject($this->subject)
                ->content($this->content);
    }
    ....
```

Finally, you must be set service account and password, add a few configuration options to your `config/services.php`
``` php
'sybase' => [
    'account' => env('SYBASE_ACCOUNT'),
    'password' => env('SYBASE_PASSWORD'),
    'endpoint' => env('SYBASE_ENDPOINT'),
],
```

### Advanced
In some cases, you want to customize the recipient or automatically sending: 
``` php
<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Guest extends Authenticatable
{
    use Notifiable; 
    
    public function routeNotificationForSybase($notification)
    {
        return $this->mobile;
    }
}
```

Finally, you can use:
``` php
$guest->notify(new SendMessage('Hello', 'world'));
```