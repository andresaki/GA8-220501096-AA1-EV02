<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use Illuminate\Http\Request;

class ClienteController extends Controller
{
        public function index()
    {
        return Cliente::all();
    }

    public function store(Request $request)
    {
        $cliente = Cliente::create($request->all());

        return response()->json($cliente, 201);
    }

    public function show(string $id)
    {
        return Cliente::findOrFail( $id );
    }


    public function update(Request $request, string $id)
    {
        $cliente = Cliente::findOrFail($id);

        $cliente->update($request->all());
        return response()->json($cliente,200);
    }


    public function destroy(string $id)
    {
        Cliente::destroy($id);
        return response()->json(null,204);
    }
}
