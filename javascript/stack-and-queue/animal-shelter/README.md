# Challenge Title Animal Shelter
Create an AnimalShelter class that represents a shelter for dogs and cats. The shelter should maintain separate queues for dogs and cats. The class should have the following methods:
### Animal
Create an Animal class that has properties for the species and name of the animal.
### AnimalShelter
Create an AnimalShelter class that has two separate queues for dogs and cats. It creates an empty shelter when instantiated.
The class should contain the following methods:
### enqueue
Arguments: animal (instance of Animal class)
Adds the given animal to the appropriate queue (dog queue for dogs and cat queue for cats).
### dequeue
Arguments: preference (string specifying the preferred species: 'dog' or 'cat')
Returns: the animal from the front of the queue based on the preference.
Removes the animal from the front of the queue based on the preference.
Returns null if the requested preference is not available or if the shelter is empty.
### isEmpty
Arguments: none
Returns: a boolean indicating whether or not the shelter is empty.
### Structure and Testing
Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts of the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.
Be sure to follow your language/framework's standard naming conventions (e.g., C# uses PascalCasing for all method and class names).
Write tests to prove the following functionality:
should successfully enqueue an animal into the shelter
should successfully enqueue multiple animals into the shelter
should successfully dequeue an animal from the shelter
should return null when calling dequeue on an empty shelter
should return null when calling dequeue with an invalid preference
should return null when calling dequeue with a preference that has no animals
should return true if the shelter is empty
should return false if the shelter is not empty
## Whiteboard Process
  Code Challenge 11
[Whiteboard For CC 11](../animal-shelter/whiteboard-animal-shelter.png)
## Approach & Efficiency
I took the approach of following along with this one and watching some videos on the side to better grasp stacks and queues. I focused on what we learned in class and used it to finish out the project.
## Solution
Code Challenge 11
[Whiteboard For CC 11](../animal-shelter/whiteboard-animal-shelter.png)
## Collaboration
Thanks to Reece, Katie, Kaeden, Eva
Thanks to chatgpt for helping with the testing
#### prompts
Using the below code as my standard, can you help make a series of tests that match the following asks for my new Animal Shelter Class
Write tests to prove the following functionality:
* should successfully enqueue an animal into the shelter
* should successfully enqueue multiple animals into the shelter
* should successfully dequeue an animal from the shelter
* should return null when calling dequeue on an empty shelter
* should return null when calling dequeue with an invalid preference
* should return null when calling dequeue with a preference that has no animals
* should return true if the shelter is empty
* should return false if the shelter is not empty