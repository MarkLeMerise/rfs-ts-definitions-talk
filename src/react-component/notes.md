Interesting lessons from defining types for `react-clipboard.js`:

* `this` assignments that create pseudo-`private` members
* Docs that don't fully realize the API surface
* Confusing API because you can use React props _or_ just `data-` and `option-` attributes (that's pretty irregular for a React component)
* There are already types in progress (interesting to compare)
* React cleanly separates external interface and internal state, so it's an encourage way to think
* Good opportunity to mingle docs in with types or fill in missing pieces (example: "type" prop, very generic name)