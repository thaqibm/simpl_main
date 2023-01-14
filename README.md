# SIMPL Interpreter

## Examples 

```python
(vars [(i 128) (j 0)]
    (while (< j i)
      (print i)
      (set i (divi i 2)))
)
Output:
128
64
32
16
8
4
2
1
```
```python
(vars [(i 0) (to 1000) (sum 0)]
    (while (<= i to)
      (set sum (+ sum i))
      (set i (+ i 1)))
    (print sum)
)
Output:
500500
```

[Playground](https://simpl-app.onrender.com/)
