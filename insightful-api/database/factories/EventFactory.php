<?php

namespace Database\Factories;

use App\Models\Event;
use Illuminate\Database\Eloquent\Factories\Factory;

class EventFactory extends Factory
{
    public function definition(): array
    {
        return [
            'event_name' => $this->faker->randomElement([
                'page_view',
                'signup',
                'purchase',
                'report_generated'
            ]),

            'event_date' => $this->faker->dateTimeBetween('-90 days', 'now'),

            'region' => $this->faker->randomElement([
                'Asia',
                'Europe',
                'North America',
                'South America'
            ]),

            'category' => $this->faker->randomElement([
                'Sales',
                'Marketing',
                'Product',
                'Support'
            ]),

            'status' => $this->faker->randomElement([
                'Completed',
                'Completed',
                'Completed',
                'Completed',
                'Pending',
                'Pending',
                'Failed',
            ]),

            'value' => $this->faker->randomFloat(2, 10, 1000),

            'metadata' => [
                'source' => $this->faker->randomElement([
                    'web',
                    'mobile',
                ]),
            ],
        ];
    }
}