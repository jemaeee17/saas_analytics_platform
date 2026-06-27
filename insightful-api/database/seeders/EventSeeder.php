<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Event;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        echo "Seeding Events...\n";
        
        Event::factory()
            ->count(1000)
            ->create();
        
        echo "Finished creating events.\n";
    }
}
