print('+' * 20)
num = int(input('Digite um número:\n'))
x = 0


while x <= 10:
    print('{} * {:2} = {} '.format(num,x,(num*x)))
    x += 1
print('=' * 20)