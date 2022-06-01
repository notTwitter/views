## Bug Reports ##
<br>

--- 
  **Bug**: The page is stuck at the bottom when using column reverse<br>
  **File**: Credentials.css.ts<br>
  **Fix**: Set the container element[MainSection} to 'justify: flex-END'. It appears that when using column reverse, the positions of flex-end & flex-start are reversed.<br>
  **Note**: To see bug 1 in action, remove the solution, set  [500px < screen size <1024px] and keep increasing screen height.