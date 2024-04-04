$(function(){
    $("input[name*='Tipo']").on('change',function(){
        if(this.value === 'comercio'){
            $('#conteudoComercio').show()
            $('#conteudoHospedagem').hide()
            $('#conteudoPontoturistico').hide()
            $('#conteudoEvento').hide()
        }
        else if(this.value === 'hospedagem'){
            $('#conteudoHospedagem').show()
            $('#conteudoComercio').hide()
            $('#conteudoPontoturistico').hide()
            $('#conteudoEvento').hide()
        }
        else if(this.value === 'pontoturistico'){
            $('#conteudoPontoturistico').show()
            $('#conteudoHospedagem').hide()
            $('#conteudoComercio').hide()
            $('#conteudoEvento').hide()
        }
        else if(this.value === 'evento'){
            $('#conteudoEvento').show()
            $('#conteudoHospedagem').hide()
            $('#conteudoPontoturistico').hide()
            $('#conteudoComercio').hide()
        }
    })
});