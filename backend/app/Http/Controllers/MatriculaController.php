<?php

namespace App\Http\Controllers;

use App\Models\Matricula;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use mysql_xdevapi\Exception;

class MatriculaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $matriculas = Matricula::query();

        if (!empty($request->id)) {
            $matriculas->where('id', $request->id);
        }

        if (!empty($request->id_curso)) {
            $matriculas->where('id', $request->id);
        }

        $matriculas->with(['alunos', 'cursos']);

        $response = $matriculas->get();

        return response()->json($response);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        try {
            $result = Matricula::where([
                'id_alunos' => $request->input('id_alunos'),
                'id_cursos' => $request->input('id_cursos')
            ])->get();

            if (count($result) != 0){
                return response()->json(["Error"=> "Este Usuário já está matriculado no Curso"]);
            }

            $matricula = new Matricula;
            $matricula->id_alunos = $request->input('id_alunos');
            $matricula->id_cursos = $request->input('id_cursos');

            if( $matricula->save() ){
                return response()->json([$matricula],200);
            }
        } catch (\Exception $exception) {
            return response()->json($exception);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        return response()->json(Matricula::with(['alunos', 'cursos'])->findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $input = Validator::make($request->all(), [
            'id' => 'int',
        ]);

        if ($input->fails()) {
            return response()->json(['message' => $input->errors()]);
        }

        Matricula::where('id', $id)
            ->update($input->validated());

        return response()->json(['message' => 'Matrícula alterada com sucesso!']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        Matricula::find($id)->delete();
        return response()->json(['message' => 'Matrícula excluída com sucesso!']);
    }
}
