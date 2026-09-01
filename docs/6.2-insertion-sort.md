# Insertion Sort

!!! info "What You Need to Know"

    You must be able to describe, exemplify and implement insertion sort, and read and explain code that uses it.

## What Is Insertion Sort?

Insertion sort builds a sorted section at the beginning of an array. Starting with the second element, it:

1. stores the current value
2. shifts larger values in the sorted section one position to the right
3. inserts the stored value into the gap
4. repeats for every remaining element

!!! note "Shift, Then Insert"

    This implementation shifts elements to make a gap. It does not repeatedly swap neighbouring values like bubble sort.

## Sorting a 1D Array

```python title="Insertion Sort a 1D Array" linenums="1"
scores = [7, 2, 5, 3, 4]

for index in range(1, len(scores)):
    current_score = scores[index]
    position = index - 1

    while position >= 0 and scores[position] > current_score:
        scores[position + 1] = scores[position]
        position -= 1

    scores[position + 1] = current_score

print(scores)
```

Output:

```text
[2, 3, 4, 5, 7]
```

## How the Variables Work

| Variable | Purpose |
|---|---|
| `index` | Selects the next element from the unsorted section |
| `current_score` | Temporarily stores the value being inserted |
| `position` | Moves backwards through the sorted section |

## Sorting Parallel Arrays

When parallel arrays are sorted, every corresponding value must move with the sort key:

```python title="Sort Parallel Arrays by Score" linenums="1"
names = ["Anna", "Ben", "Cara"]
scores = [85, 72, 90]

for index in range(1, len(scores)):
    current_score = scores[index]
    current_name = names[index]
    position = index - 1

    while position >= 0 and scores[position] > current_score:
        scores[position + 1] = scores[position]
        names[position + 1] = names[position]
        position -= 1

    scores[position + 1] = current_score
    names[position + 1] = current_name

for index in range(len(names)):
    print(names[index], scores[index])
```

## Sorting an Array of Records

An array of records is easier to manage because each complete record moves as one element:

```python title="Sort Records by Score" linenums="1"
from dataclasses import dataclass


@dataclass
class PupilRecord:
    name: str
    score: int


pupils = [
    PupilRecord("Anna", 85),
    PupilRecord("Ben", 72),
    PupilRecord("Cara", 90)
]

for index in range(1, len(pupils)):
    current_pupil = pupils[index]
    position = index - 1

    while position >= 0 and pupils[position].score > current_pupil.score:
        pupils[position + 1] = pupils[position]
        position -= 1

    pupils[position + 1] = current_pupil

for pupil in pupils:
    print(pupil.name, pupil.score)
```

The `score` field is compared, but the complete `PupilRecord` is shifted and inserted.

## Bubble Sort Compared with Insertion Sort

| Bubble sort | Insertion sort |
|---|---|
| Repeatedly compares neighbours | Compares the current value with the sorted section |
| Swaps values that are out of order | Shifts values, then inserts the current value |
| Largest unsorted value moves to the end after a pass | Sorted section grows from the beginning |

Both algorithms produce sorted data suitable for binary search.

**Next:** [Binary Search](6.3-binary-search.md)
