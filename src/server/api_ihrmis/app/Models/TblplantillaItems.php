<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TblplantillaItems extends Model
{
    use HasFactory;

    protected $primaryKey = 'itm_id';
    protected $table = 'tblplantilla_items';
    
    protected $fillable=[
        'itm_regular',
        'itm_no',
        'itm_pos_id',
        'itm_ofc_id',
        'itm_status', 
        'itm_basis',
        'itm_category',
        'itm_level',
        'itm_function',
        'itm_creation',
        'itm_source',
        'itm_supv1_itm_id',
        'itm_supv2_itm_id',
        'itm_state',
    ];

    public $timestamps = false;

    public function tbloffices(){
        return $this->hasOne(Tbloffices::class, 'ofc_id', 'itm_ofc_id');
    }

    public function tblpositions(){
        return $this->hasOne(Tblpositions::class, 'pos_id', 'itm_pos_id');
    }
    
    public function tbljvs(){
        return $this->belongsTo(Tbljvs::class, 'itm_id' ,'jvs_itm_id');
    }
}