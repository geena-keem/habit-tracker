오브젝트 할당
기본 정리
변수에 문자열, 숫자와 같은 원시형 데이터를 할당하게 되면 데이터 자체가 변수에 할당되지만,
오브젝트를 변수에 할당하면 변수에는 오브젝트가 메모리에 들어있는 주소인, 참조값이 할당되어져요.
<br />
<br />
예를 들면,

```javascript
const num = 2;
const numObj = { num: 2 };
```

위에 캡쳐된 코드를 보시면 num 변수에는 숫자 2 자체가 들어 있지만,
<br />
<br />
numObj에는 { num: 2 } 오브젝트가 메모리에 들어 있는 주소인, 참조값이, 예를 들어 주소가 x1234 라고 한다면, x1234가 할당되어져요.

```javascript
const num = 2; // num에는 숫자 2가 들어 있고
const numObj = { num: 2 }; // numObj에는 x123 주소가 들어 있음
```

위와 같이 나타낼 수 있어요 :)

오브젝트를 가리키는 변수를 다른 변수에 할당하면?

위 코드를 보시면 총 몇개의 오브젝트가 메모리에 생성 되어졌을까요? - 바로 두개 입니다 :)

총 몇개의 변수가 메모리에 생성 되어졌을까요? - 바로 세개 입니다

코드를 위에서 부터 읽어 보면

id가 1인 오브젝트가 메모리에 생성되고 (참조값이 x123 이라고 할께요)

그 참조값이 변수 a에 할당 되어집니다. 즉, a에는 x123이 들어 있겠죠?

id가 2인 오브젝트가 메모리에 생성되고 (참조값이 x234 라고 할께요)

그 참조값이 변수 b에 할당 되어집니다. 즉, b에는 x234가 들어 있겠죠?

여기서는 b변수를 c에 할당하니, b변수에 들어있던 참조값 x234가 c변수에 복사되어져서 할당이 됩니다.

즉, c변수 에는 b변수와 마찬가지로 x234가 들어 있겠죠?

총, 정리를 해보자면,

(메모리 주소값은 제가 임의로 설정한 값으로 실제 주소는 달라요)

변수에 할당된 값들을 살펴보면 모두 오브젝트를 가리키고 있는 참조값이 들어 있고,

b와 c변수는 id가 2인 동일한 오브젝트를 가리키고 있겠죠? :)

이제 한번 코드를 더 작성해 볼께요.

여기서 b 변수를 이용해서 b 변수가 가리키고 있는 오브젝트의 count 값을 변경하고,

b와 c 변수를 출력하면 어떻게 될까요?

두둥탁! 모두 예상 하셨죠~?

바로 동일한 id가 2인 그리고 count가 1인 오브젝트를 출력합니다.

b와 c는 동일한 오브젝트를 가리키고 있기 때문에 b를 통해서든 c를 통해서든 오브젝트를 수정하게 되면

b와 c는 수정된 내용을 바로 적용받게 되죠.

이것들은 다 오브젝트는 값(Value) 자체가 변수에 저장되는 것이 아니라, 참조값(Reference)이 저장되기 때문이예요.

그래서 아무리 오브젝트 변수를 const라고 상수 변수로 저장해 두어도, 참조값 자체는 바꿀 수 없지만 (다른 오브젝트로 다시 대체 할 순 없지만) 오브젝트 자체의 데이터는 수정이 가능한 이유중에 하나죠.

또, 오브젝트 변수를 함수 인자로 전달해서 함수 안에서 오브젝트를 변경해도, 함수 밖에서 다시 그 오브젝트의 변경사항을 볼수 있구요.

이 모든 것들이 변수에는 오브젝트의 참조값이 들어 있게 때문이예요.

배열로 연결해서 생각해 보면? 🚀
자, 이제 핵심 포인트로 들어 갑니다.

이걸 설명하기 위해서 기본 내용을 정리해 본거예요 :)

여기서 생성된 오브젝트는 몇개 일까요? - 바로 3개 입니다 :)

id가 1인 오브젝트 하나, id가 2인 오브젝트 하나 그리고 배열 자체의 오브젝트 하나, 총 3개

array[0]은 {id: '1', count: 0} 을 가리키게 되고, 결국 arry[0] 에는 id가 1인 오브젝트의 참조값이 들어있겠죠? x123

array[1]은 {id: '2', count: 0} 을 가리키게 되고, 결국 arry[1] 에는 id가 2인 오브젝트의 참조값이 들어있겠죠? x234

그리고 array 배열 자체가 가리키고 있는 것은 생성된 배열의 오브젝트 주소값인 x567 이 될꺼예요

자, 이제 핵심 포인트 코드!

array2와 array3 각각의 변수에는 어떤 값이 할당 되어져 있을까요?

한번 노트에 정답을 적어 보세요 🧐 (새로운 주소값은 그냥 여러분들이 임의로 만들어 보세요)

.

.

.

.

.

정답은!

array2

array2에는 단순히 array 변수를 할당하니, array에 들어 있던 참조값인 x567이 그대로 할당됩니다.

즉, array와 array2는 동일한 배열 오브젝트를 가리키므로,

한쪽에서 id가 1인 오브젝트의 count를 변경해도 둘다 변경된 내용을 볼 수 있고,

한쪽에서 배열에 새로운 아이템을 추가 해도 둘다 변경된 내용을 볼 수 있죠. 둘다 총 3개의 아이템이 들어 있겠죠?

array3

그렇다면 array3은 어떨까요?

array3은 단순히 참조값을 가지고 온 것이 아니라,

Spread Operator 를 이용해서 array에 있는 모든 아이템들을 새로운 배열로 가지고 와서 새로운 배열을 만들게 되어요. 그래서 완전히 새로운 배열 오브젝트를 가리키게 되죠 :)

하지만!! 이 Spread Operator는 배열 안의 모든 오브젝트 내용들을 일일이 복사해서 새로운 것을 만드는 것이 아니라, 오브젝트는 그대로 두고 array 배열을 빙글 빙글 돌면서 각각의 아이템들의 참조값을 복사 하게 되어요.

즉 array3배열안에는 array안에 들어 있는 동일한 오브젝트들이 들어 있구요. 다만 배열 오브젝트 자체만!! 새롭게 만들어지죠.

그래서 array3은 새롭게 만들어진 배열 오브젝트 x999 참조값이 들어 있고, array3[0]에는 x123이, array3[1]에는 x234가 들어 있어요.

array에서 id가 1인 오브젝트의 count를 변경해면 셋다(array, array2, array3) 변경된 내용을 볼 수 있어요. (왜냐면 모두 배열 첫번째 요소는 참조값 x123이 가리키고 있는 id가 1인 동일한 오브젝트를 가리키고 있기 때문이죠)

대신, array 배열에 새로운 아이템을 추가 하면 array2는 array와 동일한 배열을 가리키고 있으므로, 새로운 아이템이 추가된걸 확인할 수 있지만, array3에서는 새로 추가된 아이템을 볼 수 없어요. array3는 새로운, 엄연히 다른 배열 오브젝트 (물건들을 담고 있는 껍데기, 컨테이너) 이기 때문이예요

- 직접 코드를 작성하면서, 눈으로 확인해 보세요 :)

- Spread Operator는 Shallow-cloning을 합니다. 🚨

배열안에 있는 모든 오브젝트 또 그 안에 들어 있을 수 있는 오브젝트들까지 모두 다 한땀 한땀씩 새로운 것으로 바꿔 주는것이 아니라, 단순히 제일 상위의 배열 껍데기만 새로운 껍데기로 바꿔주고 안의 오브젝트는 예전의 그 것을 참조값을 복사해 와요.

Spread Operator를 이용하면 처음에는 안에 들어 있는 내용물들을 복사해 오지만 (값이 아니라 레퍼런스, 참조값만 복사해 오죠!)

배열 자체는 새로운 것을 만들기 때문에 배열에 아이템을 삭제 하거나, 추가 하면 배열의 내용은 달라질 수 있어요.
