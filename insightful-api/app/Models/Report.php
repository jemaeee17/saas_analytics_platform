<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
    protected $table = 'reports';

    protected $fillable = [
        'user_id',
        'report_name',
        'report_type',
        'file_path',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
