<?php

namespace Database\Factories;

use App\Models\Event;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Event>
 */
class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'event_name' => fake()->randomElement([
                'page_view',
                'signup',
                'purchase',
                'report_generated'
            ]),

            'event_date' => fake()->dateTimeBetween('-90 days', 'now'),

            'region' => fake()->randomElement([
                'Asia',
                'Europe',
                'North America',
                'South America'
            ]),

            'category' => fake()->randomElement([
                'Sales',
                'Marketing',
                'Product',
                'Support'
            ]),

            'status' => fake()->randomElement([
                'Completed',
                'Completed',
                'Completed',
                'Completed',
                'Pending',
                'Pending',
                'Failed',
            ]),

            'value' => fake()->randomFloat(2, 10, 1000),

            'metadata' => [
                'source' => fake()->randomElement(['web', 'mobile']),
            ],
        ];
    }
}
