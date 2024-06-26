# usePreservedCallback

컴포넌트가 mount 되어 있는 동안 인자로 주어진 `callback` 함수의 레퍼런스를 보존합니다.

주어진 `callback`을 React의 `Ref` 로 감싸서 레퍼런스를 보존합니다.

```ts
const callback = usePreservedCallback<Callback>(
  // 레퍼런스를 보존할 함수 (타입: Callback)
  callback
);
```

## Example

```ts
const callback = usePreservedCallback(() => {
  alert('나는 절대로 레퍼런스가 바뀌지 않아');
});

useEffect(() => {
  // 이 Effect는 1번만 호출된다.
  callback();
}, [callback]);
```
