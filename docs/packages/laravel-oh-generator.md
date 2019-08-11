# Laravel Oh Generators

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path fill="#f4645f" d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z"/></svg>
<p>
<a href="https://travis-ci.org/Mombuyish/Laravel-Oh-Generators"><img src="https://travis-ci.org/Mombuyish/Laravel-Oh-Generators.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/yish/generators"><img src="https://poser.pugx.org/yish/generators/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/yish/generators"><img src="https://poser.pugx.org/yish/generators/v/stable.svg" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/yish/generators"><img src="https://poser.pugx.org/yish/generators/license.svg" alt="License"></a>
<a href="https://packagist.org/packages/yish/generators"><img src="https://poser.pugx.org/yish/generators/v/unstable.svg" alt="License"></a>
</p>

This package extends the core file generators that are included with Laravel 5 / 6

## Requirement
#### PHP >= 7
#### Laravel >= 5
- 5.4 before using branch `1.1.x`
- 5.5 ~ 5.7 using branch `2.0.x`
- 5.8 or later using branch `2.1.x`

## Installation

Install by composer
``` bash
$ composer require yish/generators
```

* 5.4 before using branch `1.1.x`
* 5.5 ~ 5.7 using branch `2.0.x`
* 5.8 or later using branch `2.1.x`

Registing Service Provider

If you are using laravel 5.5 or later, you can use auto discover, you don't need put in service provider to `app.php`.

``` php
<?php
//app.php
'providers' => [
    \Yish\Generators\GeneratorsServiceProvider::class,
],
```

## Generating Service
It can be generating class service.
``` bash
$ php artisan make:service UserService
```
``` php
<?php
namespace App\Services;

use Yish\Generators\Foundation\Service\Service;

class UserService
{
    protected $repository;

    //
}
```
Also, it supports abstract service.
You should inject your repository or model and then use it.
``` php
all()
create($attributes)
first()
firstBy($column, $value)
find($id)
findBy($column, $value)
get()
getBy($column, $value)
update($id, $attributes)
updateBy($column, $value, $attributes)
destroy($id)
destroyBy($column, $value)
paginate($page = 12)
paginateBy($column, $value, $page = 12)
```

## Generating Repository
It can be generating class repository.
``` bash
$ php artisan make:repository UserRepository
```
``` php
<?php
namespace App\Repositories;

use Yish\Generators\Foundation\Repository\Repository;

class UserRepository
{
    protected $model;

    //
}
```
Also, it supports abstract repository.
You should inject your model and then use it.
``` php
all($columns = ['*'])
create($attributes)
update($id, array $attributes, array $options = [])
updateBy($column, $value, array $attributes = [], array $options = [])
first($columns = ['*'])
firstBy($column, $value, $columns = ['*'])
find($id, $columns = ['*'])
findBy($column, $value, $columns = ['*'])
get($columns = ['*'])
getBy($column, $value, $columns = ['*'])
destroy($ids)
destroyBy($column, $value)
paginate($perPage = null, $columns = ['*'], $pageName = 'page', $page = null)
paginateBy($column, $value, $perPage = null, $columns = ['*'], $pageName = 'page', $page = null)
```

## Generating Transformer
It can be generating class transformer.
``` bash
$ php artisan make:transformer UserTransformer
```
### Support
#### TransformContract
``` php
<?php
namespace Yish\Generators\Foundation\Transform;
interface TransformContract
{
    public function transform($attributes);
}
```
#### Helper / transformer()
``` php
// $instance => Transformer class.
// $attributes => Need transform data, maybe array or collection etc.
transformer(UserTransformer::class, $data);
```

## Generating Formatter
It can be generating class formatter.
``` bash
$ php artisan make:formatter UserFormatter
```
``` php
<?php

namespace App\Formatters;

use Illuminate\Http\Request;
use Yish\Generators\Foundation\Format\FormatContract;
use Yish\Generators\Foundation\Format\Statusable;

class PostFormatter implements FormatContract
{
    public function format(Request $request, $items = [], $message = '', $status = 200)
    {
        //
    }
}
```
### Support
#### FormatContract
``` php
<?php
namespace Yish\Generators\Foundation\Format;
use Illuminate\Http\Request;
interface FormatContract
{
    public function format(Request $request, $items = []);
}
```
#### Statusable
You can use `Statusable` trait to help you faster building formalize format.
Set property `$status = true`, you can get success format. `$status` must be boolean, if not you will get exception.
``` php
<?php

namespace App\Formatters;

use Illuminate\Http\Request;
use Yish\Generators\Foundation\Format\FormatContract;
use Yish\Generators\Foundation\Format\Statusable;

class PostFormatter implements FormatContract
{
    use Statusable;

    protected $status = true;
}
```
If not, you can set `false` to get failed format.
``` php
<?php

namespace App\Formatters;

use Illuminate\Http\Request;
use Yish\Generators\Foundation\Format\FormatContract;
use Yish\Generators\Foundation\Format\Statusable;

class PostFormatter implements FormatContract
{
    use Statusable;
    
    protected $status = false;
}
```
If you need customize message, you can do:
``` php
<?php

namespace App\Formatters;

use Illuminate\Http\Request;
use Yish\Generators\Foundation\Format\FormatContract;
use Yish\Generators\Foundation\Format\Statusable;

class PostFormatter implements FormatContract
{
    use Statusable;
    
    protected $status = false;
    
    public function message()
    {
        return 'hello world'.
    }
}
```
Or you can customize status code, you can do:
``` php
<?php

namespace App\Formatters;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Yish\Generators\Foundation\Format\FormatContract;
use Yish\Generators\Foundation\Format\Statusable;
use Yish\Generators\Foundation\Format\Formatter;

class Success extends Formatter implements FormatContract
{
   use Statusable;

    protected $status = false;

    public function code()
    {
        return Response::HTTP_ACCEPTED;
    }
}
```
If you need to customize what you need, check out `Yish\Generators\Foundation\Format\Statusable` get more detail.

#### Helper / formatter()
``` php
// $request => Must instance of `Illuminate\Http\Request`.
// $instance => Formatter class.
// $items => data.
formatter(request(), UserFormatter::class, $data);
```

## Generating Presenter
It can be generating class presenter.
``` bash
$ php artisan make:presenter UserPresenter
```
``` php
<?php

namespace App\Presenters;

class UserPresenter
{
    //
}
```

## Generating Foundation
It can be generating class foundation.
``` bash
$ php artisan make:foundation Taggable
```
``` php
<?php

namespace App\Foundation;

class Taggable
{
  //
}
```