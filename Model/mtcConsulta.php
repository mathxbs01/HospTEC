<?php
private class mtcConsulta {

    private $id;
    private $data;
    private $horario;
    private $idPaciente;
    private $idMedico

//ID

    public function setId($id)
    {
        $this->id = $id;
    }
    public function getId()
    {
        return $this->id;
    }

//Data

    public function setData($data)
    {
        $this->data = $data;
    }
    public function getData()
    {
        return $this->data;
    }

//Horário

    public function setHorario($horario)
    {
        $this->horario = $horario;
    }
    public function getHorario()
    {
        return $this->horario;
    }

//ID Paciente

    public function setIdPaciente($idPaciente)
    {
        $this->idPaciente = $idPaciente;
    }
    public function getIdPaciente()
    {
        return $this->idPaciente;
    }

//ID Médico

    public function setIdMedico($idMedico)
    {
        $this->idMedico = $idMedico;
    }
    public function getIdMedico()
    {
        return $this->idMedico
    }

    public function inserirBD()
    {
        require_once 'ConexaoBD.php';
    
        $con = new ConexaoBD();
        $conn = $con->conectar();
        if ($conn->connect_error){
            die("Connection failed: " . $conn->connect_error);
        }
        $sql = "INSERT INTO mtc.consulta (Data, Horario, ID_Paciente, ID_Medico)
        VALUES ('".$this->data."', '".$this->horario."', '".$this->idPaciente."', '".$this->idMedico."')";
    
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