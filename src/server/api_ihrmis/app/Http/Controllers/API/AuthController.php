<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\CommonResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }
        $user_level = 4;
        if ($request->user_level != null) {
            $user_level = $request->user_level;
        }

        $user = User::create([
            'username' => $request->username,
            'email' => $request->email,
            'name' => $request->name,
            'user_level' => $user_level,
            'password' => Hash::make($request->password)
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json(['data' => $user, 'access_token' => $token, 'token_type' => 'Bearer']);
    }

    public function login(Request $request)
    {

        try {
            $authUser = User::where('username', $request['username'])->firstOrFail();
            $request->merge(['email' => $authUser->email]);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'Username doesn\'t exist'], 401);
        }


        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json(['message' => 'Invalid Credentials'], 401);
        }

        $user = User::where('email', $request['email'])->firstOrFail();

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'user' => $authUser->name,
            'user_id' => $authUser->user_id,
            'user_level' => $authUser->user_level,
            'access_token' => $token,
            'token_type' => 'Bearer',
        ], 200);
    }

    public function logout()
    {
        Auth::user()->tokens->each(function ($token, $key) {
            $token->delete();
        });

        return response()->json([
            'message' => 'You have successfully logged out and the token was successfully deleted'
        ], 200);
    }

    public function getUsers()
    {
        $query = User::get();
        return CommonResource::collection($query);
    }

    public function updateUser(Request $request)
    {
        return User::updateOrCreate(
            [
                'user_id' => $request->user_id,
            ],
            [
                'username' => $request->username,
                'email' => $request->email,
                'name' => $request->name,
                'user_level' => $request->user_level,
                'password' => Hash::make($request->password),
            ]
        );
    }
}
