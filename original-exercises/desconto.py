val = float(input('Digite o valor do produto:'))
desc = val * 5/100
total = val - desc

print ('O valor do seu desconto é: R${:.2f}'.format(desc))
print ('O valor do seu produto com desconto é: R${:.2f}'.format(total))
