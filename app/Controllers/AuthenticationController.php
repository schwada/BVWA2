<?php
namespace App\Controllers;

use App\Auth\AuthenticationInterface;
use App\Exceptions\ValidationException;
use Fig\Http\Message\StatusCodeInterface as Status;
use Illuminate\Container\Container;
use Slim\Psr7\Request as SlimRequest;
use Psr\Http\Message\ResponseInterface as Response;

class AuthenticationController {

    private AuthenticationInterface $auth;

    public function __construct(Container $container) {
        $this->auth = $container->get(AuthenticationInterface::class);
    }

    public function get(SlimRequest $request, Response $response): Response {
        $user = $this->auth->getAuthenticated();
        $response->getBody()->write(json_encode($user));

        return $response->withHeader('Content-Type', 'application/json')
        ->withStatus(Status::STATUS_OK);
    }
    

    public function login(SlimRequest $request, Response $response): Response {
        $data = $request->getParsedBody();

        try {
            $attempt = $this->auth->attempt($data['email'], $data['password'], $request);
        } catch(ValidationException $e) {
            $response->getBody()->write($e->getMessage());
            return $response->withHeader('Content-Type', 'application/json')
            ->withStatus(Status::STATUS_UNPROCESSABLE_ENTITY);
        }

        $response->getBody()->write($attempt);

        return $response
        ->withHeader('Content-Type', 'application/json')
        ->withStatus(Status::STATUS_OK);
    }

    public function logout(SlimRequest $request, Response $response): Response {
        $body = $response->getBody();
        $body->write('Unimplemented');
        return $response;
    }

}