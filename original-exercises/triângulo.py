a = int(input('Digite um número:'))
b = int(input('Digite outro número:'))
c = int(input('Digite mais um número:'))

print ('{}\n{}\n{}\n'.format(a,b,c))

if (a == b and b == c ):
    print ('É um triângulo equilátero')
else:
    print('Não é um triângulo equilátero')
