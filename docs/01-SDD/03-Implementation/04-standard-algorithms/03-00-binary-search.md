# Binary Search

!!! info "What You Need to Know"

    Describe, exemplify and implement:

    * Binary search

    Read, trace and explain code that uses binary search.

## What is Binary Search?

Binary search is a searching algorithm that repeatedly divides a sorted list in half until the target value is found.

Unlike a linear search, binary search:

* Requires the data to be sorted
* Eliminates half of the remaining values after each comparison
* Is significantly faster for large datasets

!!! warning "Important"

    Binary search only works correctly on sorted data.

---

## How Binary Search Works

Suppose we want to find the value 23.

```text
[3] [7] [12] [18] [23] [29] [34] [41] [50]
                 ↑
               Middle
```

1. Find the middle value.
2. Compare the middle value with the target.
3. If the target is smaller, search the left half.
4. If the target is larger, search the right half.
5. Repeat until the value is found.

## Worked Example

Suppose we want to find the value 34.

```text
[3] [7] [12] [18] [23] [29] [34] [41] [50]
```

### Step 1

Middle value = 23

34 is greater than 23, so search the right half.

```text
[29] [34] [41] [50]
```

### Step 2

Middle value = 34

Target found.


The search is complete.

### Why Was 34 Accepted if it Was Not the Middle Value?

A common misunderstanding is that binary search is looking for a value that is always in the middle of the original list.

This is not true.

Binary search repeatedly reduces the search area and then calculates a new middle position.

### Step 1

```text
Index:  0  1   2   3   4   5   6   7   8
Value: [3][7][12][18][23][29][34][41][50]
```

The algorithm starts with:

```python
low = 0
high = 8
mid = (low + high) // 2
mid = 4
```

The middle position is index 4, which contains the value 23.

Since 34 is greater than 23, everything to the left of 23 can be ignored.

### Step 2

The remaining search area is:

```text
Index:  5   6   7   8
Value: [29][34][41][50]
```

Notice that there are now four values remaining.

With an even number of values there is no single middle value.

Binary search solves this problem using integer division (`//`), which always rounds down.

```python
mid = (5 + 8) // 2
mid = 6
```

Index 6 contains the value 34.

The target has been found.

### Important

Binary search always calculates the middle **index**, not the middle value.

If there are two possible middle positions, integer division causes the algorithm to choose the lower index.

This guarantees that the search area becomes smaller every time the algorithm runs.

## Why Must Data Be Sorted?

Binary search works by eliminating half of the remaining data after each comparison.

This is only possible when the data is stored in order.

For example, if the middle value is 23 and the target value is 34, binary search knows that 34 must be to the right of 23.

Without sorted data, this assumption would be incorrect and the algorithm could miss the target value completely.

## Binary Search of Integers

=== "Python"

    ```python linenums="1"
    numbers = [3, 7, 12, 18, 23, 29, 34, 41, 50]

    def binary_search(array, target):
        low = 0
        high = len(array) - 1

        while low <= high:
            mid = (low + high) // 2

            if array[mid] == target:
                return mid
            elif target < array[mid]:
                high = mid - 1
            else:
                low = mid + 1

        return -1

    print(binary_search(numbers, 23))
    ```

## Trace Table Example

Searching for the value 34:

| Low | High | Mid | Value at Mid | Action |
|------|------|------|-------------|---------|
| 0 | 8 | 4 | 23 | Search right half |
| 5 | 8 | 6 | 34 | Found |

Trace tables are commonly used to explain how binary search works step by step.

=== "Explanation"

    `low and high`
    : Store the current search boundaries.

    `mid`
    : Stores the middle position.

    `Target Found`
    : Return the index immediately.

    `Target Smaller`
    : Search the left half of the list.

    `Target Larger`
    : Search the right half of the list.

---

## Binary Search of Strings

=== "Python"

    ```python linenums="1"
    names = ["Alice", "Charlie", "Emma", "Jack", "Olivia", "Sophia", "Zach"]

    def binary_search(array, target):
        low = 0
        high = len(array) - 1

        while low <= high:
            mid = (low + high) // 2

            if array[mid] == target:
                return mid
            elif target < array[mid]:
                high = mid - 1
            else:
                low = mid + 1

        return -1

    print(binary_search(names, "Olivia"))
    ```

## Binary Search of an Array of Records

An array of records is still a one-dimensional sequence. The records must be sorted by the same field that the binary search compares.

```python title="Search Records by Name" linenums="1"
from dataclasses import dataclass


@dataclass
class Pupil:
    name: str
    score: int


# The records are already sorted by name.
pupils = [
    Pupil("Anna", 68),
    Pupil("Ben", 81),
    Pupil("Cara", 74),
    Pupil("David", 59),
    Pupil("Eilidh", 77)
]


def binary_search_by_name(pupils, target):
    low = 0
    high = len(pupils) - 1

    while low <= high:
        middle = (low + high) // 2

        if pupils[middle].name == target:
            return middle
        elif target < pupils[middle].name:
            high = middle - 1
        else:
            low = middle + 1

    return -1


position = binary_search_by_name(pupils, "Cara")

if position != -1:
    print(pupils[position])
else:
    print("Pupil not found")
```

The algorithm compares the `name` field but returns the position of the complete record. If the program searched by `score` instead, the records would first need to be sorted by `score`.

## Advantages and Disadvantages

### Advantages

* Faster than linear search for large datasets
* Reduces the number of comparisons required
* Efficient when data is already sorted

### Disadvantages

* Requires data to be sorted first
* More complex to implement than linear search
* Less efficient for very small datasets

---

## Summary

| Feature | Binary Search |
|----------|--------------|
| Data Sorted | Required |
| Method | Repeatedly divides data in half |
| Speed | Fast for large datasets |
| Complexity | More complex than linear search |

Binary search completes the algorithm sequence. Bubble sort or insertion sort can prepare unsorted data, provided the sort and search use the same value or record field.
