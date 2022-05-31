<?php
private class cguRecepcionista {

    private $id;
    private $cpfId;
    private $ctps;

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

    public function inserirBD()
    {
        require_once 'ConexaoBD.php';
    
        $con = new ConexaoBD();
        $conn = $con->conectar();
        if ($conn->connect_error){
            die("Connection failed: " . $conn->connect_error);
        }
        $sql = "INSERT INTO cgu.recepcionista (CPF_ID, CTPS)
        VALUES ('".$this->cpfId."', '".$this->ctps."')";
    
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
        $sql = "DELETE*FROM cgu.recepcionista WHERE ID_Recepcionista = '".$id ."';";
        if ($conn->query($sql) === TRUE) {
            $conn->close();
            return TRUE;
        }else{
            $conn->close();
            return FALSE;
        }
    }
}