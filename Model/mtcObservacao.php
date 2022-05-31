<?php
private class mtcObservacao {

    private $id;
    private $consultaId;

//ID

    public function setId($id)
    {
        $this->id = $id;
    }
    public function getId()
    {
        return $this->id;
    }

//ID Consulta

    public function setConsultaId($consultaId)
    {
        $this->consultaId = $consultaId;
    }
    public function getConsultaId()
    {
        return $this->consultaId;
    }


    public function inserirBD()
    {
        require_once 'ConexaoBD.php';
    
        $con = new ConexaoBD();
        $conn = $con->conectar();
        if ($conn->connect_error){
            die("Connection failed: " . $conn->connect_error);
        }
        $sql = "INSERT INTO mtc.observacao (Consulta_ID)
        VALUES ('".$this->consultaId."')";
    
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
        $sql = "DELETE*FROM mtc.observacao WHERE ID_Observacao = '".$id ."';";
        if ($conn->query($sql) === TRUE) {
            $conn->close();
            return TRUE;
        }else{
            $conn->close();
            return FALSE;
        }
    }
}