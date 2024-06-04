<?php

use App\Http\Controllers\ClienteController;
use App\Http\Controllers\PedidoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::apiResource("pedidos", PedidoController::class);
Route::apiResource("clientes", ClienteController::class);
