<?php
	
class Sherif
{
	
	public $tbscenes; 
	public $batchs; 
	
	
	
	
    public function __construct() {
		
		$this->tbscenes = new TBSceneManager(); 
		$this->batchs  = new BatchManager(); 

    }
	
	
	
}

?>
