# Bubble Sort with 1d array

Create a program that will store 10 numbers - 23, 13, 24, 7, 8, 5, 24, 12, 9, 10.  It will sort these 10 numbers, displaying both the unsorted and sorted list.

Top Level Algorithm & Data Flow
	1. Initialise array   OUT: myArray[10]
	2. Display Array    IN: myArray[10]
	3. Sort Array   IN: myArray[10]      OUT: myArray[10]
	4. Display Array.   IN: myArray[10]

# Bubble Sort with 2d array 

Create a 2d array called capitalCities[36][3] to store the 'name', 'area' and 'population'  Initialise the 2d array to be of type string. 
 
Your program will read in the csv file into the 2d array. It will sort the data on area and on population, displaying the unsorted and sorted lists. 
 
Top Level Algorithm 
<table>
  <thead>
    <tr>
      <th>Step</th>
      <th>Process</th>
      <th>Input</th>
      <th>Output</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Initialise 2D array</td>
      <td>—</td>
      <td><code>capitalCities[][]</code></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Read in capital file</td>
      <td><code>capitalCities[][]</code></td>
      <td><code>capitalCities[][]</code></td>
    </tr>
    <tr>
      <td>3</td>
      <td>Display array</td>
      <td><code>capitalCities[][]</code></td>
      <td>—</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Sort array by area</td>
      <td><code>capitalCities[][]</code></td>
      <td><code>capitalCities[][]</code></td>
    </tr>
    <tr>
      <td>5</td>
      <td>Display array</td>
      <td><code>capitalCities[][]</code></td>
      <td>—</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Sort array by population</td>
      <td><code>capitalCities[][]</code></td>
      <td><code>capitalCities[][]</code></td>
    </tr>
    <tr>
      <td>7</td>
      <td>Display array</td>
      <td><code>capitalCities[][]</code></td>
      <td>—</td>
    </tr>
  </tbody>
</table>
 
Be careful, you will have to do explicit data conversion/casting in this task to convert from a String to real/integer to do the comparisons. 

1d Array Bubble Sort 

Kate has written some pseudocode to sort an array of data into ascending order. The algorithm she wrote is a version of bubble sort. 
The first three statements and the last statement of the algorithm are presented below: 
```python
items = [3, 8, 1, 10, 23, 78, 12]
num_items = len(items)
temp = 0

# Add the missing code statements here
for index in range(num_items - 1):
    pass
```

Create Kate’s program.

# 1d Array Bubble Sort

A primary school is asking pupils to measure the outside temperature every day at noon. The temperatures will be recorded and sorted into ascending order. 
	
The procedure will use a bubble sort algorithm to sort the following data, stored in an array. 
	 
		[28.2, 24.8, 21.3, 25.0, 23.4, 27.1, 25.0] 
		 
(a)	At the end of which pass of the algorithm would the state of the array be as shown below? 
	[24.8, 21.3, 25.0, 23.4, 27.1, 25.0, 28.2] 
	 
(b)	Create the program, showing the state of the array at the end of each pass. 

# 1d Array Bubble Sort

Kofi has written a program to sort an array of data into descending order. The algorithm is a version of bubble sort and is shown in pseudocode below. 

```python
# Initialise variables
items = [28, 40, 21, 25, 30, 27, 25]

num_items = len(items)
temp = 0
pass_number = 1
swapped = True

# Continue while swaps have been made and passes remain
while swapped and pass_number <= num_items - 1:
    swapped = False

    for index in range(num_items - 1):
        # Check whether adjacent items are out of order
        if items[index] > items[index + 1]:
            # Swap the items
            temp = items[index]
            items[index] = items[index + 1]
            items[index + 1] = temp

            swapped = True

    pass_number += 1

print(items)
```
What is the error? 
	
Create the working program following the pseudocode while fixing the error. 

# 2d Array Bubble Sort 

The game includes a high score table with the names and scores of the top five players stored in a 2-D arrays. 


 
 
(a)	Create your program using a 2d array sorting on the score column. 
(b)	Edit your program to show the state of the 2d array at the end of each pass. 
(c)	Explain why the bubble sort has made another pass through the list, even  though it is sorted. 


# 2d Array Bubble Sort 
A company salesperson is given a list of six locations to be visited. The company’s IT department has given the salesperson an app for their smartphone to plan the journeys. The salesperson enters the locations into the app, which calculates the distance in miles to each location from the office. Within the app, the locations and distances are stored in a 2d array.  The distances are displayed, as shown below. 

 <image>
 
The app has an option to sort the locations into ascending order of distance. The app uses the bubble sort algorithm to do this. 
(a)	Create the program to display the sorted 2d array. 
(b)	Edit your program to include a counter which will display the number of passes it  
has taken to sort the list. 

# Array of Records Bubble Sort 

During testing of the search facility, the following list of articles is produced. 

 <table>
	Article Title 		Summary 				Date 		Issue 
	Processors 		Recent processor development 	               06/05/2016 	214 
	Printers 		Inkjet or Laser? 			               25/03/2016 	208 
	Smartphones 		Control your phone by thought 	               13/05/2016 	215 
</table>
	 
In your program, create a record to store the article details above. 
Create an array of records to store the 3 articles.  Insert the data into the array. 
Create a method to run a bubble sort on the array of records and display the sorted array. 

# Array of Records Bubble Sort 

Sample records from the applicants who have purchased tickets to a music festival table  
are shown below. 
     
<table>
  <thead>
    <tr>
      <th>Reference Number</th>
      <th>Last Name</th>
      <th>First Name</th>
      <th>Contact Number</th>
      <th>Contact e-mail</th>
      <th>Number of Tickets</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>1234</td>
      <td>Smith</td>
      <td>John</td>
      <td>09987654321</td>
      <td>js@hello.net.uk</td>
      <td>3</td>
    </tr>

    <tr>
      <td>1235</td>
      <td>Anderson</td>
      <td>Louise</td>
      <td>01999999999</td>
      <td>louise@a.org.uk</td>
      <td>2</td>
    </tr>

    <tr>
      <td>1236</td>
      <td>Ali</td>
      <td>Hussain</td>
      <td>08876767676</td>
      <td>hali@house.com</td>
      <td>4</td>
    </tr>
  </tbody>
</table>

A procedure is needed to sort the application details in order of last name. 

The sort procedure will use a bubble sort algorithm that makes use of a Boolean variable. 

Create the program and a procedure to sort the array of records in ascending order of last name. Your design should make use of the array applicants[] data structure. 
