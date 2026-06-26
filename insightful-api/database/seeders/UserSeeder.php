<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::updateOrCreate(
            [
                'email' => 'harryjames@gmail.com',
            ],
            [
                'name' => 'Harry James Potter',
                'password' => Hash::make('harryjames17'),
            ]
        );
    }
}
