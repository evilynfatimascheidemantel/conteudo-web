nome = input("Digite o seu nome: ")
print(f"Olá, {nome}")

qtd_horas = int(input("Digite quantas horas você trabalha:"))
valor_hora = float(input("Digite o seu valor hora: "))

salario = qtd_horas * valor_hora

print()
print(f"O seu salário bruto é R${salario}")

salario_minimo = 1518

if salario > salario_minimo:
    print("Você recebe mais de um salário mínimo")
elif salario == salario_minimo:
    print("Você recebe exatamente um salário mínimo.")
else:
    print("Você recebe menos que um salário mínimo")

taxa_inflacao = 5.53

# O salario mínimo aumenta 100% da taxa de inflação por ano
# O nosso salário aumenta 80% da taxa de inflação por ano

anos = 0
salario_minimo_acm = 0

while salario_minimo_acm <5000.0:
    salario_minimo_acumulado = salario_minimo_acumulado +(salario_minimo*(taxa_inflacao/100))
    anos += 1 # anos = anos + 1

print(f"Para o salário mínimo chegar a R$7075,83 aumentando {taxa_inflacao}% ao ano")
print(f"Precisaremos de {anos} anos")
