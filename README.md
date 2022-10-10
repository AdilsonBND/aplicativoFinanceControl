<h1 align="center">Aplicativo Finance Control</h1>
<div align="center">
  <img src="https://github.com/AdilsonBND/aplicativoFinanceControl/blob/main/Screens%20App/main.png" width="25%"  />
</div>

<pre align="center">Como executar ?</pre>


<div>
  <img align="right" src="https://github.com/AdilsonBND/aplicativoFinanceControl/blob/main/Screens%20App/report.png" width="25%"  />
  <img align="right" src="https://github.com/AdilsonBND/aplicativoFinanceControl/blob/main/Screens%20App/newEntry.png" width="25%"  />
</div>
 
### Instalação React-native

Para executar o aplicativo é necessário ter instalado o React-native CLI disponível na documentação do fabricante : https://reactnative.dev/docs/environment-setup.

Após instalação do react-native já com um novo projeto criado, copie a pasta SRC deste projeto para dentro do novo projeto criado.
Substitua os arquivos index.js e package.json do novo projeto criado pelo disponibilizado neste repositório.
Agora será necessário alterar o arquivo android/app/build.gradle do novo projeto criado.

<pre>
project.ext.react = [
    enableHermes: true,  // alterar para false
]
</pre>

Agora basta instalar as dependências com o comando:
* npm install

Abra o emulador android de sua preferência ou conecte seu dispositivo android com permissão para depuração e inicie o projeto:

* npx react-native run-android







                                                                                                            
                                                                                                              


