<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Tenis extends Model
{
    use HasFactory;

    protected $table='tenis';

    public $timestamps = false;

    public static function createSlug($name)
    {
        $slug = Str::slug($name); // Generate slug from name
        
        // Check if the generated slug already exists in the database
        $count = 1;
        while (static::where('slug', $slug)->exists()) {
            $slug = Str::slug($name . '-' . $count); // Append count to the slug
            $count++;
        }
        
        return $slug;
    }
}
