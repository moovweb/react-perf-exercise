# React Performance Exercise

## Getting Up and Running

First, download (don't clone) the repo and run:

```
cd react-perf-exercise
yarn
```

To run the app locally:

```
yarn dev
```

## Exercise Overview

This overly simple clothing store app consists of two pages:

- `/` - A list of products
- `/product/[productId]` - View a single product

There are numerous performance problems in this app that could be fixed:

- How can you improve the lighthouse performance score for the [product listing page](http://localhost:3000)?
- Changing colors on the [product listing page](http://localhost:3000) could be faster. You can see a noticeable delay if you apply 6x slowdown to your CPU using chrome developer tools. How can you improve this?
- [Product pages](http://localhost:3000/product/1) load quite slowly. This is due to an artifical delay in `pages/api/product.js` meant to simulate a slow API. Assume you can't improve the speed of the API. How can you make the transition from the listing page to the product page feel faster?

## Submitting your Solution

- Upload your solution to a new GitHub repository.
- We will review your solution over Zoom at the end of the two hours.
