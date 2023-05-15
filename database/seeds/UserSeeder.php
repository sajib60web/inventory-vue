<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => "Admin",
            'email' => 'admin@gmail.com',
            'email_verified_at' => now(),
            'password' => bcrypt('123456'),
            'remember_token' => Str::random(10),
        ]);
    }
}
