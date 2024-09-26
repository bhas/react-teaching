

# Why learn React?

### Challenges of JS

Imagine the code below. Is it easy for you to understand what it does?

``` js
document.addEventListener("DOMContentLoaded", () => {
    addComment("Bjørn Vinther", "I think Javascript is EVIL!");
    addComment("Jerry", "Me too!");
});

// Function to add a new comment
function addComment(username, commentText) {
    const commentBlock = document.createElement('div');
    commentBlock.className = 'comment';

    const commentUser = document.createElement('h4');
    commentUser.textContent = username;

    const commentDate = document.createElement('div');
    const currentDate = new Date().toLocaleString(); // Get current date and time
    commentDate.className = 'comment-date';
    commentDate.textContent = `Posted on: ${currentDate}`;

    const commentParagraph = document.createElement('p');
    commentParagraph.textContent = commentText;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn';
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
    commentBlock.remove();
    };

    commentBlock.appendChild(commentUser);
    commentBlock.appendChild(commentDate);
    commentBlock.appendChild(commentParagraph);
    commentBlock.appendChild(deleteButton);

    const commentsContainer = document.getElementById('comments-container');
    commentsContainer.appendChild(commentBlock);
}
```

<details>
  <summary>Click here to see how it will look</summary>
  ![JS-vs-React](/react1-week1/assets/js-ui.jpg)
</details>

From the above code we already see a few annoying things:

> [!CAUTION]
> - HTML cannot be mixed with JS but instead relys on DOM manipulations using JS
> - JS requires us to manually keeping track of the state of each part of the UI using veriables and event listeners. This makes it difficult to manage as the app grows.
> - Negative potential consequences of an action.

> ❌ HTML cannot be mixed with JS but instead relys on DOM manipulations using JS

> ❌ 

❌

In comparison this is how the same code would look in React:
```jsx
export default function App() {
  return (
    <div className="comments-container">
      <Comment username="Bjørn Vinther" commentText="I think Javascript is EVIL!" />
      <Comment username="Jerry" commentText="Try use React instead. It is much simpler once you get the hang of it." />
    </div>
  )
}

function Comment({username, commentText}) {
  const currentDate = new Date().toLocaleString(); // Get current date and time

  const deleteComment = () => {
    // add code to delete comment here...
  }

  // Notice how familiar the syntax is to HTML
  return (
    <div className="comment">
      <h4>{username}</h4>
      <div className="comment-date">Posted on: {currentDate}</div>
      <p>{commentText}</p>
      <button onClick={deleteComment} className="delete-btn">Delete</button>
    </div>
  );
}
```

| JS    | React |
| -------- | ------- |
| ❌ Does not allow us to mix HTML and JS | ✅ Enables us to write JSX which has a syntax very similar to HMTL    |
| ❌ Is imperative which means we have to define all steps (DOM manipulations) to achieve our goal | ✅ Is declarative which means we can just declare our goal and React will figure out what to do |
| ❌ Requires us to manually maintain the state of the UI elements | ✅ Has build-in support for components and easy ways of managing their state     |
| ❌ Frequent DOM updates can be slow | ✅ Is fast by using an in-memory virtual DOM to effeciently calculate which DOM updates are required |
| ❌ Has limited tools available | ✅ Has a very active community and a vast number of libraries free of use |
| ❌ Is rarely used for bigger applications | ✅ Is currently one of the JS-based libraries in highest demand |

> [!TIP]
> Declarative vs Imperative - Declarative means we declare what we want, Imperative means we describe how to do it. 
>
> Example - Calling a pizzaria and telling them which pizzas we want is a declarative approach. Calling the pizzaria and telling them each step to cook our pizza would be an imperative approach.