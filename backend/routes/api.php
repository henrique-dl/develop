<?php

use App\Http\Controllers\CursoController;
use App\Http\Controllers\AlunoController;
use App\Http\Controllers\MatriculaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::controller(\App\Http\Controllers\AlunoController::class)->group(function (){
    Route::get('/alunos','index');
    Route::get('/alunos/{id}','show');
    Route::post('/alunos', 'store');
    Route::put('/alunos/{id}', 'update');
    Route::delete('/alunos/{id}', 'destroy');
});

Route::controller(\App\Http\Controllers\CursoController::class)->group(function (){
    Route::get('/cursos','index');
    Route::get('/cursos/{id}','show');
    Route::post('/cursos', 'store');
    Route::put('/cursos/{id}', 'update');
    Route::delete('/cursos/{id}', 'destroy');
});

Route::controller(\App\Http\Controllers\MatriculaController::class)->group(function (){
    Route::get('/matriculas/','index');
    Route::get('/matriculas/{id}','show');
    Route::post('/matriculas', 'store');
    Route::put('/matriculas/{id}', 'update');
    Route::delete('/matriculas/{id}', 'destroy');
});
