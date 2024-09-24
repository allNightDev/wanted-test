## 과제 설명

1. [Nest](https://github.com/nestjs/nest) framework를 사용하여 과제 구현.
2. Node 버전은 20.9.0 입니다.
3. Database는 mysql9.0 입니다.
4. ORM은 Prisma를 사용했습니다.
5. 앱 실행시 Port 번호는 3000 입니다.
6. Swagger를 추가 했습니다. swagger 주소는 "http://localhost:3000/docs" 입니다.
7. database 생성시 [Database 생성 파일](/wanted-test-create.sql)을 import해도 생성되지만 Prisma cli를 이용해도 생성이 가능합니다.

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

3. database 생성 또는 generate

```bash
# database 생성
$ yarn prisma db push

# database GENERATE
$ yarn prisma generate
```

## 앱 실행

```bash
# 개발 모드
$ yarn start

# 개발:hot-reload
$ yarn start:dev

# 제품 모드
$ yarn start:prod
```

## 추가 설명

1. 원활한 테스트를 위해서 keyword 등록을 만들었습니다.
2. 알림 함수 호출 코드는 keyword 리소스의 [keyword.service](/src/keyword/keyword.service.ts)에 구현했습니다. 실제 알림을 발송하지 않기 때문에 알림 리소스를 생성하지 않았습니다.
3. 테스트 코드는 과제 구현 목록에 없어서 구현하지 않았습니다.
4. 비밀번호 암호화 방식은 SHA-256 알고리즘을 사용했습니다.
