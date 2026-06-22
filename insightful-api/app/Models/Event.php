<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;
    protected $table = 'events';

    protected $fillable = [
        'event_name',
        'event_date',
        'region',
        'category',
        'status',
        'value',
        'metadata'
    ];

    protected $casts = [
        'event_date' => 'datetime',
        'metadata' => 'array',
    ];
}
