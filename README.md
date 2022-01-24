# :wave: The Basics of P5 

## 🤓 Course overview and learning outcomes 💻

This assignment is going to build on from the p5-DiceFunctions assignment. In the p5 Dice Functions Assignment we created multiple representations of dice on the canvas. The image below shows an implementation of a six sided dice. The code provided in this assignment will display this when ran.

![image](https://user-images.githubusercontent.com/67816866/149947198-5007a33d-6497-413c-8a6f-8272f3261ac8.png)

Over the next couple of Assignments we are going to utilise the functions we have just created in order to make a JavaScript representation of a dice. This will be in the form of a button on the screen that when pressed will generate a representation on screen of a dice roll.

This assignment will focus on learning about function parameters. Links to the p5.js reference pages can be found below. The page links provide more information on the function keyword.

## Parameters
[Mozilla Parameters Documentation](https://developer.mozilla.org/en-US/docs/Glossary/Parameter) This link will take you to the Mozilla documentation regarding Parameters.

When using parameters there are two key terms used 'Parameters' and 'Arguments'. The difference between the two terms the following;
* Function parameters are the names listed in the function's definition.
* Function arguments are the real values passed to the function.
* Parameters are initialized to the values of the arguments supplied.

In terms of scope, a parameter being passed into a function is within the local scope of that function. The value will not be available outside of that function unless it is returned. (Functions with return values will be examined over the next couple of assignments).

## Task - Add a parameter to determine the size of the square for the dice.
To do this we need to edit the function signature of diceValueOne(). To do this we will add a parameter to the function signature like below.
![image](https://user-images.githubusercontent.com/67816866/150308886-02b319d2-96c4-4338-b160-e760f9fd6b57.png)

Like a variable the parameter is a type of holder. The code will still run and produce the expected outcome.
![image](https://user-images.githubusercontent.com/67816866/150310247-f471105a-b6d8-4bb8-b28e-f456cecce92a.png)

* Why is the code still working? 
Add a small description below stating why the addition of a parameter isn't breaking the code. Would you expect the code to break?


<details>
  <summary> After the parameter is declared click here </summary>
  Once the parameter is declared, it can be accessed throghout the scope of the function. We are able to reference it and the value of the argument provided.
  ![image](https://user-images.githubusercontent.com/67816866/150339083-44d240c7-4430-4fe8-b6e4-db06e78542a6.png)

  
  * Modify the process within the diceValueOne() function to make use of the size parameter that's being passed in. To see whats going on in more clearly, remove the other function calls of diceValue2-6() from the draw() function for the time being. (These functions can either be deleted or commented out).
  
  * Add a screenshot of the result below here.
  
  
  * What modifications do we need to make to the code/function in order for the dice to resemble a classic dice? Write down some ideas of what modifications are required below.
  
  <details>
    <summary> Click here to see how to use the parameters within code </summary>
  ![image](https://user-images.githubusercontent.com/67816866/150339390-468ba508-6fb9-4dc2-87e0-69d62e9b07ff.png)
    
   
    * Now that the parameter is being referenced within the function, we need to supply an argument. This is shown within the image above. (for some reason the image above isn't showing within this document, copying the link into a browser should show the image)

  </details>

  ## Task
  * Make the same modifications to the other diceValueX() functions. 
  Post screenshots below of the outcomes of adding the size parameter to the dice functions.

  ## Extra task
  * Can you add parameters for the position (x and y) of the dice? What modifications are required to make the dice resemble a classic dice when the position is modified? 
  Post screenshots below of the outcomes of adding the position parameters to the dice functions.
  The syntax for multiple parameters is;

  ```js 
    function example(parameter , parameter2, parameter3, ... parameterX) {
      console.log(parameter);
      console.log(parameter1);
      console.log(parameter2);
      console.log(parameter3);
    }
   ```
  
</details>

## 📚  Resources / References
* [p5.js function reference](https://p5js.org/reference/#/p5/function)
* [p5.js let reference](https://p5js.org/reference/#/p5/let)
* [Mozilla Variable Documentation](https://developer.mozilla.org/en-US/docs/Glossary/Variable)
* [Mozilla Variable Declaration Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#declarations)
* [Mozilla Scope Documentation](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
* [p5.js Point Function Reference](https://p5js.org/reference/#/p5/point) 
* [p5.js Square Function Reference](https://p5js.org/reference/#/p5/square)
* [p5.js Stroke Width Function Reference](https://p5js.org/reference/#/p5/strokeWeight)
