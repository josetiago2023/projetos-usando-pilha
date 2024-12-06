function verificarBalanceamento() {
    const expressao = document.getElementById("expressao").value;
    const resultadoDiv = document.getElementById("resultado");

    const pilha = [];
    const pares = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    let balanceado = true;

    for (const char of expressao) {
        if (['(', '[', '{'].includes(char)) {
            pilha.push(char);
        } else if ([')', ']', '}'].includes(char)) {
            if (pilha.length === 0 || pilha[pilha.length - 1] !== pares[char]) {
                balanceado = false;
                break;
            }
            pilha.pop();
        }
    }

    if (pilha.length !== 0) {
        balanceado = false;
    }

    if (balanceado) {
        resultadoDiv.textContent = "A expressão está balanceada!";
        resultadoDiv.className = "mt-4 text-center text-lg font-semibold text-green-500";
    } else {
        resultadoDiv.textContent = "A expressão NÃO está balanceada!";
        resultadoDiv.className = "mt-4 text-center text-lg font-semibold text-red-500";
    }
}