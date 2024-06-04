<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pedidos', function (Blueprint $table) {

            $table->engine = 'InnoDB';

            $table->bigIncrements('id');
            $table->bigInteger('cliente_id')->unsigned();
            $table->string('nombre');
            $table->string('descripcion');
            $table->string('especificacionesCliente');
            $table->boolean('estadoProduccion');
            $table->boolean('estadoEntrega');
            $table->boolean('pagado');
            $table->integer('costoTotal');
            $table->date('fechaEntregaEstimada');
            $table->timestamps();

            $table->foreign('cliente_id')->references('id')->on('clientes')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {

    }
};
