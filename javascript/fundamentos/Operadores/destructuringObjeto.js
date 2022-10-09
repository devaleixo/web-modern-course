    const top10sonhos = {
        top10: 'Viajar o mundo;',
        top9: 'Ter um carro;',
        top8: 'Ter uma Moto;',
        top7: 'Ser famoso;',
        top6: 'Canal no Youtube Foda;',
        top5: 'Chácara Criatatório de Animais/Pousada;',
        top4: 'Criar empresa,',
        top3: 'Virar um ótimo fotografo ;',
        top2:'Ganhar através da arte e tecnologia;',
        top1: 'Amar e cuidar de todas as pessoas verdadeiras que apareçam em minha vida;',
    }

    const {top2, top1} = top10sonhos        //consigo puxar apenas certos elementos do objeto
    console.log(top2, top1)

    const { top5: Quinto, top4: Quarto } = top10sonhos      //além de puxar certos elementos, consigo renomea-los
    console.log(Quinto, Quarto)