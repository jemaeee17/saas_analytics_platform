<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class ProfileController extends Controller
{
    public function update(Request $request)
    {
        $user = $request->user();

        $validated = $request->validate([
            'name' => 'required|string|max:255',

            'email' => [
                'required',
                'email',
                'unique:users,email,' . $user->id,
            ],

            'photo' => 'nullable|image|max:10240',
        ]);

        if ($request->hasFile('photo')) {

            $path = $request
                ->file('photo')
                ->store('profiles', 'public');

            $validated['profile_photo'] = $path;
        }

        $user->update([
            'name' => $validated['name'],

            'email' => $validated['email'],

            'profile_photo' =>
                $validated['profile_photo']
                ?? $user->profile_photo,
        ]);

        return response()->json([
            'message' => 'Profile updated',
            'user' => $user->fresh(),
        ]);
    }

    public function updatePassword(Request $request)
    {
        $user = $request->user();

        $validated = $request->validate([
            'current_password' =>
                'required',
            'password' =>
                'required|min:8|confirmed',
        ]);

        if (
            !Hash::check(
                $validated['current_password'],
                $user->password
            )
        ) {
            return response()->json([
                'message' =>
                    'Current password is incorrect',
            ], 422);
        }

        $user->update([
            'password' =>
                Hash::make(
                    $validated['password']
                ),
        ]);

        return response()->json([
            'message' =>
                'Password updated successfully',
        ]);
    }
}
