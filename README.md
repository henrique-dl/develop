# Teste técnico WR IT

<hr>
<h4 align="center">
  Backend - Php Laravel 9
</h4>
<hr>

# Setup projeto
- git clone https://github.com/henrique-dl/teste-tecnico-writ.git
- cd teste-tecnico-writ/backend
- cp .env.example .env

# Atualizar variáveis de ambiente
APP_NAME=teste-tecnico-writ
APP_URL=http://localhost:8000

# Atualizar conexão com banco

DB_CONNECTION=mysql<br/>
DB_HOST=127.0.0.1<br/>
DB_PORT=3306<br/>
DB_DATABASE=writ<br/>
DB_USERNAME=root<br/>
DB_PASSWORD=<br/>

# Instalar/gerar aplicação
- composer install
- php artisan key:generate
- php artisan migrate


## API Aluno
- [X] Cadastrar Aluno
  ```
    POST - http://127.0.0.1:8000/api/alunos                                                   
      {
          "nome": "teste1",
          "email": "teste@email.com",
          "dt_nascimento": "2022-01-02"
      }


- [X] Listar Alunos
  ```
    GET - http://127.0.0.1:8000/api/alunos/

- [X] Listar Aluno
  ```
    GET - http://127.0.0.1:8000/api/alunos/{id}
- [X] Atualizar Aluno
  ```
    PUT - http://127.0.0.1:8000/api/alunos/{id}
      {
          "name": "testeatualiza",
          "email": "teste@testeatualiza.com",
          "dt_nascimento": "2022-01-02"
      }
  
- [X] Excluir Aluno
  ```
    DELETE - http://127.0.0.1:8000/api/alunos/{id}

## API Curso

- [X] Cadastrar Curso
  ```
    POST - http://127.0.0.1:8000/api/cursos
      {
          "titulo": "cursoteste",
          "descricao": "descricaoteste"
      }
- [X] Listar Cursos
  ```
    GET - http://127.0.0.1:8000/api/cursos/

- [X] Listar Curso
  ```
    GET - http://127.0.0.1:8000/api/cursos/{id}
- [X] Atualizar Curso
  ```
    PUT - http://127.0.0.1:8000/api/cursos/{id}
      {
          "titulo": "tituloatualiza",
          "descricao": "descricaoatualiza"
      }

- [X] Excluir Curso
  ```
    DELETE - http://127.0.0.1:8000/api/cursos/{id}
## API Matricula
- [X] Matricular Aluno a um curso
  ```
    POST - http://127.0.0.1:8000/api/matricula
      
          "id_alunos": id-do-aluno,
          "id_cursos": id-do-curso
      }
  
- [X] Excluir Matricula
  ```
    DELETE - http://127.0.0.1:8000/api/matricula/{id-da-Matricula}

<hr>
<h4 align="center">
  Frontend - React Tailwindcss Axios
</h4>
<hr>

OBS: Algumas telas possuem somente navegação e layout, outras possuem funcionalidades conectadas ao backend

# Setup do projeto
- cd teste-tecnico-writ/frontend
- npm install
- npm run dev

# Telas
![image](https://user-images.githubusercontent.com/44511471/173171530-4b54fd5c-fe4e-4292-9f5c-28c43383261b.png)

![image](https://user-images.githubusercontent.com/44511471/173171539-e7725a95-0f7b-46cc-832a-1696b9bd2787.png)

