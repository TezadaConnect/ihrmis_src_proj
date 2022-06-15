<?php

namespace App\Models;

use Mpdf\Mpdf as MPDF;

class TblplantillaVacantPositions extends TblplantillaItems
{

  /**
   * getVacantPositions
   * Todo get vacant positions by 
   */
  public function getVacantPositions($type) {

    $item_query = TblplantillaItems::with('tbloffices', 'tblpositions')->where('itm_is_vacant', $type)->get();
    return $item_query;

  }
    
    /**
     * generatePdf
     * Todo this function will generate report in PDF form
     */
    public function generatePdf()
    {
    
		date_default_timezone_set('Asia/Manila'); //define local time
		
		$data = $this->getVacantPositions(1);

		$new_data = [];

		$new_data['vacantpositions'] = $data;
		
		$date = date('m/d/Y');

		$pdf = new MPDF();
		$pdf->writeHTML(view('vacantPositionsPdf',$new_data,[], [
		'title'				=> 	'Notice of Vacancy',
		'margin_left'     	=> 10,
		'margin_right'      => 10,
		'margin_top'        => 10,
		'margin_bottom'     => 10,
		'orientation'       => 'L',
		'format' => 'A4'
		]));
  
		return $pdf->output('DOST-CO Vacant Position_'.$date.'.pdf',"I");
    }

}