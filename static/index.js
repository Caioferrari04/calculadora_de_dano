const cardTanques = document.querySelectorAll(".cardTanque");
const cardMunicoes = document.querySelectorAll(".cardMunicoes");

for(const cardTanque of cardTanques){
    cardTanque.addEventListener("click",function(){
        
        if(!this.classList.contains("selecionado")){
            
            this.classList.add("selecionado");
            
        }else{
            this.classList.remove("selecionado");
        }
    })
}

for(const CardMunicao of cardMunicoes){
    CardMunicao.addEventListener("click",function(){

        if(!this.classList.contains("selecionado")){
            this.classList.add("selecionado");
        }else{
            this.classList.remove("selecionado")
        }
    })
}

