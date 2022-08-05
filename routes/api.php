<?php

use App\Middleware\AuthenticationMiddleware;
use Slim\Routing\RouteCollectorProxy as Group;

$app->get('/', [App\Controllers\HomeController::class, 'index']);

$app->group('/auth', function (Group $group) {
    $group->post('/login', [App\Controllers\AuthenticationController::class, 'login']);
    $group->post('/logout', [App\Controllers\AuthenticationController::class, 'logout']);
    $group->get('/me', [App\Controllers\AuthenticationController::class, 'get'])->add(AuthenticationMiddleware::class);
})->add(new App\Middleware\ExampleMiddleware());

$app->group('/users', function (Group $group) {
    $group->get('', [App\Controllers\UserController::class, 'index']);
    $group->post('', [App\Controllers\UserController::class, 'register']);
});

// ->add(new AuthMiddleware($container->get(AuthenticationInterface::class));

