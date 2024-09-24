## 과제 설명

1. [Nest](https://github.com/nestjs/nest) framework를 사용하여 과제 구현.
2. Database는 mysql9.0을 사용했습니다.
3. ORM은 Prisma를 사용했습니다.
4. 앱 실행시 Port 번호는 3000 입니다.
5. Swagger 연동 했습니다. swagger 주소는 "http://localhost:3000/docs" 입니다.
6. database 생성시 [Database 생성 파일](/wanted-test-create.sql)을 import해도 생성되지만 Prisma를 이용하여 생성 역시 가능합니다.

## 앱 설치 방법

패키지 매니저는 npm보다 yarn을 사용해주시 바랍니다.

```bash
# yarn 설치
$ npm install -g yarn

# node_modules 설치
$ yarn install
```

## Prisma 설정

1. [Prisma Schema 파일](/prisma/schema.prisma)로 이동합니다. (경로 /prisma/schema.prisma)
2. 8라인 url 주소를 변경해주세요 (mysql://user:password@databaseUrl:port/database_name)

- 예제: mysql://root:test1234@localhost:3306/wanted-test

```bash
# database 생성
$ yarn prisma db push

# database GENERATE
$ yarn prisma generate
```

## 앱 실행

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```
