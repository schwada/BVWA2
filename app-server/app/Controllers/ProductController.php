<?php
namespace App\Controllers;

use App\Auth\AuthenticationInterface;
use Psr\Http\Message\RequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use Fig\Http\Message\StatusCodeInterface as Status;
use Illuminate\Container\Container;
use App\Models\Product;

class ProductController {

		private AuthenticationInterface $auth;

		public function __construct(Container $container) {
			 // dump($container->get("settings"));
			$this->auth = $container->get(AuthenticationInterface::class);
		}


		public function index(Request $request, Response $response) {
			$response->getBody()->write(json_encode(Product::all()));
			return $response->withHeader('Content-Type', 'application/json')
			->withStatus(Status::STATUS_OK);
		}

		public function read(Request $request, Response $response, array $args) {
			$response->getBody()->write(json_encode(Product::where('uuid', $args['id'])->with('user')->firstOrFail()));

			return $response->withHeader('Content-Type', 'application/json')
			->withStatus(Status::STATUS_OK);
		}

		public function userIndex(Request $request, Response $response) {
			$user = $this->auth->getAuthenticated();
			$response->getBody()->write(json_encode($user->products));
			return $response->withHeader('Content-Type', 'application/json')
			->withStatus(Status::STATUS_OK);
		}

}