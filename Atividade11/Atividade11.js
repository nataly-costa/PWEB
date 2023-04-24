function Retangulo(x, y)
{   this.x = x;
    this.y = y;

    this.calculo = function()
        {
        alert("base=" + this.x+ "\naltura=" + this.y + "\nCalculo Area: " + (this.x * this.y));
        };

    }

var retangulo = new Retangulo(5, 10);
    retangulo.calculo();
    
    function Conta(){

        this.getNome = function(){
            return this.nome;
        }
    
        this.setNome = function(nome){
            this.nome = nome;
        }
    
        this.getBanco = function(){
            return this.banco;
        }
    
        this.setBanco = function(banco){
            this.banco = banco;
        }
    
        this.getNumeroConta = function(){
            return this.numeroConta;
        }
    
        this.setNumeroConta = function(numeroConta){
            this.numeroConta = numeroConta;
        }
    
        this.getSaldo = function(){
            return this.saldo;
        }
    
        this.setSaldo = function(saldo){
            this.saldo = saldo;
        }
    
        
    }
    
    function Corrente(){ 
    
        this.getSaldoEspecial = function(){
            return this.saldoEspecial;
        };
    
        this.setSaldoEspecial = function(saldoEspecial){
            this.saldoEspecial = saldoEspecial;
        };
    }
    
    function Poupanca(){ 
        
        this.getJuros = function(){
            return this.juros;
        };
        
        this.setJuros = function(juros){
            this.juros = juros;
        };
    
        this.getDataVencimento = function(){
            return this.dataVencimento;
        };
        
        this.setDataVencimento = function(dataVencimento){
            this.dataVencimento = dataVencimento;
        };
    }
    
    Corrente.prototype = new Conta();
    Poupanca.prototype = new Conta();
    
    objCorrente = new Corrente();
    objPoupanca = new Poupanca();
    
    objCorrente.setNome("Nataly");
    objCorrente.setBanco("Itau");
    objCorrente.setNumeroConta("101");
    objCorrente.setSaldo(12000);
    objCorrente.setSaldoEspecial(22222);
    
    objPoupanca.setNome("Rocha");
    objPoupanca.setBanco("Bradesco");
    objPoupanca.setNumeroConta("202");
    objPoupanca.setSaldo(5000);
    objPoupanca.setJuros(12);
    objPoupanca.setDataVencimento("12/07/2023");
    
    alert("Dados da conta corrente:\nNome: " + objCorrente.getNome() + 
                    "\nBanco: " + objCorrente.getBanco() + 
                    "\nNúmero da Conta: " + objCorrente.getNumeroConta() +
                    "\nSaldo: " + objCorrente.getSaldo() +
                    "\nSaldo Especial: " + objCorrente.getSaldoEspecial());
    
    alert("Dados da conta poupança:\nNome: " + objPoupanca.getNome() + 
                    "\nBanco: " + objPoupanca.getBanco() + 
                    "\nNúmero da Conta: " + objPoupanca.getNumeroConta() +
                    "\nSaldo: " + objPoupanca.getSaldo() +
                    "\nJuros: " + objPoupanca.getJuros() +
                    "\nData de vencimento: " + objPoupanca.getDataVencimento());