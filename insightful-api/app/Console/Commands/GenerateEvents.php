<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Event;

class GenerateEvents extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'events:generate {count=1000}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate events for the application';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $count = $this->argument('count');
        Event::factory()->count($count)->create();
        $this->info("{$count} events generated successfully!");
    }
}
