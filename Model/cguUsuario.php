<?php
class cguUsuario {

private $idCPF;
private $tipoUsuarioId;
private $nome;
private $sobrenome;
private $numero;
private $email;
private $senha;
private $nomeMae;
private $nomePai;
private $endCEP;
private $endEstado;
private $endCidade;
private $endBairro;
private $endRua;
private $endNumero;
    
//ID CPF
    public function setIdCPF($idCPF)
    {
        $this->idCPF = $idCPF;
    }
    public function getIdCPF()
    {
        return $this->idCPF;
    }

//ID Tipo Usuário

    public function setTipoUsuarioId($tipoUsuarioId)
    {
        $this->tipoUsuarioId = $tipoUsuarioId;
    }
    public function getTipoUsuarioId()
    {
        return $this->tipoUsuarioId;
    }

//Nome

    public function setNome($nome)
    {
        $this->nome = $nome;
    }
    public function getNome()
    {
        return $this->nome;
    }

//Sobrenome

    public function setSobrenome($sobrenome)
    {
        $this->sobrenome = $sobrenome
    }
    public function getSobrenome()
    {
        return $this->sobrenome;
    }

//Numero

    public function setNumero($numero)
    {
        $this->numero = $numero;
    }
    public function getNumero()
    {
        return $this->numero;
    }

//Email

    public function setEmail($email)
    {
        $this->email = $email;
    }
    public function getEmail()
    {
        return $this->email;
    }

//Senha

    public function setSenha($senha)
    {
        $this->senha = $senha;
    }
    public function getSenha($senha)
    {
        return $this->senha;
    }

//Nome Mãe

    public function setNomeMae($nomeMae)
    {
        $this->nomeMae = $nomeMae;
    }
    public function getNomeMae()
    {
        return $this->nomeMae;
    }

//Nome Pai 

    public function setNomePai($nomePai)
    {
        $this->nomePai = $nomePai;
    }
    public function getNomePai()
    {
        return $this->nomePai;
    }

//Endereço CEP

    public function setEndCEP($endCEP)
    {
        $this->endCEP = $endCEP;
    }
    public function getEndCEP()
    {
        return $this->endCEP;
    }

//Endereço Estado

    public function setEndEstado($endEstado)
    {
        $this->endEstado = $endEstado;
    }
    public function getEndEstado()
    {
        return $this->endEstado;
    }

//Endereço Cidade

    public function setEndCidade($endCidade)
    {
        $this->endCidade = $endCidade;
    }
    public function getEndCidade()
    {
        return $this->endCidade;
    }
//Endereço Bairro

    public function setEndBairro($endBairro)
    {
        $this->endBairro = $endBairro;
    }
    public function getEndBairro()
    {
        return $this->endBairro;
    }
//Endereço Rua

    public function setEndRua($endRua)
    {
        $this->endRua = $endRua;
    }
    public function getEndRua()
    {
        return $this->endRua;
    }
//Endereço Numero

    public function setEndNumero($endNumero)
    {
        $this->endNumero = $endNumero;
    }
    public function getEndNumero()
    {
        return $this->endNumero;
    }

    public function inserirBD()
    {
        require_once 'ConexaoBD.php';
    
        $con = new ConexaoBD();
        $conn = $con->conectar();
        if ($conn->connect_error){
            die("Connection failed: " . $conn->connect_error);
        }
        $sql = "INSERT INTO cgu.usuario (ID_CPF, TipoUsuario_ID, Nome, Sobrenome, Numero, Email, Senha, NomeMae, NomePai, EndCEP, EndEstado, EndCidade, EndBairro, EndRua, EndNumero)
        VALUES ('".$this->ID_CPF."', '".$this->TipoUsuario_ID."','".$this->Nome."', '".$this->Sobrenome."', '".$this->Numero."', '".$this->Email."', '".$this->Senha."', '".$this->NomeMae."', '".$this->NomePai."', '".$this->EndCEP."', '".$this->EndEstado."', '".$this->NomeCidade."', '".$this->NomeBairro."', '".$this->EndRua."', '".$this->EndNumero."')";
    
        if ($conn->query($sql) === TRUE){
            $this->id = mysql_insert_id($conn)
            $conn->close();
            return TRUE;
            
        }else{
            $conn->close();
            return FALSE;
        }
    }
    public function carregarUsuario($idCPF)
{
    require_once 'ConexaoBD.php';

    $con = new ConexaoBD();
    $conn = $con->conectar();
    if ($conn->connect_error){
        die("Connection failed: " . $conn->connect_error);
    }
    $sql = "SELECT*FROM cgu.usuario WHERE ID_CPF = ".$idCPF ;
    $re = $conn->query($sql);
    $r = $re->fetch_object();
    if ($r != null)
    {
        $this->idCPF = $r->ID_CPF;
        $this->tipoUsuarioID = $r->TipoUsuario_ID;
        $this->nome = $r->Nome;
        $this->sobrenome = $r->Sobrenome;
        $this->numero = $r->Numero;
        $this->email = $r->Email;
        $this->senha = $r->Senha;
        $this->nomeMae = $r->NomeMae;
        $this->nomePai = $r->NomePai;
        $this->endCEP = $r->EndCEP;
        $this->endEstado = $r->EndEstado;
        $this->endCidade = $r->EndCidade;
        $this->endBairro = $r->EndBairro;
        $this->endRua = $r->EndRua;
        $this->endNumero = $r->EndNumero;
        $conn->close()
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
        $sql = "DELETE*FROM cgu.usuario WHERE ID_CPF = '".$idCPF ."';";
        if ($conn->query($sql) === TRUE) {
            $conn->close();
            return TRUE;
        }else{
            $conn->close();
            return FALSE;
        }
    }
    public function atualizarBD()
    {
        require_once 'ConexaoBD.php';
    
        $con = new ConexaoBD();
        $conn = $con->conectar();
        if ($conn->connect_error){
            die("Connection failed: " . $conn->connect_error);
        }
        $sql = "UPDATE cgu.usuario SET Nome = '".$this->nome."', Sobrenome = '".$this->sobrenome."', Email = '".$this->email."',
        NomeMae = '".$this->nomeMae."', NomePai = '".$this->nomePai."', EndCEP = '".$this->endCEP."', EndEstado = '".$this->endEstado."',
        EndCidade = '".$this->endCidade."', EndBairro = '".$this->endBairro."', EndRua = '".$this->endRua."', 
        EndNumero = '".$this->endNumero."' WHERE ID_CPF = '"$this->idCPF."'" ;
        if ($conn->query($sql) === TRUE){
            $conn->close();
            return TRUE;
        }else{
            $conn->close();
            return FALSE;
        }
    }
}