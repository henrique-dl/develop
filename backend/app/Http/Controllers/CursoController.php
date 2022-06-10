<?php

namespace App\Http\Controllers;

use App\Models\Curso;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CursoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $curso = Curso::all();
        return response()->json(['curso'=>$curso],200);
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
            $input = Validator::make($request->all(), [
                'titulo' => 'required|string|max:255',
                'descricao' => 'required|max:255|unique:cursos',
            ]);

            if ($input->fails()) {
                return response()->json(['message' => $input->errors()]);
            }

            $curso = (new Curso())->fill($input->validated());
            $curso->save();
            $curso->refresh();

            return response()->json($curso);
        } catch (\Exception $exception) {
            return response()->json(['error'=>$exception]);
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
        return response()->json(Curso::find($id));
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
            'titulo' => 'string|max:255|unique:cursos',
            'descricao' => 'string|max:255',
            'data_nascimento' => 'nullable|date_format:Y-m-d'
        ]);

        if ($input->fails()) {
            return response()->json(['message' => $input->errors()]);
        }

        Curso::where('id', $id)
            ->update($input->validated());

        return response()->json(['message' => 'Alterações de curso realizadas com sucesso!']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        Curso::find($id)->delete();
        return response()->json(['message' => 'Curso excluído com sucesso!']);
    }
}
