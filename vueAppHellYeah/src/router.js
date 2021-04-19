//Neste arquivo, vou criar as rotas do meu programa

import help from ''; //Caminho para tela de ajuda.
import home from ''; //caminho para o arquivo principal

export const routes = [
    /*Note um problema com o comando: path: '' . Se eu mudar para '/home', terei que efetuar as mesmas mudanças
    de endereço para todos os meus botões e hiperlink criado... Bora deixar o código mais fléxivel*/

    { path: '', name: 'home', component: home, titulo: 'Home', menu: true }, //path: '', equivale ao endereço localhost:3000/#/
    
    { path: '/help', name: 'help', component: help, titulo: 'Tela de ajuda', menu: true},

    //Se aparecer alguma direção desconhecida, o usuário vai para a tela home
    { path: '*', component: home, menu: false}
];