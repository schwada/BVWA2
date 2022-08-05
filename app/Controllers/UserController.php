<?php
namespace App\Controllers;

use App\Models\User;
use Slim\Psr7\Request as Request; 
use Psr\Http\Message\ResponseInterface as Response;
use Illuminate\Container\Container;
use Ramsey\Uuid\Uuid;

// TODO remove SLIMREQUEST
class UserController {

	public function __construct(Container $container) {
		// dump($container->get("settings"));
	}
		
	public function index(Request $request, Response $response) {
		dump(User::all());
		$body = $response->getBody();
		$body->write('Hello');
		return $response;
	}

	public function register(Request $request, Response $response) {
		// TODO validate input
		$data = $request->getParsedBody();

		User::create([
			'uuid' => Uuid::uuid4(),
			'email' => $data['email'],
			'first_name' => $data['first_name'],
			'last_name' => $data['last_name'],
			'display' => $data['display'], // generate
			'password' => password_hash($data['password'], PASSWORD_BCRYPT) // TODO FIX
		]);

		$body = $response->getBody();
		$body->write('Saved a user');
		return $response;
	}

}