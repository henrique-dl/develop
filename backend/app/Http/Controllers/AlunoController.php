<?php

namespace App\Http\Controllers;

use App\Models\Aluno;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AlunoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $alunos = Aluno::query();

        if (!empty($request->nome)) {
            $alunos->where('nome', 'like', '%' . $request->nome . '%');
        }

        if (!empty($request->email)) {
            $alunos->where('email', 'like', '%' . $request->email . '%');
        }

        $response = $alunos->get();

        return response()->json(['alunos'=>$response],200);
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
                'nome' => 'required|string|max:255',
                'email' => 'required|email|max:255|unique:alunos',
                'dt_nascimento' => 'nullable|date_format:Y-m-d'
            ]);

            if ($input->fails()) {
                return response()->json(['message' => $input->errors()]);
            }

            $aluno = (new Aluno())->fill($input->validated());
            $aluno->save();
            $aluno->refresh();

            return response()->json($aluno);
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
        return response()->json(Aluno::findOrFail($id));
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
            'nome' => 'string|max:255',
            'email' => 'email|max:255|unique:alunos',
            'dt_nascimento' => 'nullable|date_format:Y-m-d'
        ]);

        if ($input->fails()) {
            return response()->json(['message' => $input->errors()]);
        }

        Aluno::where('id', $id)
            ->update($input->validated());

        return response()->json(['message' => 'Alterações realizadas com sucesso!']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        Aluno::find($id)->delete();
        return response()->json(['message' => 'Aluno excluído com sucesso!']);
    }
}
