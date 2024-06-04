<?php

namespace App\Http\Controllers;

use App\Models\Pedido;
use Illuminate\Http\Request;

class PedidoController extends Controller
{
    public function index()
    {
        // Obtiene todos los pedidos junto con la información de los clientes relacionados
        return Pedido::with('cliente')->get();
    }

    public function store(Request $request)
    {
        $pedido = Pedido::create($request->all());

        return response()->json($pedido, 201);
    }

    public function show(string $id)
    {
        return Pedido::with('cliente')->findOrFail( $id );
    }


    public function update(Request $request, string $id)
    {
        $pedido = Pedido::findOrFail($id);

        $pedido->update($request->all());
        return response()->json($pedido,200);
    }


    public function destroy(string $id)
    {
        Pedido::destroy($id);
        return response()->json(null,204);
    }
}
