<?php
private class cguPaciente {

    private $id;
    private $cpfId;
    private $cns;

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

//CNS

    public function setCNS($cns)
    {
        $this->cns = $cns;
    }
    public function getCNS()
    {
        return $this->cns;
    }

    public function inserirBD()
    {
        require_once 'ConexaoBD.php';
    
        $con = new ConexaoBD();
        $conn = $con->conectar();
        if ($conn->connect_error){
            die("Connection failed: " . $conn->connect_error);
        }
        $sql = "INSERT INTO cgu.paciente (CPF_ID, CNS)
        VALUES ('".$this->cpfId."', '".$this->cns."')";
    
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
        $sql = "DELETE*FROM cgu.paciente WHERE ID_Paciente = '".$id ."';";
        if ($conn->query($sql) === TRUE) {
            $conn->close();
            return TRUE;
        }else{
            $conn->close();
            return FALSE;
        }
    }
}