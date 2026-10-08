dias = float(input('Quantos dias você fixou com o carro?'))
km = float(input('Quantos km rodados?'))

diarias = 60 * dias
kmr = km * 0.15

total = diarias + kmr

print ('Você permaneceu com o veículo por {} dias! valor: R${}'.format(dias,diarias))
print ('Total de km rodados:{} KM valor: R${}'.format(km,kmr,))
print ('O valor total a pagar é:R${}'.format(total))