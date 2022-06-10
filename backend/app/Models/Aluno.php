<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Aluno extends Model
{
    use HasFactory;

    protected $fillable = [
        'nome','email','dt_nascimento'
    ];

    protected $dates = ['dt_nascimento'];

    static $rules = [
        'nome' => 'required',
        'email' => 'required',
    ];
}
