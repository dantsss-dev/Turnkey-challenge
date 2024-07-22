# Turnkey-challenge

## Dependencias Necesarias
para lograr correr el proyecto primero que nada se necesita tener instalado **NODE** y **.NET** para lograr correr los comandos, dejare los respectivos links si aun no tiene alguno instalado:
- https://dotnet.microsoft.com/es-es/download
- https://nodejs.org/en/download/prebuilt-installer

## Build y ejecucion del proyecto
para correr el proyecto primero debemos instalar las dependencias necesarias, iremos paso a paso para hacerlo de manera correcta

- Primero abriremos el proyecto en visual studio code o cualquier IDE, dentro abriremos la consola de comandos y nos aseguramos de estar en la ruta el proyecto **Turnkey-challenge**
  
![imagen](https://github.com/user-attachments/assets/c07dd957-0574-418c-b445-10b68eed15de)

- Una vez ahi procederemos a ejecutar el commando para instalar las dependencias del backend
```
dotnet build
```

- Lo siguiente sera empezar a correr el backend con el siguiente comando
```
dotnet run
```

-Con el backend corriendo ahora necesitamos instalar las dependencias del frontend, en una nueva consola y sin cerrar la consola donde tenemos corriendo nuestro backend, procederemos a posicionarnos en la ruta **Turnkey-challenge/frontend**
```
cd frontend
```
![imagen](https://github.com/user-attachments/assets/ec3b7b50-8862-4c1d-b2e2-72be4b627f62)



-Instalamos las dependencias necesarias para que nuestro proyecto funcione con el siguiente comando
```
npm install
```

-despues de instalar las dependencias del frontend procederemos a correrlo utilizando el siguiente comando
```
npm run dev
```

- finalmente abrimos la pagina del proyecto solo hay que pulsar alt + click izquierdo en el link para abrirlo en nuestro navegador
![imagen](https://github.com/user-attachments/assets/948a3afd-096e-4534-8311-3bbb80a4c4b5)

