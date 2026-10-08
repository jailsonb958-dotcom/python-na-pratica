export interface Exercise { id: string; title: string; file: string; category: string; difficulty: string; concepts: string[]; description: string; objective: string; explanation: string; challenge: string; originalCode: string; correctedCode: string; hasCorrection: boolean; order: number; }

export const exercises: Exercise[] = [
  {
    "id": "aluguel_de_carros",
    "title": "Conversão de temperatura",
    "file": "aluguel_de_carros.py",
    "category": "Práticos",
    "difficulty": "iniciante",
    "concepts": [
      "input",
      "float",
      "fórmula"
    ],
    "description": "Converta uma temperatura de Celsius para Fahrenheit.",
    "objective": "Use uma fórmula com números decimais e formatação de saída.",
    "explanation": "Adicione a conversão de volta para Celsius.",
    "challenge": "Adicione a conversão de volta para Celsius.",
    "originalCode": "c = float(input('Informe a temperatura em C°'))\nf = 9 * c /5 + 32\n\nprint('Está fazendo {:.2f}C°! e {:.2f}F°'.format(c,f))",
    "correctedCode": "c = float(input('Informe a temperatura em C°'))\nf = 9 * c /5 + 32\n\nprint('Está fazendo {:.2f}C°! e {:.2f}F°'.format(c,f))",
    "hasCorrection": false,
    "order": 1
  },
  {
    "id": "conversão_temp",
    "title": "Aumento de salário",
    "file": "conversão_temp.py",
    "category": "Práticos",
    "difficulty": "iniciante",
    "concepts": [
      "input",
      "float",
      "porcentagem"
    ],
    "description": "Calcule um salário com aumento de 15%.",
    "objective": "Pratique porcentagens, float e formatação monetária.",
    "explanation": "Permita que a pessoa informe o percentual de aumento.",
    "challenge": "Permita que a pessoa informe o percentual de aumento.",
    "originalCode": "sal = float(input('Salário de funcionário:'))\naument = sal + (sal * 15 / 100)\n\nprint ('O novo salário com 15% de aumento é:{:.2f}'.format(aument))\n",
    "correctedCode": "sal = float(input('Salário de funcionário:'))\naument = sal + (sal * 15 / 100)\n\nprint ('O novo salário com 15% de aumento é:{:.2f}'.format(aument))\n",
    "hasCorrection": false,
    "order": 2
  },
  {
    "id": "desconto",
    "title": "Calculando desconto",
    "file": "desconto.py",
    "category": "Práticos",
    "difficulty": "iniciante",
    "concepts": [
      "input",
      "float",
      "porcentagem",
      "format"
    ],
    "description": "Calcule o desconto de 5% e o preço final de um produto.",
    "objective": "Separe o valor do desconto do valor final para deixar o cálculo claro.",
    "explanation": "Adicione uma opção para pagamento à vista ou parcelado.",
    "challenge": "Adicione uma opção para pagamento à vista ou parcelado.",
    "originalCode": "val = float(input('Digite o valor do produto:'))\ndesc = val * 5/100\ntotal = val - desc\n\nprint ('O valor do seu desconto é: R${:.2f}'.format(desc))\nprint ('O valor do seu produto com desconto é: R${:.2f}'.format(total))\n",
    "correctedCode": "val = float(input('Digite o valor do produto:'))\ndesc = val * 5/100\ntotal = val - desc\n\nprint ('O valor do seu desconto é: R${:.2f}'.format(desc))\nprint ('O valor do seu produto com desconto é: R${:.2f}'.format(total))\n",
    "hasCorrection": false,
    "order": 3
  },
  {
    "id": "desenho_while",
    "title": "Desenhando com while",
    "file": "desenho_while.py",
    "category": "Loops",
    "difficulty": "iniciante",
    "concepts": [
      "while",
      "strings",
      "repetição"
    ],
    "description": "Desenhe padrões de caracteres usando laços while.",
    "objective": "Veja como um contador controla a quantidade de repetições.",
    "explanation": "Troque o caractere @ por um símbolo escolhido pelo usuário.",
    "challenge": "Troque o caractere @ por um símbolo escolhido pelo usuário.",
    "originalCode": "x = int(input('Digite um número:'))\n \n \nwhile x < 10:\n  print('@'* x)\n  x += 1\n\nwhile x > 0:\n  print('@gah'* x)\n  x -= 1",
    "correctedCode": "x = int(input('Digite um número:'))\n \n \nwhile x < 10:\n  print('@'* x)\n  x += 1\n\nwhile x > 0:\n  print('@gah'* x)\n  x -= 1",
    "hasCorrection": false,
    "order": 4
  },
  {
    "id": "dicionario",
    "title": "Ordenando dados",
    "file": "dicionario.py",
    "category": "Listas",
    "difficulty": "iniciante",
    "concepts": [
      "listas",
      "sort",
      "mutação"
    ],
    "description": "Organize números de uma lista em ordem crescente.",
    "objective": "Compreenda a ordenação in-place de listas.",
    "explanation": "Crie uma nova lista sem modificar a original.",
    "challenge": "Crie uma nova lista sem modificar a original.",
    "originalCode": "lista = [6,8,7,3,2,1]\n\nlista.sort()\nprint(lista)",
    "correctedCode": "lista = [6,8,7,3,2,1]\n\nlista.sort()\nprint(lista)",
    "hasCorrection": false,
    "order": 5
  },
  {
    "id": "ex00",
    "title": "Contador incompleto",
    "file": "ex00.py",
    "category": "Fundamentos",
    "difficulty": "intermediário",
    "concepts": [
      "input",
      "while",
      "variáveis"
    ],
    "description": "Exercício preservado do material original, com um esqueleto incompleto de contador.",
    "objective": "Complete a condição do while e faça o contador funcionar.",
    "explanation": "O arquivo original tem parênteses e condição ausentes; a versão corrigida conta até o número informado.",
    "challenge": "O arquivo original tem parênteses e condição ausentes; a versão corrigida conta até o número informado.",
    "originalCode": "n1 = int(input('Digite um número')\ni = 0\nwhile \n",
    "correctedCode": "n1 = int(input('Digite um número: '))\ni = 0\nwhile i <= n1:\n    print(i)\n    i += 1",
    "hasCorrection": true,
    "order": 6
  },
  {
    "id": "ex003",
    "title": "Somando dois números",
    "file": "ex003.py",
    "category": "Fundamentos",
    "difficulty": "iniciante",
    "concepts": [
      "input",
      "int",
      "variáveis",
      "soma",
      "print"
    ],
    "description": "Receba dois inteiros e mostre o resultado da soma.",
    "objective": "Pratique entrada de dados, conversão para int e operações matemáticas.",
    "explanation": "Depois, transforme a soma em subtração.",
    "challenge": "Depois, transforme a soma em subtração.",
    "originalCode": "n1 = int(input('Digite um valor'))\nn2 = int(input('Digite outro valor'))\ns = n1 + n2\nprint('a soma ebtre {} e {} é igual a {}!.'.format(n1, n2, s))",
    "correctedCode": "n1 = int(input('Digite um valor'))\nn2 = int(input('Digite outro valor'))\ns = n1 + n2\nprint('a soma ebtre {} e {} é igual a {}!.'.format(n1, n2, s))",
    "hasCorrection": false,
    "order": 7
  },
  {
    "id": "ex004",
    "title": "Investigando um valor",
    "file": "ex004.py",
    "category": "Fundamentos",
    "difficulty": "iniciante",
    "concepts": [
      "input",
      "strings",
      "tipos",
      "métodos"
    ],
    "description": "Explore os métodos de string e descubra as características de um valor digitado.",
    "objective": "Observe como strings podem ser analisadas com métodos como isnumeric e isalpha.",
    "explanation": "Adicione uma mensagem explicando qual característica foi encontrada.",
    "challenge": "Adicione uma mensagem explicando qual característica foi encontrada.",
    "originalCode": "a = input('Digite algo')\nprint('o tipo primitivo desse valor é',type(a))\nprint('é numérico?', a.isnumeric())\nprint('so tem espaços',a.isspace())\nprint('é alfanumérico',a.isalnum())\nprint('é alfabético', a.isalpha())\nprint('Está em maiúsculas',a.isupper())\nprint('Está em minúsculas',a.islower())\nprint('Está capitalizada',a.istitle())\n",
    "correctedCode": "a = input('Digite algo')\nprint('o tipo primitivo desse valor é',type(a))\nprint('é numérico?', a.isnumeric())\nprint('so tem espaços',a.isspace())\nprint('é alfanumérico',a.isalnum())\nprint('é alfabético', a.isalpha())\nprint('Está em maiúsculas',a.isupper())\nprint('Está em minúsculas',a.islower())\nprint('Está capitalizada',a.istitle())\n",
    "hasCorrection": false,
    "order": 8
  },
  {
    "id": "ex005",
    "title": "Antecessor e sucessor",
    "file": "ex005.py",
    "category": "Fundamentos",
    "difficulty": "iniciante",
    "concepts": [
      "input",
      "int",
      "aritmética"
    ],
    "description": "Calcule o número anterior e o próximo número inteiro.",
    "objective": "Pratique variáveis e operações de adição e subtração.",
    "explanation": "Mostre também o dobro e a metade.",
    "challenge": "Mostre também o dobro e a metade.",
    "originalCode": "n1 = int(input('Um número:'))\nant = n1 - 1\nsuc = n1 + 1\nprint ('O antecessor desse número é: {}\\no sucessor é {}!'.format(ant, suc)) ",
    "correctedCode": "n1 = int(input('Um número:'))\nant = n1 - 1\nsuc = n1 + 1\nprint ('O antecessor desse número é: {}\\no sucessor é {}!'.format(ant, suc)) ",
    "hasCorrection": false,
    "order": 9
  },
  {
    "id": "ex006",
    "title": "Nome em maiúsculas",
    "file": "ex006.py",
    "category": "Fundamentos",
    "difficulty": "iniciante",
    "concepts": [
      "input",
      "strings",
      "upper"
    ],
    "description": "Converta um nome digitado para letras maiúsculas.",
    "objective": "Aprenda a chamar métodos de string para transformar textos.",
    "explanation": "Mostre o nome também em letras minúsculas.",
    "challenge": "Mostre o nome também em letras minúsculas.",
    "originalCode": "s = str(input ('Nome:'))\ns = s.upper()\nprint(s)\n",
    "correctedCode": "s = str(input ('Nome:'))\ns = s.upper()\nprint(s)\n",
    "hasCorrection": false,
    "order": 10
  },
  {
    "id": "ex007",
    "title": "Ordenando uma lista",
    "file": "ex007.py",
    "category": "Listas",
    "difficulty": "iniciante",
    "concepts": [
      "listas",
      "sort",
      "None"
    ],
    "description": "Entenda como ordenar uma lista e o que o método sort retorna.",
    "objective": "sort altera a lista original e retorna None; por isso não devemos atribuir seu retorno à variável.",
    "explanation": "Experimente ordenar em ordem reversa.",
    "challenge": "Experimente ordenar em ordem reversa.",
    "originalCode": "my_list = ['jailson','barros',25, 'antonio']\nmy_list = my_list.sort()\n\n\nprint(my_list)",
    "correctedCode": "my_list = ['jailson', 'barros', 25, 'antonio']\nmy_list.sort(key=str)\nprint(my_list)",
    "hasCorrection": true,
    "order": 11
  },
  {
    "id": "ex_for",
    "title": "Percorrendo uma lista",
    "file": "ex_for.py",
    "category": "Loops",
    "difficulty": "iniciante",
    "concepts": [
      "for",
      "listas",
      "iteração"
    ],
    "description": "Percorra todos os itens de uma lista usando for.",
    "objective": "Aprenda a repetir uma ação para cada elemento de uma coleção.",
    "explanation": "Mostre apenas os números pares.",
    "challenge": "Mostre apenas os números pares.",
    "originalCode": "n = [1,2,3,4,5,6,7,9,9,10]\n\n\nfor num in n:\n    print(num)\n    \t\n    \t\n    \t\n    \t\n    \t\n\n\n\n\n    \n",
    "correctedCode": "n = [1,2,3,4,5,6,7,9,9,10]\n\n\nfor num in n:\n    print(num)\n    \t\n    \t\n    \t\n    \t\n    \t\n\n\n\n\n    \n",
    "hasCorrection": false,
    "order": 12
  },
  {
    "id": "import",
    "title": "Aluguel de carro",
    "file": "import.py",
    "category": "Práticos",
    "difficulty": "intermediário",
    "concepts": [
      "input",
      "float",
      "cálculo",
      "format"
    ],
    "description": "Calcule o custo de diárias e quilômetros rodados de um carro alugado.",
    "objective": "Combine duas regras de preço e apresente um resumo da conta.",
    "explanation": "Crie uma função para calcular o total.",
    "challenge": "Crie uma função para calcular o total.",
    "originalCode": "dias = float(input('Quantos dias você fixou com o carro?'))\nkm = float(input('Quantos km rodados?'))\n\ndiarias = 60 * dias\nkmr = km * 0.15\n\ntotal = diarias + kmr\n\nprint ('Você permaneceu com o veículo por {} dias! valor: R${}'.format(dias,diarias))\nprint ('Total de km rodados:{} KM valor: R${}'.format(km,kmr,))\nprint ('O valor total a pagar é:R${}'.format(total))",
    "correctedCode": "dias = float(input('Quantos dias você fixou com o carro?'))\nkm = float(input('Quantos km rodados?'))\n\ndiarias = 60 * dias\nkmr = km * 0.15\n\ntotal = diarias + kmr\n\nprint ('Você permaneceu com o veículo por {} dias! valor: R${}'.format(dias,diarias))\nprint ('Total de km rodados:{} KM valor: R${}'.format(km,kmr,))\nprint ('O valor total a pagar é:R${}'.format(total))",
    "hasCorrection": false,
    "order": 13
  },
  {
    "id": "lista_aninhada",
    "title": "Lista e ordenação",
    "file": "lista_aninhada.py",
    "category": "Listas",
    "difficulty": "iniciante",
    "concepts": [
      "listas",
      "sort",
      "strings"
    ],
    "description": "Ordene nomes em uma lista.",
    "objective": "Pratique listas de strings e ordenação alfabética.",
    "explanation": "Inclua mais três nomes e conte os elementos.",
    "challenge": "Inclua mais três nomes e conte os elementos.",
    "originalCode": "lista = ['jailson','barros', 'antonio']\nlista.sort() #ordena em ordem alfabética!\n\n\nprint(lista) #imprime na tela!\n",
    "correctedCode": "lista = ['jailson','barros', 'antonio']\nlista.sort() #ordena em ordem alfabética!\n\n\nprint(lista) #imprime na tela!\n",
    "hasCorrection": false,
    "order": 14
  },
  {
    "id": "lista_for",
    "title": "Lista com for",
    "file": "lista_for.py",
    "category": "Listas",
    "difficulty": "iniciante",
    "concepts": [
      "listas",
      "sort",
      "for"
    ],
    "description": "Ordene uma lista e prepare-a para ser percorrida.",
    "objective": "Combine mutação de lista e iteração.",
    "explanation": "Mostre o índice de cada valor.",
    "challenge": "Mostre o índice de cada valor.",
    "originalCode": "lista = [6,8,7,3,2,1]\n\nlista.sort()\nprint(lista)",
    "correctedCode": "lista = [6,8,7,3,2,1]\n\nlista.sort()\nprint(lista)",
    "hasCorrection": false,
    "order": 15
  },
  {
    "id": "lista_ordenada",
    "title": "Lista em ordem",
    "file": "lista_ordenada.py",
    "category": "Listas",
    "difficulty": "iniciante",
    "concepts": [
      "listas",
      "sort"
    ],
    "description": "Ordene números usando o método sort.",
    "objective": "Entenda a diferença entre lista original e lista ordenada.",
    "explanation": "Use sorted para preservar a lista original.",
    "challenge": "Use sorted para preservar a lista original.",
    "originalCode": "lista = [6,8,7,3,2,1]\n\nlista.sort()\nprint(lista)",
    "correctedCode": "lista = [6,8,7,3,2,1]\n\nlista.sort()\nprint(lista)",
    "hasCorrection": false,
    "order": 16
  },
  {
    "id": "media",
    "title": "Filtrando números",
    "file": "media.py",
    "category": "Loops",
    "difficulty": "intermediário",
    "concepts": [
      "for",
      "if",
      "módulo",
      "listas"
    ],
    "description": "Percorra uma lista e diferencie números pares e ímpares.",
    "objective": "Use o operador % e uma condição dentro de um for.",
    "explanation": "Calcule a quantidade de pares.",
    "challenge": "Calcule a quantidade de pares.",
    "originalCode": "\nlista = [1,2,3,4,5,6,7,8,9,10]\nlista.reverse()\n\nfor num in lista:\n    if num % 2 == 0:\n        print(num)\n    else:\n        print('Números ímpares')   \n",
    "correctedCode": "\nlista = [1,2,3,4,5,6,7,8,9,10]\nlista.reverse()\n\nfor num in lista:\n    if num % 2 == 0:\n        print(num)\n    else:\n        print('Números ímpares')   \n",
    "hasCorrection": false,
    "order": 17
  },
  {
    "id": "moeda",
    "title": "Conversor de moeda",
    "file": "moeda.py",
    "category": "Práticos",
    "difficulty": "iniciante",
    "concepts": [
      "input",
      "float",
      "conversão"
    ],
    "description": "Complete o conversor de moeda iniciado no material.",
    "objective": "Pratique entrada de valor e multiplicação por uma cotação.",
    "explanation": "Inclua uma cotação informada pelo usuário.",
    "challenge": "Inclua uma cotação informada pelo usuário.",
    "originalCode": "num = int(input\n    \n",
    "correctedCode": "valor = float(input('Valor em reais: R$ '))\ncotacao = float(input('Cotação do dólar: R$ '))\nprint(f'Valor em dólares: US$ {valor / cotacao:.2f}')",
    "hasCorrection": true,
    "order": 18
  },
  {
    "id": "pintar_parede",
    "title": "Desenho com repetição",
    "file": "pintar_parede.py",
    "category": "Loops",
    "difficulty": "iniciante",
    "concepts": [
      "while",
      "strings",
      "contador"
    ],
    "description": "Crie um desenho repetindo caracteres.",
    "objective": "Observe como while pode controlar uma sequência de saída.",
    "explanation": "Faça o desenho crescer e diminuir de forma simétrica.",
    "challenge": "Faça o desenho crescer e diminuir de forma simétrica.",
    "originalCode": "x = int(input('Digite um número:'))\n \n \nwhile x < 10:\n  print('@'* x)\n  x += 1\n\nwhile x > 0:\n  print('@gah'* x)\n  x -= 1",
    "correctedCode": "x = int(input('Digite um número:'))\n \n \nwhile x < 10:\n  print('@'* x)\n  x += 1\n\nwhile x > 0:\n  print('@gah'* x)\n  x -= 1",
    "hasCorrection": false,
    "order": 19
  },
  {
    "id": "range",
    "title": "Desempacotando tuplas",
    "file": "range.py",
    "category": "Tuplas",
    "difficulty": "iniciante",
    "concepts": [
      "tuplas",
      "for",
      "desempacotamento"
    ],
    "description": "Percorra pares de valores e desempacote cada tupla.",
    "objective": "Aprenda a acessar os valores de uma tupla durante o for.",
    "explanation": "Imprima os dois valores e a soma.",
    "challenge": "Imprima os dois valores e a soma.",
    "originalCode": "n = [(1,2),(3,4),(5,6),(7,8)]\n\n\nfor tup1,tup2 in n:\n    print(tup1)\n\n    \t\n    \t\n    \t\n    \t\n    \t\n\n\n\n\n    \n",
    "correctedCode": "n = [(1,2),(3,4),(5,6),(7,8)]\n\n\nfor tup1,tup2 in n:\n    print(tup1)\n\n    \t\n    \t\n    \t\n    \t\n    \t\n\n\n\n\n    \n",
    "hasCorrection": false,
    "order": 20
  },
  {
    "id": "salário",
    "title": "Novo salário",
    "file": "salário.py",
    "category": "Práticos",
    "difficulty": "iniciante",
    "concepts": [
      "input",
      "float",
      "porcentagem"
    ],
    "description": "Calcule o salário com aumento de 15%.",
    "objective": "Pratique cálculo percentual e saída formatada.",
    "explanation": "Refatore o cálculo em uma função.",
    "challenge": "Refatore o cálculo em uma função.",
    "originalCode": "sal = float(input('Salário de funcionário:'))\naument = sal + (sal * 15 / 100)\n\nprint ('O novo salário com 15% de aumento é:{:.2f}'.format(aument))\n",
    "correctedCode": "sal = float(input('Salário de funcionário:'))\naument = sal + (sal * 15 / 100)\n\nprint ('O novo salário com 15% de aumento é:{:.2f}'.format(aument))\n",
    "hasCorrection": false,
    "order": 21
  },
  {
    "id": "tabuad",
    "title": "Tabuada completa",
    "file": "tabuad.py",
    "category": "Loops",
    "difficulty": "iniciante",
    "concepts": [
      "while",
      "format",
      "multiplicação"
    ],
    "description": "Mostre a tabuada de um número de 0 a 10.",
    "objective": "Use while para controlar a repetição e format para alinhar a saída.",
    "explanation": "Permita escolher o início e o fim da tabuada.",
    "challenge": "Permita escolher o início e o fim da tabuada.",
    "originalCode": "print('+' * 20)\nnum = int(input('Digite um número:\\n'))\nx = 0\n\n\nwhile x <= 10:\n    print('{} * {:2} = {} '.format(num,x,(num*x)))\n    x += 1\nprint('=' * 20)",
    "correctedCode": "print('+' * 20)\nnum = int(input('Digite um número:\\n'))\nx = 0\n\n\nwhile x <= 10:\n    print('{} * {:2} = {} '.format(num,x,(num*x)))\n    x += 1\nprint('=' * 20)",
    "hasCorrection": false,
    "order": 22
  },
  {
    "id": "triângulo",
    "title": "Triângulo equilátero",
    "file": "triângulo.py",
    "category": "Condicionais",
    "difficulty": "iniciante",
    "concepts": [
      "input",
      "if",
      "and",
      "comparação"
    ],
    "description": "Verifique se três lados formam um triângulo equilátero.",
    "objective": "Combine comparações com o operador lógico and.",
    "explanation": "Valide também se os lados podem formar um triângulo.",
    "challenge": "Valide também se os lados podem formar um triângulo.",
    "originalCode": "a = int(input('Digite um número:'))\nb = int(input('Digite outro número:'))\nc = int(input('Digite mais um número:'))\n\nprint ('{}\\n{}\\n{}\\n'.format(a,b,c))\n\nif (a == b and b == c ):\n    print ('É um triângulo equilátero')\nelse:\n    print('Não é um triângulo equilátero')\n",
    "correctedCode": "a = int(input('Digite um número:'))\nb = int(input('Digite outro número:'))\nc = int(input('Digite mais um número:'))\n\nprint ('{}\\n{}\\n{}\\n'.format(a,b,c))\n\nif (a == b and b == c ):\n    print ('É um triângulo equilátero')\nelse:\n    print('Não é um triângulo equilátero')\n",
    "hasCorrection": false,
    "order": 23
  },
  {
    "id": "tupla",
    "title": "Percorrendo tuplas",
    "file": "tupla.py",
    "category": "Tuplas",
    "difficulty": "iniciante",
    "concepts": [
      "tuplas",
      "for",
      "iteração"
    ],
    "description": "Leia valores armazenados em tuplas dentro de uma lista.",
    "objective": "Pratique coleções imutáveis e repetição.",
    "explanation": "Mostre os pares completos em vez de apenas o primeiro valor.",
    "challenge": "Mostre os pares completos em vez de apenas o primeiro valor.",
    "originalCode": "n = [(1,2),(3,4),(5,6),(7,8)]\n\n\nfor tup1,tup2 in n:\n    print(tup1)\n\n    \t\n    \t\n    \t\n    \t\n    \t\n\n\n\n\n    \n",
    "correctedCode": "n = [(1,2),(3,4),(5,6),(7,8)]\n\n\nfor tup1,tup2 in n:\n    print(tup1)\n\n    \t\n    \t\n    \t\n    \t\n    \t\n\n\n\n\n    \n",
    "hasCorrection": false,
    "order": 24
  },
  {
    "id": "while",
    "title": "Contador com while",
    "file": "while.py",
    "category": "Loops",
    "difficulty": "iniciante",
    "concepts": [
      "while",
      "contador",
      "input"
    ],
    "description": "Conte de zero até o número informado.",
    "objective": "Entenda condição, contador e incremento em um laço while.",
    "explanation": "Pare o contador quando encontrar um número par maior que 5.",
    "challenge": "Pare o contador quando encontrar um número par maior que 5.",
    "originalCode": "num = int(input('Digite um número:'))\nx = 0\n\nwhile x <= num: #enquanto o valor de x for maior que zero e menor ou igual ao numero digitado executar código\n  print('x é igual a:',x)\n  x += 1\n # if x == 6: #se x for igual a 3 pare\n  #  print('parando porque encontrei 6')\n  #  break #para o código caso seja verdade\n  #else:\n  #  print('Continuando')\n   # continue",
    "correctedCode": "num = int(input('Digite um número:'))\nx = 0\n\nwhile x <= num: #enquanto o valor de x for maior que zero e menor ou igual ao numero digitado executar código\n  print('x é igual a:',x)\n  x += 1\n # if x == 6: #se x for igual a 3 pare\n  #  print('parando porque encontrei 6')\n  #  break #para o código caso seja verdade\n  #else:\n  #  print('Continuando')\n   # continue",
    "hasCorrection": false,
    "order": 25
  }
];
