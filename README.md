# Flux Todo Example

## ⚙️ 실행
```
npm install
npm run start
```

## 🗂 폴더 구조 
```
src
├── index.js
├── App.js
├── container
│   └── AppContainer.js
├── store
│   ├── Counter.js
│   ├── Todo.js
│   ├── TodoActions.js
│   ├── TodoActionTypes.js
│   ├── TodoDispatcher.js
│   └── TodoStore.js
└── components
    └── Footer.js
    └── Main.js
    └── TodoEditor.js
```


## 🌟 Flow of data

![](https://i.imgur.com/qbDb2GE.png)

flux에서의 데이터 흐름은 **단방향**이다. 
1. 뷰가 디스패쳐에게 액션을 전달한다.
2. 디스패쳐는 액션을 모든 스토어에게 전달한다.
3. 스토어는 액션을 처리하고, 데이터를 뷰에게 전달한다.
4. 뷰는 새로운 데이터를 리렌더링한다.

## 🌟 flux-concepts

flux는 4가지 파트로 구성된다.

- Dispatcher
- Store
- Action
- View

### 📍 Dispatcher

- **디스패쳐는 액션을 받아서, 그 액션을 디스패쳐에 등록된 스토어에 디스패치한다**.
- 모든 스토어는 모든 액션을 받는다. 
- 애플리케이션 마다 하나의 싱글턴 디스패쳐가 있다.
- 예시
    - 유저가 타이틀을 입력하고 엔터를 친다.
    - 뷰가 이벤트를 받아서, "add-todo" 액션을 디스패치한다.
    - 모든 스토어는 이 액션을 받게 된다.

### 📍 Store

- **스토어는 애플리케이션의 데이터를 담고 있다**.
- 스토어는 애플리케이션의 디스패쳐에 등록하여, 액션을 받을 수 있도록 한다.
- 예시
    - 스토어는 "add-todo"액션을 받는다.
    - 스토어는 이 액션이 관련 있는지를 확인하고, todo list에 todo를 추가한다.
    - 스토어는 데이터를 업데이트하고, 'change' 이벤트를 전파한다.

### 📍 Actions

- **액션은 애플리케이션의 내부 API를 정의한다**.
- 액션은 'type'이라는 필드와 여러 데이터를 갖고 있는 단순한 객체이다.
- 액션은 의미있고, 설명이 잘 되어있는 네이밍이어야 한다.
- 액션은 그 액션의 구체적인 구현에 대해서는 설명하지 않아야 한다.
    - 액션의 네이밍은 'delete-user' 정도로 사용하면 된다. 'delete-user-id', 'clear-user-data', 'refresh-credentials'는 너무 구체적일 수 있다. 
    - 모든 스토어는 액션을 받아서 그 스토어의 방식대로 'delete-user' 액션을 처리하게 된다.
    
- 예시
    - 유저가 'delete'를 클릭하면, "delete-user" 액션을 디스패치하게 된다.
    
        ```
          {
            type: 'delete-todo',
            todoID: '1234',
          }
        ```

### 📍 Views

- 스토어에 있는 데이터는 뷰에서 보여지게 된다.
- **뷰에서 스토어에 있는 데이터를 사용하면, 뷰는 그 스토어에서 발생하는 `change` 이벤트를 구독하게 된다.**
- 따라서, 스토어가 change 이벤트를 전파하면, 뷰는 새로운 데이터를 받아서 리렌더링하게 된다.
- 유저가 애플리케이션의 인터페이스와 상호작용하는 과정에서, 뷰가 액션을 디스패치하게 된다.
- 예시
    - 메인 뷰가 TodoStore를 구독한다.
    - 뷰는 Todo list를 가져와서 렌더링한다. 
    - 유저가 타이틀을 입력하면, 뷰는 디스패쳐에게 액션을 디스패치하라고 알려준다.
    - 모든 스토어가 디스패치된 액션을 받는다.
    - TodoStore는 액션을 처리하고, 내부의 데이터 구조에 새로운 Todo를 추가한다.
    - TodoStore는 `change` 이벤트를 전파한다.
    - 메인 뷰는 `chagne` 이벤트를 듣고 있다가, 이벤트가 들어오게 되면, 새로운 데이터를 TodoStore에서 가져온다. 그리고 그 새로운 Todo list를 리렌더링한다.


    

## 🌟 Best Practices

### Stores

- 데이터를 캐싱하기
- 데이터에 대한 public getter를 두기
- 절대 public setter를 두지 않기
- 디스패쳐에서 특정한 액션에 반응하기
- 데이터를 변경시켰을 때, 항상 `change` 이벤트를 전파하기
- dispatch 하는 동안에만 change 이벤트를 전파하기


### Actions

- 유저의 액션에 대해 설명하기
    - use "select-page" not "set-page-id"

### Containers

Flux app에서 Flux에 대해 알고 있는 곳은 container 가 유일하다.
따라서, 이 컨테이너에 콜백을 정의하여, View에게 내려주어야 한다.
뷰는 액션을 직접적으로 dispatch하기 않고, 이렇게 전달받은 액션을 dispatch하게 된다.

- 주요한 일은 스토어에서 정보를 가져와서 그 state에 저장한다.
- `props`가 없고, UI 로직도 없다.

### Views

- 컨테이너가 컨트롤하는 리액트 컴포넌트이다.
- 모든 UI와 렌더링 로직이 있다.
- props로 모든 정보와 콜백을 받는다.

