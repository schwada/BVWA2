<?php
namespace App\Controllers;
use Psr\Http\Message\RequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use Fig\Http\Message\StatusCodeInterface as Status;
use Illuminate\Container\Container;
use App\Models\Product;

class ProductController {

    public function __construct(Container $container) {
      // dump($container->get("settings"));
    }

	public function index(Request $request, Response $response) {
        $response->getBody()->write(json_encode(Product::all()));

        return $response->withHeader('Content-Type', 'application/json')
        ->withStatus(Status::STATUS_OK);
	}

}