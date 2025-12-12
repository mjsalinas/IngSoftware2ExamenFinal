# React + Vite

# Refactorización: Eliminación de Acoplamiento mediante Patrón Factory Registry

Este proyecto implementa una refactorización del sistema de movimientos financieros para eliminar el acoplamiento entre la UI (React) y las clases concretas del dominio (Deposit, Withdrawal, Transfer, Payment).

Se implementó una Fábrica con Registro (Factory Registry) para centralizar la creación de los movimientos y permitir extensibilidad sin modificar la UI.


# Objetivo de la Refactorización

Antes de la refactorización:

La UI creaba objetos concretos usando new Deposit() o new Withdrawal().
Se usaban estructuras de control como switch(type). La UI conocía todas las clases del dominio → alto acoplamiento. Era imposible agregar un nuevo tipo sin modificar la UI → violación de OCP.cDespués de la refactorización: 
La creación de objetos se delega a MovementFactory.
La UI solo llama:
MovementFactory.create(data)

La UI no necesita modificar código cuando se agrega un nuevo tipo. El sistema queda abierto para extensión, cerrado para modificación (OCP).

# Patrón de Diseño Elegido: Factory Registry

Se utilizó una Fábrica con Registro porque:

# ✔ Reduce acoplamiento

La UI ya no instancia modelos concretos. La lógica de creación está centralizada en un único lugar.

# ✔ Incrementa cohesión

El dominio se encarga de sus propias reglas y construcción. La UI solo se dedica a renderizar.

# ✔ Permite extensibilidad (OCP)

Para agregar un nuevo tipo, solo se registra en la fábrica. Ningún componente de la UI debe 
modificarse.

# Demostración de OCP (Nuevo Tipo: FeeMovement)

Se agregó un nuevo tipo de movimiento: Fee. 


# Instrucciones para correr el proyecto
npm install
npm run dev

