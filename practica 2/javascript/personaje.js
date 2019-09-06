class  Personaje{

    constructor(ataque,vida,ataprc){
        this.ataque = ataque;
        this.vida = vida;
        this.ataprc = ataprc;
    }
    
    atacar(rival){
        rival.reducirVida(this.ataque);
    
    }

    atacarPrinc(rival){
        rival.reducirVida(this.ataprc);
        
    }

    reducirVida(ataque){
        this.vida -= ataque;
        if (personaje1.vida == 0) {
            alert('Gano personaje 2');
            document.location.reload();
          }
        if(personaje2.vida == 0) {
            alert('Gano personaje 1');
            document.location.reload();
        }
        
    }

    aumentarVida(){
        this.vida += 5;
        if(this.vida > 200 ){
            this.vida = 200;
        }
    }


}

personaje1 = new Personaje(10,200,20);
personaje2 = new Personaje(10,200,20);

document.getElementById("atacar1").onclick = function(){
    personaje1.atacar(personaje2);
    document.getElementById("barra-vida2").style.width = String(personaje2.vida/2)+'%';
};

document.getElementById("atacar2").onclick = function(){
    personaje2.atacar(personaje1);
    document.getElementById("barra-vida1").style.width = String(personaje1.vida/2)+'%';
};

document.getElementById("curar1").onclick = function(){
    personaje1.aumentarVida();
    document.getElementById("barra-vida1").style.width = String(personaje1.vida/2)+'%';
};

document.getElementById("curar2").onclick = function(){
    personaje2.aumentarVida();
    
    document.getElementById("barra-vida2").style.width = String(personaje2.vida/2)+'%';
};

document.getElementById("atprinc1").onclick = function(){
    personaje1.atacarPrinc(personaje2);
    document.getElementById("barra-vida2").style.width = String(personaje2.vida/2)+'%';
};

document.getElementById("atprinc2").onclick = function(){
    personaje2.atacarPrinc(personaje1);
    document.getElementById("barra-vida1").style.width = String(personaje1.vida/2)+'%';
};




