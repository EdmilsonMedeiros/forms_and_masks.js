/****************************************************************************************************
 * Chamar o evento oninput e função a ser utilizada no elemento passando os respectivos parâmetros
 * **************************************************************************************************/


/*****************************
 * Mascara monetária de reais
 * ***************************/
function formatarMoedaReais(field_id) {
    // Obtém o valor do input e remove qualquer caractere que não seja um numérico
    let input = document.getElementById(field_id);
    let valor = input.value.replace(/\D/g, '');

    // Formata o valor para ter duas casas decimais
    valor = (valor / 100).toFixed(2);

    // Adiciona separador de milhares
    valor = valor.replace('.', ',').replace(/(\d)(?=(\d{3})+,)/g, '$1.');

    // Atualiza o valor do input com a máscara monetária
    input.value = valor;
}

/*****************
 * Mascara de CPF
 *****************/
function formatarCPF(field_id) {
    // Obtém o valor do input e remove qualquer caractere que não seja um numérico
    let input = document.getElementById(field_id);
    let valor = input.value.replace(/\D/g, '');

    // Limita o número de caracteres a 11 (sem pontos e traço)
    valor = valor.substring(0, 11); 

    // Aplica a máscara de CPF
    valor = valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

    // Atualiza o valor do input com a máscara de CPF
    input.value = valor;

    // Altera a cor do texto para vermelho se o CPF não estiver completo
    if (valor.length !== 14) {
        input.style.color = 'red';
    } else {
        input.style.color = ''; // Reverte para a cor padrão do texto
    }
}

/*******************
 * Mascara de CNPJ
 *******************/
function formatarCNPJ(field_id) {
    // Obtém o valor do input e remove qualquer caractere que não seja um numérico
    let input = document.getElementById(field_id);
    let valor = input.value.replace(/\D/g, '');

    // Limita o número de caracteres a 14 (sem pontos, traço e barras)
    valor = valor.substring(0, 14); 

    // Aplica a máscara de CNPJ
    valor = valor.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');

    // Atualiza o valor do input com a máscara de CNPJ
    input.value = valor;

    // Altera a cor do texto para vermelho se o CNPJ não estiver completo
    if (valor.length !== 18) {
        input.style.color = 'red';
    } else {
        input.style.color = ''; // Reverte para a cor padrão do texto
    }
}

/*********************
 * Mascara de Celular
 *********************/
function formatarCelular(field_id) {
    // Obtém o valor do input e remove qualquer caractere que não seja um numérico
    let input = document.getElementById(field_id);
    let valor = input.value.replace(/\D/g, '');

    // Limita o número de caracteres a 11 (sem parênteses, traço e espaço)
    valor = valor.substring(0, 11); 

    // Aplica a máscara de celular
    valor = valor.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');

    // Atualiza o valor do input com a máscara de celular
    input.value = valor;

    // Altera a cor do texto para vermelho se o número de celular não estiver completo
    if (valor.length !== 15) {
        input.style.color = 'red';
    } else {
        input.style.color = ''; // Reverte para a cor padrão do texto
    }
}

/****************************************************
 * Validação de senhas
 * |--> field_id    --> campo de senha;
 * |--> field_id2   --> campo de validação de senha.
 ****************************************************/
function verificarSenhas(field_id, field_id2) {
    // Obtém o valor do input
    let senha = document.getElementById(field_id);
    let confirmarSenha = document.getElementById(field_id2);

    if (senha.value !== confirmarSenha.value) { 
        // Se as senhas forem diferentes deixa o texto vermelho
        confirmarSenha.style.color = 'red';
        senha.style.color = 'red';
    } else { 
        // Se as senhas forem iguais remove o texto vermelho
        senha.style.color = '';
        confirmarSenha.style.color = '';
    }
}

export { formatarMoedaReais, formatarCPF, formatarCNPJ, formatarCelular, verificarSenhas };