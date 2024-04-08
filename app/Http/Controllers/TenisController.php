<?php

namespace App\Http\Controllers;

use App\Models\Tenis;

use Illuminate\Http\Request;
use Inertia\Inertia;


class TenisController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Tenis/Index');
    }

    /**
     * Show the form for creating a new resource.
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Tenis/Create');
    }

    /**
     * Store a newly created resource in storage.
     * 
     * @param \Illuminate\Html\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $tenis = new Tenis();   
        $tenis->talla = $request->talla;
        $tenis->color = $request->color;
        $tenis->u_disponible = $request->stock;
        $tenis->modelo = $request->modelo;
        $tenis->precio = $request->precio;
        $tenis->marca_idmarca = $request->marca;
        $tenis->estilo_idestilo = $request->estilo;

        $tenis->slug = Tenis::createSlug($request->modelo);

        $tenis->save();

        return $this->index();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
