# Laravel Batch Migration
::: warning
This package was not maintenance.
:::
<p>
<script async defer src="https://buttons.github.io/buttons.js"></script>
<a class="github-button" href="https://github.com/Mombuyish/BatchMigration" data-show-count="true" aria-label="Star Mombuyish/Laravel-BatchMigration on GitHub">Star</a>
</p>

Laravel-Imgur is super easy upload image to imgur package.

## Requirement
#### PHP >= 7
#### laravel 5.3, 5.4.

## Situation
Sometimes, your project's migration want to separate folders, but you need to add option `--path=database/migrations/someone/` or others, that's good but I want to more `automatic`. Imagine one command to do all migration or rollback, that's it.

For example, I have 2 directories in `database/migrations`:
```
  database/
     migrations/
        testing1/
            create_posts_table.php
            create_comment_table.php
        testing2/
            create_articles_table.php
            create_messages_table.php
```
And then you run `php arisan migrate:batch` it will do all migration done.

## Installation

Install via composer
``` bash
$ composer require mombuyish/laravel-batch-migrations
```

Secondly, you need to register service provider in `config/app.php`.

``` php
    'providers' => [
    ...
    /*
     * Package Service Providers...
     */
     Mombuyish\BatchMigration\BatchMigrationServiceProvider::class,
    ...
```

Thirdly, Going to `app/Console/Kernel.php`, adding console command.
``` php
protected $commands = [
        \Mombuyish\BatchMigration\Commands\BatchMigration::class,
        \Mombuyish\BatchMigration\Commands\RollbackBatchedMigration::class
    ];
```

Fourthly, publish config.
``` bash
$ php artisan vendor:publish --provider="Mombuyish\BatchMigration\BatchMigrationServiceProvider"
```

You can do configure on config `batch-migration.php`
``` php
return [

    /**
     * Accessible paths.
     */
    'path' => 'database/migrations',

];
```
Finally, you can checkout `$ php artisan` and you can see 2 commands.
```
  migrate:batch           Run the database migrations (including depth dictionaries)
  migrate:batch-rollback  Rollback the last database migration (including depth directories)
```
* When you run php artisan `migrate:batch`, it will do all migrate in path.
* When you run php artisan `migrate:batch-rollback`, it will rollback your migrate:batch done.

Supported `--force`

## Notice
When you run `rollback`, maybe it got errors, For know, you need specific directory. `php artisan migrate:rollback --path=database/migrations/someone`.