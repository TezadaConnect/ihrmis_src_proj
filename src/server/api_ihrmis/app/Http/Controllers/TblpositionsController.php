<?php

namespace App\Http\Controllers;

use App\Http\Resources\TblofficesResource;
use App\Http\Resources\TblpositionsResource;
use App\Models\Tblpositions;
use Illuminate\Http\Request;

class TblpositionsController extends Controller
{
    public function index(){
        return TblpositionsResource::collection(Tblpositions::all());
    }

    public function store(Request $request)
    {
        return Tblpositions::create([
            'pos_title' => $request->pos_title,
            'pos_short_name' => $request->pos_short_name,
            'pos_salary_grade' => $request->pos_salary_grade,
            'pos_category' => $request->pos_category,
        ]);
    }
    
    public function show($id){
        return Tblpositions::findOrFail($id);
    }
}
