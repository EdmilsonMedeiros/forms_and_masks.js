/************************************************************************************************************************
 * Chamar o evento oninput/@input e função a ser utilizada no elemento passando os respectivos parâmetros               *
 *                                                                                                                      *
 * No vuejs, descomentar o export no final deste arquivo e importar as funções em cada componente onde serão utilizadas.*
 * import {formatarMoedaReais, formatarCPF, formatarCNPJ, formatarCelular..} from '@/forms_mask.js';                    *
 * *********************************************************************************************************************/


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
    // Obtém os elementos dos campos de senha e a div onde a mensagem será exibida
    let senha = document.getElementById(field_id);
    let confirmarSenha = document.getElementById(field_id2);
    let mensagemErro = document.getElementById(field_id2 + '_erro');

    if (senha.value !== confirmarSenha.value) { 
        // Se as senhas forem diferentes, mostra a mensagem de erro e deixa o texto vermelho
        confirmarSenha.style.color = 'red';
        senha.style.color = 'red';
        if (!mensagemErro) { // Se a mensagem de erro ainda não existir, cria ela
            mensagemErro = document.createElement('span');
            mensagemErro.id = field_id2 + '_erro';
            mensagemErro.style.color = 'red';
            mensagemErro.textContent = 'As senhas estão diferentes';
            confirmarSenha.parentNode.insertBefore(mensagemErro, confirmarSenha.nextSibling); // Insere a mensagem após o campo de confirmação de senha
        }
    } else { 
        // Se as senhas forem iguais, remove o texto vermelho e a mensagem de erro, se existir
        senha.style.color = '';
        confirmarSenha.style.color = '';
        if (mensagemErro) {
            mensagemErro.parentNode.removeChild(mensagemErro); // Remove a mensagem de erro
        }
    }
}


/*******************************
 * Exibir texto float em reais
 *******************************/
function exibirTextoFloatEmReais(classe) {
    // Seleciona todos os elementos com a classe fornecida
    var elementos = document.getElementsByClassName(classe);

    // Percorre todos os elementos selecionados
    for (var i = 0; i < elementos.length; i++) {
        var conteudo = elementos[i].textContent; // Obtém o conteúdo do elemento
        // Aplica a máscara de reais
        var valorFormatado = parseFloat(conteudo).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        // Define o conteúdo do elemento como o valor formatado
        elementos[i].textContent = valorFormatado;
    }
}

/***************************************************************
 * Converte datas em texto no padrão americano para o padrão BR
 ***************************************************************/
function exibirTextoDataEmBR(classe) {
    // Seleciona todos os elementos com a classe fornecida
    var elementos = document.getElementsByClassName(classe);

    // Percorre todos os elementos selecionados
    for (var i = 0; i < elementos.length; i++) {
        var textoData = elementos[i].textContent.trim(); // Obtém o texto da data e remove espaços em branco

        // Verifica se o texto da data está no formato americano
        if (textoData.match(/^\d{4}-\d{2}-\d{2}( \d{2}:\d{2}:\d{2})?$/)) {
            var partes = textoData.split(' '); // Divide o texto da data em partes
            var dataAmericana = partes[0]; // Obtém a parte da data

            // Se houver parte de hora, mantém, caso contrário, define como vazio
            var horaAmericana = partes[1] ? ' ' + partes[1] : '';

            // Divide a data em ano, mês e dia
            var [ano, mes, dia] = dataAmericana.split('-');

            // Formata a data no padrão brasileiro
            var dataBR = dia + '/' + mes + '/' + ano + horaAmericana;

            // Define o texto do elemento como a data formatada
            elementos[i].textContent = dataBR;
        }
    }
}


// export { formatarMoedaReais, formatarCPF, formatarCNPJ, formatarCelular, verificarSenhas, exibirTextoFloatEmReais, exibirTextoDataEmBR };