<?php
class ddfTipoMedico {

    private $id
    private $tipoMedico

//ID

    public function setID($id)
    {
        $this->id = $id;
    }
    public function getID()
    {
        return $this->id;
    }

//Tipo Médico

    public function setTipoMedico($tipoMedico)
    {
        $this->tipoUsuario = $tipoMedico;
    }
    public function getTipoMedico()
    {
       return $this->tipoMedico;
    }

    public function inserirBD()
    {
        require_once 'ConexaoBD.php';
    
        $con = new ConexaoBD();
        $conn = $con->conectar();
        if ($conn->connect_error){
            die("Connection failed: " . $conn->connect_error);
        }
        $sql = "INSERT INTO ddf.tipomedico (TipoMedico)
        VALUES ('".$this->tipoMedico."')";
    
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
        $sql = "DELETE*FROM ddf.tipomedico WHERE ID_TipoMedico = '".$id ."';";
        if ($conn->query($sql) === TRUE) {
            $conn->close();
            return TRUE;
        }else{
            $conn->close();
            return FALSE;
        }
    }
}