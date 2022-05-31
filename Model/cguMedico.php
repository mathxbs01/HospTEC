<?php
private class cguMedico {

    private $id;
    private $cpfId;
    private $crm;
    private $ctps;
    private $tipoMedicoId;

//ID

    public function setId($id)
    {
        $this->id = $id;
    }
    public function getId()
    {
        return $this->id;
    }

//CPF

    public function setCpfId($cpfId)
    {
        $this->cpfId = $cpfId;
    }
    public function getCpfId()
    {
        return $this->cpfId;
    }

//CRM

    public function setCrm($crm)
    {
        $this->crm = $crm;
    }
    public function getCrm()
    {
        return $this->crm;
    }

//CTPS

    public function setCTPS($ctps)
    {
        $this->ctps = $ctps;
    }
    public function getCTPS()
    {
        return $this->ctps;
    }

//ID Tipo Médico

    public function setTipoMedicoId($tipoMedicoId)
    {
        $this->tipoMedicoId = $tipoMedicoId;
    }
    public function getTipoMedicoId()
    {
        return $this->tipoMedicoId;
    }

    public function inserirBD()
    {
        require_once 'ConexaoBD.php';
    
        $con = new ConexaoBD();
        $conn = $con->conectar();
        if ($conn->connect_error){
            die("Connection failed: " . $conn->connect_error);
        }
        $sql = "INSERT INTO cgu.medico (CPF_ID, CNS, CTPS, TipoMedico_ID)
        VALUES ('".$this->cpfId."', '".$this->cns."', '".$this->ctps."', '".$this->tipoMedicoId."')";
    
        if ($conn->query($sql) === TRUE){
            $this->id = mysql_insert_id($conn)
            $conn->close();
            return TRUE;
            
        }else{
            $conn->close();
            return FALSE;
        }
    }
    public function excluirBD()
    {
        require_once 'ConexaoBD.php';
    
        $con = new ConexaoBD();
        $conn = $con->conectar();
        if ($conn->connect_error){
            die("Connection failed: " . $conn->connect_error);
        }
        $sql = "DELETE*FROM cgu.medico WHERE ID_Medico = '".$id ."';";
        if ($conn->query($sql) === TRUE) {
            $conn->close();
            return TRUE;
        }else{
            $conn->close();
            return FALSE;
        }
    }
}