<?php
private class cguEnfermeiro {

    private $id;
    private $cpfId;
    private $ctps;
    private $cip;

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

//CTPS

    public function setCTPS($ctps)
    {
        $this->ctps = $ctps;
    }
    public function getCTPS()
    {
        return $this->ctps;
    }

//CIP

    public function setCip($cip)
    {
        $this->cip = $cip;
    }
    public function getCip()
    {
        return $this->cip;
    }

    public function inserirBD()
    {
        require_once 'ConexaoBD.php';
    
        $con = new ConexaoBD();
        $conn = $con->conectar();
        if ($conn->connect_error){
            die("Connection failed: " . $conn->connect_error);
        }
        $sql = "INSERT INTO cgu.enfermeiro (CPF_ID, CTPS, CIP)
        VALUES ('".$this->cpfId."', '".$this->ctps."', '".$this->cip."')";
    
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
        $sql = "DELETE*FROM cgu.enfermeiro WHERE ID_Enfermeiro = '".$id ."';";
        if ($conn->query($sql) === TRUE) {
            $conn->close();
            return TRUE;
        }else{
            $conn->close();
            return FALSE;
        }
    }
}