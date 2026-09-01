# Bubble Sort

!!! info "What You Need to Know"

    You must be able to describe, exemplify and implement bubble sort, and read and explain code that uses it.

## What Is Bubble Sort?

Bubble sort repeatedly compares neighbouring elements. If they are in the wrong order, it swaps them. After each pass, the largest unsorted value has moved to its correct position at the end of the array.

```python title="Bubble Sort a 1D Array" linenums="1"
numbers = [7, 2, 5, 3, 4]

for pass_number in range(len(numbers) - 1):
    for index in range(len(numbers) - 1 - pass_number):
        if numbers[index] > numbers[index + 1]:
            temporary = numbers[index]
            numbers[index] = numbers[index + 1]
            numbers[index + 1] = temporary

print(numbers)
```

Output:

```text
[2, 3, 4, 5, 7]
```

## How the Loops Work

- The outer loop controls the passes through the array.
- The inner loop compares neighbouring elements.
- `pass_number` shortens each pass because the values at the end are already sorted.
- The entire array is sorted when all required passes are complete.

## Sorting Records

The same algorithm can compare a field in an array of records. When two fields are out of order, the **complete records** must be swapped.

```python title="Bubble Sort Records by Score" linenums="1"
from dataclasses import dataclass


@dataclass
class PupilRecord:
    name: str
    score: int


pupils = [
    PupilRecord("Anna", 68),
    PupilRecord("Ben", 81),
    PupilRecord("Cara", 74)
]

for pass_number in range(len(pupils) - 1):
    for index in range(len(pupils) - 1 - pass_number):
        if pupils[index].score > pupils[index + 1].score:
            temporary = pupils[index]
            pupils[index] = pupils[index + 1]
            pupils[index + 1] = temporary

for pupil in pupils:
    print(pupil.name, pupil.score)
```

The algorithm compares the `score` field but swaps each complete record. The resulting array is ordered by `score` and is ready for a binary search using that same field.

**Next:** [Insertion Sort](6.2-insertion-sort.md)
