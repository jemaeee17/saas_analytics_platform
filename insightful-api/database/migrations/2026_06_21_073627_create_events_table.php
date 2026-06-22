<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();

            $table->string('event_name');
            $table->timestamp('event_date');
            $table->string('region');
            $table->string('category');
            $table->string('status');
            $table->decimal('value', 12, 2)->default(0);
            $table->jsonb('metadata')->nullable();
            $table->timestamps();

            $table->index('event_name');
            $table->index('event_date');
            $table->index('region');
            $table->index('category');
            $table->index('status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
