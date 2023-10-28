---
teaser: /PythonGrammer02/thumbnail.png
category: Python3
title: Python 기초 문법 정리 2편
date: 2023-10-26T00:00:00+00:00
time: 21:37
description: 파이썬 입문 기념 기본 문법들을 정리해보았습니다.
---

![thumbnail](/PythonGrammer02/thumbnail.png)

자 그럼 지난 글에 이어 파이썬 문법 2번째 시작하도록 하겠습니다.

아직 지난 편을 못 보신 분들은 아래 링크로 가셔서 1편 먼저 보고 오시는 것을 추천드립니다.

<a href="https://taehyun-blog.vercel.app/python-grammers-01">👉👉👉파이썬 문법 1편 보러가기</a>

## 3. 조건문 (`if`, `else`, `elif`)

---

```python
if (조건):
    내용
    elif (조건):
        내용
    else:
        내용

# in-line으로 쓰려면?

if (조건): 내용
```

먼저 조건문입니다. `if` 옆에 소괄호 열고 그 안에 해당 조건을 적습니다. 이 때 조건은 기본 `true`를 가집니다. 쉽게 말해 "만약(`if`) ~한다면 이렇개 해, 만약 그게 아니면(`elif`)" 이렇게 하고, 그게 아니라면(`else`) 이렇게 해라고 이해하시면 편합니다.

## 4. 반복문 (`for`, `while`)

---

### 4-1 `for`

- 특정 반복 횟수가 정해진 상태만큼 반복하는 `loop`입니다.

```python
for x in <iterable object>:
    내용

    #ex)
    a = ['a', 'b', 'c']

    for x in a:
        print(x)

    #output
    a
    b
    c
```

#### iterable

- `Iterable`한 객체는 반복 가능한 객체를 의미합니다.

- `string`, `list`, `tuple`, `dict`, `set`, `frozonset` 타입은 모두 `iterable`합니다.

### 4-2 while

- 특정 조건이 만족될 때 까지 계속 반복하는 `loop`입니다.

```python
while <표현식>:
    <statement>

    #ex)
    a = ['a', 'b', 'c']

    while a:
        print(a.pop(-1))

    #output
    c
    b
    a
```

### 4-3 반복문 분기

#### break

- 반목분을 종료하고 해당 로직을 탈출합니다.

- 반복분이 깨지고 바로 다음 코드를 실행합니다.

#### continue

- 해당 반복 회차를 스킵하고 맨위로 올라가서 다음 반복문을 실행합니다.

## 5. 함수(Function)

---

프로그래밍 언어를 한다면 필수죠. 바로 함수입니다. 해당 기능을 추상화할 수 있고, 재사용할 수 있다는 점에서 매우 중요하며, 기능들을 모듈화하고 구현을 통해 큰 목적들을 해결할 수 있습니다.

### 5-1 문법

```python
def <함수명> (<파라미터>):
    내용
```

### 5-2 함수 인자 (arguments)

- 함수수가 실행 될 때 외부에서 받아오는 입력을 의미합니다. 파이썬에서 입력을 제공받는 방법은 여러가지 있습니다.

#### 위치 인자 (Positional Arguments)

제일 기본적인 방법입니다. 함수 정의 부분에 입력 받을 파라미터를 콤마로 구분해 제공하면 함수가 실행되는 부분의 순서에 맞게 해당 파라미터에 입력값이 들어가 됩니다.

> **단, 정의한 파라미터 수보다 적거나 많은 경우는 에러가 발생할 수 있으니 유의하시길 바랍니다.**

```python
def myFunction(a, b, c):
    return print(f'{a}, {b}, {c}')

    myFunction(1, 3, 5)

    #output
    1, 3, 5
```

### 가변 길이 인자 (Variable length arguments)

- 구현하고자 하는 함수의 인자가 미리 주어지지 않은 경우 가변 길이 인자를 사용할 수 있습니다. 사용 밥법은 인자 이름 앞에 `*`를 붙여 컨테이너 타입의 데이터를 풀어내는데`(unpack)` 사용할 수 있습니다. (패킹, 언패킹 관련 내용은 다음에 다뤄보겠습니다.)

```python
t = ('I', 'AM', 'Tuple')
print(*t)

#output
I AM Tuple

def use_variable_args(*args):
	print(args)

 use_variable_args(*t)
('I', 'AM', 'Tuple')
```

## 마무리

---

일단 제가 입문한 파이썬 기초 문법은 여기까지였습니다. 이것 말고도 구글에 찾아보니 엄청 많더라고요... 파이썬 익히는데에는 좀 오래 걸릴거 같습니다...ㅎㅎㅎ 그리고 그 중에 함수라는 부분이 여기에는 다 안나왔지만 뒤에 가변 키워드 인자 등등 내용이 많습니다. 이부분에 대해서는 따로 파이썬 게시물에서 다뤄볼 예정이고 그외에 리스트, 튜플, 딕셔너리등등 여러가지 메서드들도 작성해볼려고 합니다. 이상입니다!
